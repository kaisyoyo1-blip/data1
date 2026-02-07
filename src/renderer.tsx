import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>妙覚寺 福岡窓口 | 都市と心をつなぐ、祈りの場</title>
        <meta name="description" content="600年の歴史を持つ竹原山妙覚寺の公式出張所。葬儀・法要の読経を明瞭な料金で。檀家義務なし、一回限りのご依頼も可能です。" />
        <link href="/static/style.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&family=Zen+Old+Mincho:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
