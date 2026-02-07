import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div class="container">
      {/* Hero Section */}
      <header class="hero">
        <div class="hero-content">
          <h1 class="temple-name">妙覚寺 福岡窓口</h1>
          <p class="hero-subtitle">檀家にならなくても頼める読経・葬儀・法事</p>
          <p class="tagline">都市と心をつなぐ、祈りの場。</p>
        </div>
      </header>

      {/* Message Section */}
      <section class="message">
        <div class="message-image-container">
          <img 
            src="https://www.genspark.ai/api/files/s/VAjRxsih?token=Z0FBQUFBQnBoMEx3bzdYRnVtUDFtR19zVkhkWTNZakxHRGVwZS1NMWZtOWZFbjFteUdlaXBqLVY1Q2lPRTdyTzE1SmttMHU0Z2lDckJHVTRiWFFCUjU0RmZDWDZJcXhZZWVnejRpMldZTVZvRDBOY2xHX3BndkM4MUxoLTNyR1B5eGNaT3pVd3ZFa295TTRJOG9BQWNWdzV0YktueXNpTV9Pdjc4S3FyTkUzX0hpR3U3ckNhTFc3emlJdmhDelN2Mnl3d2lyQWhiTU54X2ZOdDM3dkZDNTB5M3NjRDVFZ1EtZGxjX2xZaDlVdmY0T0tIa1NrMHY1bDlFN3BVejBHcHVIRGVLaENvbjhMU3EyYzc3NGFPZWFtOFRnYVhCdXpXQVE9PQ" 
            alt="お寺で祈りを捧げる家族" 
            class="message-image"
          />
        </div>
        <div class="message-content">
          <h2 class="message-title">形式よりも、<br />心を大切にしたい。</h2>
          <div class="message-text">
            <p>「お葬式で高いお金を払って、意味もわからずお経を聞くのは嫌だ」<br />そんな声を聞くことがあります。私たちも、そう思います。</p>
            <p>だからこそ福岡窓口では、納得感のある、心の通った読経を目指しています。<br />難しい言葉ではなく、心に響く言葉で。不明瞭な慣習ではなく、現代に即した透明性で。</p>
            <p>佐賀本院から受け継いだ600年の祈りは、形式を押し付けるためのものではなく、<br />あなたの悲しみを癒やすためのものです。どうぞ、安心してお任せください。</p>
            <p class="message-signature">妙覚寺 福岡窓口　主事</p>
          </div>
        </div>
      </section>

      {/* Temple Info */}
      <section class="temple-info">
        <h2 class="temple-formal-name">竹原山妙覚寺</h2>
        <p class="temple-reading">タケハラサン ミョウカクジ</p>
        <p class="address">佐賀県佐賀市伊勢町8番12号</p>
        <div class="priests">
          <p>住職：山田紹恵</p>
          <p>副住職：山田紹智</p>
        </div>
      </section>

      {/* Introduction */}
      <section class="introduction">
        <h2 class="section-title">お寺との付き合いを、もっとシンプルに。</h2>
        <p class="section-subtitle">法事・葬儀の読経を必要な時だけ。</p>
        <p class="intro-text">
          「お寺の知り合いがいない」「費用が不安」…。そんな現代の悩みに、600年の歴史でお応えします。応永31年（1424年）創建、九州日蓮宗最初の寺院・妙覚寺。その「源流」の格式と安心を、福岡の窓口からお届けします。
        </p>
      </section>

      {/* Pricing Plans */}
      <section class="pricing">
        <h2 class="section-title">お布施・読経費用</h2>
        <p class="pricing-note">
          お車代・御膳料などもすべて含んだ総額表示です。<br />
          地域や宗派の慣習に詳しくない方でも、安心してご依頼いただけます。
        </p>

        <div class="plans">
          {/* Simple Plan */}
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

          {/* Standard Plan */}
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

          {/* Full Support Plan */}
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

          {/* Memorial Plan */}
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
      </section>

      {/* Features */}
      <section class="features">
        <h2 class="section-title">選ばれる３つの理由</h2>
        <div class="feature-cards">
          <div class="feature-card">
            <h3 class="feature-title">お布施は「定額」です</h3>
            <p class="feature-text">
              「お気持ちで」とは言いません。全てのプランで費用を明示しています。後からの追加請求や、寄付の強要などは一切ございません。
            </p>
          </div>

          <div class="feature-card">
            <h3 class="feature-title">「檀家」義務なし</h3>
            <p class="feature-text">
              読経のご依頼は一回限りでも構いません。入会金や年会費、寄付金といった、維持費のご負担をお願いすることはございません。
            </p>
          </div>

          <div class="feature-card">
            <h3 class="feature-title">九州最初の「格式」</h3>
            <p class="feature-text">
              当山は九州で最初に日蓮宗が布教された「源流」の寺院です。歴史に裏打ちされた正統な作法で、大切な方の旅立ちを厳かに見送ります。
            </p>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section class="origin">
        <p class="origin-label">ORIGIN</p>
        <p class="origin-text">
          当窓口は、佐賀に600年続く「竹原山 妙覚寺（佐賀本院）」の公式出張所です。<br />
          確かな歴史的背景のもと、責任を持って供養いたします。
        </p>
      </section>

      {/* Flow */}
      <section class="flow">
        <p class="flow-label">FLOW</p>
        <h2 class="section-title">ご依頼の流れ</h2>
        <p class="flow-subtitle">事務的な手続きは最小限に。お急ぎの場合もスムーズに対応します。</p>

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
      </section>

      {/* CTA */}
      <section class="cta">
        <h2 class="cta-title">お問い合わせ</h2>
        <p class="cta-text">お電話またはLINEにて、お気軽にご相談ください。</p>
        <div class="cta-buttons">
          <a href="tel:0123456789" class="cta-button">
            <span class="button-icon">📞</span>
            <span class="button-text">お電話でお問い合わせ</span>
          </a>
          <a href="#" class="cta-button line-button">
            <span class="button-icon">💬</span>
            <span class="button-text">LINEでお問い合わせ</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer">
        <p class="footer-text">竹原山妙覚寺 福岡窓口</p>
        <p class="footer-address">佐賀県佐賀市伊勢町8番12号</p>
        <p class="footer-copyright">© 2024 Myokakuji Temple. All rights reserved.</p>
      </footer>
    </div>
  )
})

export default app
