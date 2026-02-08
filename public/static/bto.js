// ======================================
// 妙覚寺 九州巡回法要 BTO - カスタマイザー
// ======================================

// プランデータ
const plans = {
  simple: {
    id: 'simple',
    name: '火葬式プラン Simple Plan',
    price: 50000,
    description: '読経（炉前）・戒名授与・お車代込み',
    included: ['炉前読経', '戒名授与（信士・信女）', 'お車代', '出張費']
  },
  standard: {
    id: 'standard',
    name: '標準プラン Standard Plan',
    price: 150000,
    description: '葬儀読経・初七日・戒名・お車代込み',
    included: ['葬儀読経', '初七日法要', '戒名授与（信士・信女）', 'お車代', '御膳料', '出張費'],
    recommended: true
  },
  full: {
    id: 'full',
    name: '安心プラン Full Support',
    price: 200000,
    description: '葬儀一式＋四十九日法要',
    included: ['葬儀読経', '初七日法要', '四十九日法要', '戒名授与（信士・信女）', 'お車代', '御膳料', '出張費']
  },
  memorial: {
    id: 'memorial',
    name: '法要プラン Memorial',
    price: 40000,
    description: '単発読経・納骨・開眼・お車代込み',
    included: ['読経', '納骨式', '開眼供養', 'お車代', '出張費']
  }
};

// オプションデータ
const options = {
  kaimyo_koji: {
    id: 'kaimyo_koji',
    name: '戒名ランクアップ（居士・大姉）',
    price: 100000,
    category: '戒名'
  },
  kaimyo_in: {
    id: 'kaimyo_in',
    name: '戒名ランクアップ（院号）',
    price: 300000,
    category: '戒名'
  },
  zusho_ceremony: {
    id: 'zusho_ceremony',
    name: '図書読経（追加法要）',
    price: 30000,
    category: '法要'
  },
  memorial_7days: {
    id: 'memorial_7days',
    name: '七日ごと追善供養（6回分）',
    price: 120000,
    category: '法要'
  },
  memorial_annual: {
    id: 'memorial_annual',
    name: '年忌法要（一周忌・三回忌等）',
    price: 40000,
    category: '法要'
  },
  grave_opening: {
    id: 'grave_opening',
    name: '墓地開眼供養',
    price: 50000,
    category: '供養'
  },
  sutra_copy: {
    id: 'sutra_copy',
    name: 'お写経セット',
    price: 10000,
    category: '供養'
  },
  distance_far: {
    id: 'distance_far',
    name: '遠方出張費（片道50km以上）',
    price: 20000,
    category: '出張'
  }
};

// カスタマイザー状態
let selectedPlan = null;
let selectedOptions = new Set();

