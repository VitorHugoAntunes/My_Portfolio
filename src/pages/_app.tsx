import Audio from '@/components/Audio';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SoundContext, SoundProvider } from '@/contexts/SoundContext';
import { UserReposProvider } from '@/contexts/userReposContext';
import { ContentContainer, globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContentContainer>
      <Header />
      <SoundProvider>
        <Audio />
        <UserReposProvider>

          <Component {...pageProps} />
        </UserReposProvider>
      </SoundProvider>
      <Footer />
    </ContentContainer>
  )
}
