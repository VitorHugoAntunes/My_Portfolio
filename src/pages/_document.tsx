import { getCssText } from '@/styles/styles'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Aplicando css da pagina pelo lado do servidor next */}
        <style dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </body>
    </Html>
  )
}