// 初期化
function initBTO() {
  renderPlans();
  renderOptions();
  updateSummary();
  
  // スムーススクロール
  document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('click', () => {
      const planId = card.dataset.plan;
      selectPlan(planId);
      
      // オプションセクションへスクロール
      const optionsSection = document.getElementById('bto-options');
      if (optionsSection) {
        optionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// プラン描画
function renderPlans() {
  const container = document.getElementById('planSelect');
  if (!container) return;
  
  container.innerHTML = Object.values(plans).map(plan => `
    <div class="plan-card ${plan.recommended ? 'plan-card--recommended' : ''}" 
         data-plan="${plan.id}">
      ${plan.recommended ? '<span class="plan-badge">推奨</span>' : ''}
      <h3 class="plan-title">${plan.name}</h3>
      <div class="plan-price">
        <span class="plan-price-amount">¥${plan.price.toLocaleString()}</span>
        <span class="plan-price-unit">〜（税込）</span>
      </div>
      <p class="plan-description">${plan.description}</p>
      <ul class="plan-features">
        ${plan.included.map(item => `<li><span class="icon">✓</span>${item}</li>`).join('')}
      </ul>
      <button class="plan-select-btn" onclick="selectPlan('${plan.id}')">
        このプランを選ぶ
      </button>
    </div>
  `).join('');
}

// オプション描画
function renderOptions() {
  const container = document.getElementById('optionsList');
  if (!container) return;
  
  // カテゴリーごとにグループ化
  const categories = {
    '戒名': [],
    '法要': [],
    '供養': [],
    '出張': []
  };
  
  Object.values(options).forEach(option => {
    categories[option.category].push(option);
  });
  
  container.innerHTML = Object.entries(categories).map(([category, items]) => `
    <div class="option-category">
      <h4 class="option-category-title">${category}</h4>
      <div class="option-items">
        ${items.map(option => `
          <label class="option-item">
            <input type="checkbox" 
                   id="option-${option.id}" 
                   value="${option.id}"
                   onchange="toggleOption('${option.id}')">
            <div class="option-content">
              <div class="option-header">
                <span class="option-name">${option.name}</span>
                <span class="option-price">+¥${option.price.toLocaleString()}</span>
              </div>
            </div>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// プラン選択
function selectPlan(planId) {
  selectedPlan = planId;
  
  // ビジュアル更新
  document.querySelectorAll('.plan-card').forEach(card => {
    card.classList.remove('plan-card--selected');
  });
  
  const selectedCard = document.querySelector(`[data-plan="${planId}"]`);
  if (selectedCard) {
    selectedCard.classList.add('plan-card--selected');
  }
  
  updateSummary();
}

// オプション切り替え
function toggleOption(optionId) {
  if (selectedOptions.has(optionId)) {
    selectedOptions.delete(optionId);
  } else {
    selectedOptions.add(optionId);
  }
  updateSummary();
}

// サマリー更新
function updateSummary() {
  const summaryContainer = document.getElementById('summaryDetails');
  const totalContainer = document.getElementById('totalAmount');
  
  if (!summaryContainer || !totalContainer) return;
  
  let total = 0;
  let items = [];
  
  // 選択されたプラン
  if (selectedPlan) {
    const plan = plans[selectedPlan];
    total += plan.price;
    items.push({
      name: plan.name,
      price: plan.price,
      type: 'plan'
    });
  }
  
  // 選択されたオプション
  selectedOptions.forEach(optionId => {
    const option = options[optionId];
    total += option.price;
    items.push({
      name: option.name,
      price: option.price,
      type: 'option'
    });
  });
  
  // サマリー描画
  if (items.length === 0) {
    summaryContainer.innerHTML = '<p class="summary-empty">プランまたはオプションを選択してください</p>';
    totalContainer.textContent = '¥0';
  } else {
    summaryContainer.innerHTML = items.map(item => `
      <div class="summary-item">
        <span class="summary-item-name">
          ${item.type === 'plan' ? '【基本】' : '【追加】'}${item.name}
        </span>
        <span class="summary-item-price">¥${item.price.toLocaleString()}</span>
      </div>
    `).join('');
    
    totalContainer.textContent = `¥${total.toLocaleString()}`;
  }
  
  // 問い合わせボタンの更新
  updateContactButton(total);
}

// 問い合わせボタン更新
function updateContactButton(total) {
  const contactBtn = document.querySelector('.summary-contact-btn');
  if (!contactBtn) return;
  
  if (total > 0) {
    contactBtn.disabled = false;
    contactBtn.innerHTML = `
      <span class="icon">✉</span>
      この内容でLINE相談する
    `;
    
    // LINEメッセージを準備
    const message = generateLineMessage();
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;
    contactBtn.onclick = () => window.open(lineUrl, '_blank');
  } else {
    contactBtn.disabled = true;
    contactBtn.innerHTML = `
      <span class="icon">✉</span>
      プランを選択してください
    `;
    contactBtn.onclick = null;
  }
}

// LINEメッセージ生成
function generateLineMessage() {
  let message = '【妙覚寺 福岡窓口 お見積もり】\n\n';
  
  if (selectedPlan) {
    const plan = plans[selectedPlan];
    message += `■ 基本プラン\n${plan.name}\n¥${plan.price.toLocaleString()}\n\n`;
  }
  
  if (selectedOptions.size > 0) {
    message += '■ 追加オプション\n';
    selectedOptions.forEach(optionId => {
      const option = options[optionId];
      message += `${option.name} ¥${option.price.toLocaleString()}\n`;
    });
    message += '\n';
  }
  
  const total = calculateTotal();
  message += `━━━━━━━━━━\n合計: ¥${total.toLocaleString()}（税込・お車代込み）\n\n`;
  message += 'このプランについて相談したいです。';
  
  return message;
}

// 合計計算
function calculateTotal() {
  let total = 0;
  
  if (selectedPlan) {
    total += plans[selectedPlan].price;
  }
  
  selectedOptions.forEach(optionId => {
    total += options[optionId].price;
  });
  
  return total;
}

// ページ読み込み時に初期化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBTO);
} else {
  initBTO();
}
