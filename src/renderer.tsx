import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* SEO Meta Tags */}
        <title>妙覚寺 福岡窓口｜檀家にならなくても頼める読経・葬儀・法事</title>
        <meta name="description" content="福岡で読経・葬儀・法事をお探しなら妙覚寺福岡窓口へ。檀家義務なし、お布施定額制で安心。600年の歴史を持つ九州日蓮宗最初の寺院が、必要な時だけ読経をお届けします。" />
        <meta name="keywords" content="福岡 読経, 福岡 葬儀 僧侶, 福岡 法事, 檀家なし 読経, お布施 定額, 妙覚寺" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / SNS */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="妙覚寺 福岡窓口｜檀家にならなくても頼める読経" />
        <meta property="og:description" content="お布施定額・檀家義務なし。600年の歴史ある九州日蓮宗の源流寺院が、福岡で読経をお届けします。" />
        <meta property="og:site_name" content="妙覚寺 福岡窓口" />
        <meta property="og:locale" content="ja_JP" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@300;400;500&family=Zen+Old+Mincho:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Styles */}
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
