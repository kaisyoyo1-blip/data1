import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      {/* Loading Screen */}
      <div id="loadingScreen" class="loading-screen">
        <div class="loading-content">
          <p class="loading-text">あなたと共に、ただ祈る。<br />お寺が、直接伺います。</p>
        </div>
      </div>

      <div class="wrapper">
        {/* Header */}
        <header class="header" id="header">
          <div class="header-inner">
            <div class="header-logo">
              <h1 class="header-title">妙覚寺 福岡窓口</h1>
              <p class="header-subtitle">檀家にならなくても頼める、由緒あるお寺の読経</p>
            </div>
            <nav class="header-nav">
              <a href="#reason" class="nav-link">選ばれる理由</a>
              <a href="#plans" class="nav-link">費用・見積もり</a>
              <a href="#flow" class="nav-link">ご依頼の流れ</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section class="hero">
          <div class="container">
            <div class="hero-inner fade-in">
              <p class="hero-tagline">EST. 1424 ── 九州日蓮宗の源流</p>
              
              <div class="hero-visual">
                <img src="/static/temple-family.jpg" alt="お寺でお参りする家族" loading="lazy" />
              </div>

              <h1 class="hero-title">
                あなたと生きた日々が、<br />お経になる。
              </h1>

              <p class="hero-subtitle">
                檀家にならなくても頼める、由緒あるお寺の読経。<br />
                法事・葬儀を、<strong>必要な時だけ。</strong>
              </p>

              <div class="hero-cta">
                <a href="#" class="btn-cta btn-cta-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  <span>LINEで相談・見積もり</span>
                </a>
                <a href="tel:0123456789" class="btn-cta btn-cta-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>電話で相談</span>
                </a>
              </div>

              <div class="hero-trust">
                <span>お布施定額</span>
                <span>檀家義務なし</span>
                <span>福岡・熊本 出張対応</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reason Section */}
        <section id="reason" class="section section-alt">
          <div class="container">
            <div class="fade-in">
              <div class="section-header">
                <span class="section-label">WHY US</span>
                <h3 class="section-title">選ばれる３つの理由</h3>
                <div class="section-divider"></div>
              </div>

              <div class="reason-grid">
                <div class="reason-card">
                  <div class="reason-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                  </div>
                  <h4 class="reason-title">お布施は「定額」です</h4>
                  <p class="reason-desc">
                    「お気持ちで」とは言いません。全てのプランで費用を明示しています。後からの追加請求や、寄付の強要などは一切ございません。
                  </p>
                </div>

                <div class="reason-card">
                  <div class="reason-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
                  </div>
                  <h4 class="reason-title">「檀家」義務なし</h4>
                  <p class="reason-desc">
                    読経のご依頼は一回限りでも構いません。入会金や年会費、寄付金といった、維持費のご負担をお願いすることはございません。
                  </p>
                </div>

                <div class="reason-card">
                  <div class="reason-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6 2 7"></path><path d="m22 7-2-1"></path><path d="M7 2h10"></path><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 16V7.5a.5.5 0 0 0-.5-.5h-1"></path><path d="M3 16V7.5a.5.5 0 0 1 .5-.5h1"></path><circle cx="12" cy="16" r="5"></circle><path d="M12 16V7"></path></svg>
                  </div>
                  <h4 class="reason-title">九州最初の「格式」</h4>
                  <p class="reason-desc">
                    当山は九州で最初に日蓮宗が布教された「源流」の寺院です。歴史に裏打ちされた正統な作法で、大切な方の旅立ちを厳かに見送ります。
                  </p>
                </div>
              </div>

              <div class="reason-origin">
                <p class="reason-origin-label">ORIGIN</p>
                <p class="reason-origin-text">
                  当窓口は、佐賀に600年続く「竹原山 妙覚寺（佐賀本院）」の公式出張所です。<br />
                  確かな歴史的背景のもと、責任を持って供養いたします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" class="section">
          <div class="container">
            <div class="fade-in">
              <div class="section-header">
                <span class="section-label">PLANS & ESTIMATE</span>
                <h3 class="section-title">お布施・料金プラン</h3>
                <p class="section-desc">
                  福岡・熊本 どこでも出張訪問。仲介料ゼロの寺院直販価格。<br />
                  お車代・御膳料など全て込みの総額表示です。
                </p>
              </div>

              <div class="plans">
                <div class="plan-card">
                  <h3 class="plan-name">火葬式プラン</h3>
                  <p class="plan-english">Simple Plan</p>
                  <div class="plan-price">
                    <span class="price-amount">5</span>
                    <span class="price-unit">万円〜</span>
                  </div>
                  <p class="price-tax">（税込）</p>
                  <p class="plan-includes">読経（炉前）・戒名授与・お車代込み</p>
                  <p class="plan-description">
                    火葬場にて、最後のお別れのお経を丁寧にあげさせていただきます。仏弟子としての証（信士・信女）をお授けします。交通費も全て含まれております。
                  </p>
                </div>

                <div class="plan-card recommended">
                  <div class="recommended-badge">RECOMMENDED</div>
                  <h3 class="plan-name">標準プラン</h3>
                  <p class="plan-english">Standard Plan</p>
                  <div class="plan-price">
                    <span class="price-amount">15</span>
                    <span class="price-unit">万円〜</span>
                  </div>
                  <p class="price-tax">（税込）</p>
                  <p class="plan-includes">葬儀読経・初七日・戒名・お車代込み</p>
                  <p class="plan-description">
                    故人様を偲び、真心を込めて読経いたします。葬儀当日に繰り上げて行う法要も含まれています。源流の寺院としての格式で、丁寧にお送りします。
                  </p>
                </div>

                <div class="plan-card">
                  <h3 class="plan-name">安心プラン</h3>
                  <p class="plan-english">Full Support</p>
                  <div class="plan-price">
                    <span class="price-amount">20</span>
                    <span class="price-unit">万円〜</span>
                  </div>
                  <p class="price-tax">（税込）</p>
                  <p class="plan-includes">葬儀一式 ＋ 四十九日法要</p>
                  <p class="plan-description">
                    標準プランの内容（葬儀・初七日・戒名）に加え、最も重要な追善供養である四十九日の奉修も含まれています。今後の仏事も優先的にサポートします。
                  </p>
                </div>

                <div class="plan-card">
                  <h3 class="plan-name">法要プラン</h3>
                  <p class="plan-english">Memorial</p>
                  <div class="plan-price">
                    <span class="price-amount">4</span>
                    <span class="price-unit">万円〜</span>
                  </div>
                  <p class="price-tax">（税込）</p>
                  <p class="plan-includes">単発読経・納骨・開眼・お車代込み</p>
                  <p class="plan-description">
                    様々な年回忌法要を承ります。お墓への納骨式や、お仏壇の開眼供養なども同額で対応可能です。ご自宅や墓地への出張費も含みます。
                  </p>
                </div>
              </div>

              <div class="why-low-price fade-in">
                <div class="why-low-price-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
                </div>
                <div class="why-low-price-content">
                  <h5 class="why-low-price-title">仲介料ゼロの「寺院直販価格」</h5>
                  <p class="why-low-price-text">
                    葬儀社や仲介業者を通さず、お寺から直接ご依頼をお受けしています。
                    中間マージンがないため、600年の格式と正統な作法を保ちながら、この価格でのご提供が可能です。
                  </p>
                </div>
              </div>

              <div class="bto-customize-link fade-in">
                <button class="btn-bto-link" onclick="openBTOModal()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6M12 17v6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M1 12h6M17 12h6M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2"></path></svg>
                  <span>もっと細かくカスタマイズして見積もりを作成</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* BTO Modal */}
        <div id="btoModal" class="bto-modal">
          <div class="bto-modal-overlay" onclick="closeBTOModal()"></div>
          <div class="bto-modal-content">
            <button class="bto-modal-close" onclick="closeBTOModal()" aria-label="閉じる">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div class="bto-modal-header">
              <span class="section-label">CUSTOMIZE</span>
              <h3 class="section-title">法要のカスタマイズ見積もり</h3>
              <p class="section-desc">
                下記のステップで必要なオプションを選択し、お布施の概算をご確認いただけます。<br />
                お車代・御膳料など全て込みの分かりやすい価格体系です。
              </p>
            </div>

            <div class="bto-modal-body">
              <div class="bto-layout">
                {/* Left: Configuration */}
                <div class="bto-config">
                  {/* Step 1: Base Plan */}
                  <div class="bto-step">
                    <div class="bto-step-header">
                      <span class="bto-step-badge">STEP 1</span>
                      <h4 class="bto-step-title">基本法要を選ぶ</h4>
                    </div>
                    <div class="bto-select-wrapper">
                      <select class="bto-select" id="basePlanSelect">
                        <option value="cremation">火葬式（5万円）</option>
                        <option value="standard" selected>標準プラン（15万円）</option>
                        <option value="full">安心プラン（20万円）</option>
                        <option value="memorial">法要プラン（4万円）</option>
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bto-select-icon"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                    <div class="bto-plan-detail" id="planDetail">
                      <p class="bto-plan-includes"><strong>含まれる内容：</strong>葬儀読経・初七日・戒名・お車代</p>
                    </div>
                  </div>

                  {/* Step 2: Options */}
                  <div class="bto-step">
                    <div class="bto-step-header">
                      <span class="bto-step-badge">STEP 2</span>
                      <h4 class="bto-step-title">追加の法要・供養</h4>
                    </div>
                    <div class="bto-options">
                      <label class="bto-option">
                        <input type="checkbox" name="option" value="49" data-price="50000" />
                        <span class="bto-option-check"></span>
                        <div class="bto-option-content">
                          <span class="bto-option-name">四十九日法要</span>
                          <span class="bto-option-price">+5万円</span>
                        </div>
                      </label>

                      <label class="bto-option">
                        <input type="checkbox" name="option" value="memorial" data-price="40000" />
                        <span class="bto-option-check"></span>
                        <div class="bto-option-content">
                          <span class="bto-option-name">年回忌法要</span>
                          <span class="bto-option-price">+4万円</span>
                        </div>
                      </label>

                      <label class="bto-option">
                        <input type="checkbox" name="option" value="grave" data-price="40000" />
                        <span class="bto-option-check"></span>
                        <div class="bto-option-content">
                          <span class="bto-option-name">納骨式</span>
                          <span class="bto-option-price">+4万円</span>
                        </div>
                      </label>

                      <label class="bto-option">
                        <input type="checkbox" name="option" value="butsudan" data-price="40000" />
                        <span class="bto-option-check"></span>
                        <div class="bto-option-content">
                          <span class="bto-option-name">開眼供養（お仏壇）</span>
                          <span class="bto-option-price">+4万円</span>
                        </div>
                      </label>

                      <label class="bto-option">
                        <input type="checkbox" name="option" value="tsuizen" data-price="30000" />
                        <span class="bto-option-check"></span>
                        <div class="bto-option-content">
                          <span class="bto-option-name">追善供養</span>
                          <span class="bto-option-price">+3万円</span>
                        </div>
                      </label>

                      <label class="bto-option">
                        <input type="checkbox" name="option" value="kaimyo_koji" data-price="100000" />
                        <span class="bto-option-check"></span>
                        <div class="bto-option-content">
                          <span class="bto-option-name">戒名ランクアップ（居士・大姉）</span>
                          <span class="bto-option-price">+10万円</span>
                        </div>
                      </label>

                      <label class="bto-option">
                        <input type="checkbox" name="option" value="kaimyo_in" data-price="300000" />
                        <span class="bto-option-check"></span>
                        <div class="bto-option-content">
                          <span class="bto-option-name">戒名ランクアップ（院号）</span>
                          <span class="bto-option-price">+30万円</span>
                        </div>
                      </label>

                      <label class="bto-option">
                        <input type="checkbox" name="option" value="distance" data-price="20000" />
                        <span class="bto-option-check"></span>
                        <div class="bto-option-content">
                          <span class="bto-option-name">遠方出張費（片道50km以上）</span>
                          <span class="bto-option-price">+2万円</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right: Summary */}
                <div class="bto-summary">
                  <div class="bto-summary-card">
                    <h4 class="bto-summary-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                      お見積り構成
                    </h4>

                    <div class="bto-summary-items" id="summaryItems">
                      <div class="bto-summary-item bto-summary-item-base">
                        <span class="bto-summary-item-name">標準プラン</span>
                        <span class="bto-summary-item-price">¥150,000</span>
                      </div>
                    </div>

                    <div class="bto-summary-total">
                      <span class="bto-summary-total-label">合計金額（税込）</span>
                      <span class="bto-summary-total-price" id="totalPrice">¥150,000</span>
                    </div>

                    <p class="bto-summary-note">※お車代・御膳料すべて込み</p>

                    <a href="#" class="bto-summary-cta">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                      <span>この見積もりで相談する</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Section */}
        <section id="flow" class="section section-alt">
          <div class="container">
            <div class="fade-in">
              <div class="section-header">
                <span class="section-label">FLOW</span>
                <h3 class="section-title">ご依頼の流れ</h3>
                <p class="section-desc">事務的な手続きは最小限に。お急ぎの場合もスムーズに対応します。</p>
              </div>

              <div class="flow-steps">
                <div class="flow-step">
                  <div class="step-number">01</div>
                  <h3 class="step-title">お問合せ</h3>
                  <p class="step-text">
                    LINEまたはお電話で、「読経を頼みたい」とお伝えください。場所と日時を調整します。
                  </p>
                </div>

                <div class="flow-step">
                  <div class="step-number">02</div>
                  <h3 class="step-title">当日・読経</h3>
                  <p class="step-text">
                    僧侶が現地へ伺い、お経をあげさせていただきます。ご希望であれば法話も行います。
                  </p>
                </div>

                <div class="flow-step">
                  <div class="step-number">03</div>
                  <h3 class="step-title">お支払い</h3>
                  <p class="step-text">
                    読経終了後、お布施をお渡しください。これにて終了となり、その後の付き合いの強制はありません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section class="cta-section">
          <div class="container">
            <div class="cta-inner fade-in">
              <h2 class="cta-title">お問い合わせ</h2>
              <p class="cta-text">お電話またはLINEにて、お気軽にご相談ください。</p>
              <div class="cta-buttons">
                <a href="#" class="btn-cta btn-cta-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  <span>LINEでお問い合わせ</span>
                </a>
                <a href="tel:0123456789" class="btn-cta btn-cta-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>お電話でお問い合わせ</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer class="footer">
          <div class="container">
            <div class="footer-content">
              <div class="footer-info">
                <h3 class="footer-title">竹原山妙覚寺 福岡窓口</h3>
                <p class="footer-address">佐賀県佐賀市伊勢町8番12号</p>
                <p class="footer-priests">住職：山田紹恵 / 副住職：山田紹智</p>
              </div>
              <p class="footer-copyright">© 2024 Myokakuji Temple. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* JavaScript for animations */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Loading screen
            const loadingScreen = document.getElementById('loadingScreen');
            const loadingText = loadingScreen.querySelector('.loading-text');
            
            setTimeout(() => loadingText.classList.add('visible'), 300);
            setTimeout(() => loadingText.classList.add('fade-out'), 2500);
            setTimeout(() => {
              loadingScreen.classList.add('hidden');
              document.body.style.overflow = '';
            }, 3000);
            
            // Fade-in animations
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            
            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
            
            // Header scroll
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
              if (window.scrollY > 100) {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
              } else {
                header.style.boxShadow = 'none';
              }
            });
          });
        `
      }} />
    </>
  )
})

export default app
