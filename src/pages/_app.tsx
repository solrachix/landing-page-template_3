import { AppProps } from 'next/app'

import { PageTransition } from '@/components/PageTransition'
import GlobalAnimations from '@/components/GlobalAnimations'

import Context from '@/contexts'

export default function App({
  Component: SsrComponent,
  pageProps: ssrPageProps
}: AppProps) {
  return (
    <Context>
      <PageTransition>
        {({ Component, pageProps }) => (
          <GlobalAnimations>
            {Component ? (
              <Component {...pageProps} />
            ) : (
              <SsrComponent {...ssrPageProps} />
            )}
          </GlobalAnimations>
        )}
      </PageTransition>

      {/* <GlobalAnimations>
      <SsrComponent {...ssrPageProps} />
      </GlobalAnimations> */}
    </Context>
  )
}
