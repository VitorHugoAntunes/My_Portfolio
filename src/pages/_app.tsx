import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ContentContainer, globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContentContainer>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ContentContainer>
  )
}
