// ======================================
// 妙覚寺 福岡窓口 - BTO見積もりカスタマイザー
// ======================================

// プランデータ
const plans = {
  cremation: {
    id: 'cremation',
    name: '火葬式プラン',
    price: 50000,
    description: '火葬場にて、最後のお別れのお経を丁寧にあげさせていただきます。',
    includes: '読経（炉前）・戒名授与（信士・信女）・お車代・出張費'
  },
  standard: {
    id: 'standard',
    name: '標準プラン',
    price: 150000,
    description: '故人様を偲び、真心を込めて読経いたします。葬儀当日に繰り上げて行う初七日法要も含まれています。',
    includes: '葬儀読経・初七日法要・戒名授与（信士・信女）・お車代・御膳料・出張費'
  },
  full: {
    id: 'full',
    name: '安心プラン',
    price: 200000,
    description: '標準プランの内容に加え、最も重要な追善供養である四十九日の奉修も含まれています。',
    includes: '葬儀読経・初七日法要・四十九日法要・戒名授与（信士・信女）・お車代・御膳料・出張費'
  },
  memorial: {
    id: 'memorial',
    name: '法要プラン',
    price: 40000,
    description: '年回忌法要、納骨式、お仏壇の開眼供養など、様々な法要を承ります。',
    includes: '読経・納骨式・開眼供養・お車代・出張費'
  }
};

// オプションデータ
const options = [
  { id: '49', name: '四十九日法要', price: 50000 },
  { id: 'memorial', name: '年回忌法要', price: 40000 },
  { id: 'grave', name: '納骨式', price: 40000 },
  { id: 'butsudan', name: '開眼供養（お仏壇）', price: 40000 },
  { id: 'tsuizen', name: '追善供養', price: 30000 },
  { id: 'kaimyo_koji', name: '戒名ランクアップ（居士・大姉）', price: 100000 },
  { id: 'kaimyo_in', name: '戒名ランクアップ（院号）', price: 300000 },
  { id: 'distance', name: '遠方出張費（片道50km以上）', price: 20000 }
];

// 状態管理
let currentPlan = 'standard';
let selectedOptions = new Set();

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  initBTO();
});

function initBTO() {
  // プランセレクトのイベント
  const planSelect = document.getElementById('basePlanSelect');
  if (planSelect) {
    planSelect.addEventListener('change', handlePlanChange);
    // 初期表示
    updatePlanDetail();
  }

  // オプションチェックボックスのイベント
  const optionCheckboxes = document.querySelectorAll('.bto-option input[type="checkbox"]');
  optionCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleOptionChange);
  });

  // 初期計算
  calculateTotal();
}

// プラン変更ハンドラ
function handlePlanChange(e) {
  currentPlan = e.target.value;
  updatePlanDetail();
  calculateTotal();
}

// プラン詳細更新
function updatePlanDetail() {
  const plan = plans[currentPlan];
  const detailDiv = document.getElementById('planDetail');
  
  if (plan && detailDiv) {
    detailDiv.innerHTML = `
      <p class="bto-plan-includes">
        <strong>含まれる内容：</strong>${plan.includes}
      </p>
    `;
  }
}

// オプション変更ハンドラ
function handleOptionChange(e) {
  const optionId = e.target.value;
  
  if (e.target.checked) {
    selectedOptions.add(optionId);
  } else {
    selectedOptions.delete(optionId);
  }
  
  calculateTotal();
}

// 合計計算と表示更新
function calculateTotal() {
  const plan = plans[currentPlan];
  let total = plan.price;
  
  // 内訳アイテムを構築
  let breakdownHTML = `
    <div class="bto-summary-item bto-summary-item-base">
      <span class="bto-summary-item-name">${plan.name}</span>
      <span class="bto-summary-item-price">¥${plan.price.toLocaleString()}</span>
    </div>
  `;
  
  // 選択されたオプションを追加
  selectedOptions.forEach(optionId => {
    const option = options.find(opt => opt.id === optionId);
    if (option) {
      total += option.price;
      breakdownHTML += `
        <div class="bto-summary-item">
          <span class="bto-summary-item-name">${option.name}</span>
          <span class="bto-summary-item-price">+¥${option.price.toLocaleString()}</span>
        </div>
      `;
    }
  });
  
  // DOM更新
  const summaryItems = document.getElementById('summaryItems');
  const totalPrice = document.getElementById('totalPrice');
  
  if (summaryItems) {
    summaryItems.innerHTML = breakdownHTML;
  }
  
  if (totalPrice) {
    totalPrice.textContent = `¥${total.toLocaleString()}`;
  }
  
  // CTAボタンのLINEメッセージを更新
  updateCTAButton(total);
}

// CTAボタン更新
function updateCTAButton(total) {
  const ctaButton = document.querySelector('.bto-summary-cta');
  if (!ctaButton) return;
  
  const plan = plans[currentPlan];
  let message = `【妙覚寺 福岡窓口 お見積もり】\n\n`;
  message += `■ 基本プラン\n${plan.name}　¥${plan.price.toLocaleString()}\n\n`;
  
  if (selectedOptions.size > 0) {
    message += `■ 追加オプション\n`;
    selectedOptions.forEach(optionId => {
      const option = options.find(opt => opt.id === optionId);
      if (option) {
        message += `${option.name}　¥${option.price.toLocaleString()}\n`;
      }
    });
    message += `\n`;
  }
  
  message += `━━━━━━━━━━\n`;
  message += `合計: ¥${total.toLocaleString()}（税込・お車代込み）\n\n`;
  message += `このプランについて相談したいです。`;
  
  // LINEのURL（実際のLINE URLに置き換えてください）
  const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;
  ctaButton.href = lineUrl;
}
