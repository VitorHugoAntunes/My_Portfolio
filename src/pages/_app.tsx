import Audio from '@/components/Audio';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SoundContext, SoundProvider } from '@/contexts/SoundContext';
import { UserReposProvider } from '@/contexts/userReposContext';
import { ContentContainer, globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useRouter } from 'next/router';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentURL = router.asPath;
  return (
    <ContentContainer>
      <Header />
      <SoundProvider>
        <Audio />
        <UserReposProvider>
          <Head>
            <title>
              {currentURL === "/" ? "Vitor Hugo's Portfolio | Home" : ""}
              {currentURL === "/about" ? "Vitor Hugo's Portfolio | About" : ""}
              {currentURL === "/projects" ? "Vitor Hugo's Portfolio | Projects" : ""}
            </title>
          </Head>
          <Component {...pageProps} />

        </UserReposProvider>
      </SoundProvider>
      <Footer />
    </ContentContainer>
  )
}
