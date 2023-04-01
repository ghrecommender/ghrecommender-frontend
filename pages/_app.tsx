import 'semantic-ui-css/semantic.min.css'
import '@/styles.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'

const APP_TITLE = "GHRecommender - get personalized recommendations for GitHub projects"
const APP_DESCRIPTION = "GHRecommender - personalized recommendations for GitHub projects based on information about repositories starred by the user"
const APP_IMAGE = "https://ghrecommender.io/assets/og-image.jpg"
const APP_GA = "UA-106627857-1"

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
      <link rel="manifest" href="/assets/manifest.json" />
      <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/assets/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="GHRecommender" />
      <meta name="application-name" content="GHRecommender" />
      <meta name="msapplication-config" content="/assets/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      <title>{APP_TITLE}</title>
      <meta name="description" content={APP_DESCRIPTION} />

      {/* <!-- Open Graph --> */}
      <meta property="og:image" content={APP_IMAGE} />
      <meta property="og:image:width" content="279" />
      <meta property="og:image:height" content="279" />
      <meta property="og:title" content={APP_TITLE} />
      <meta property="og:site" content={APP_TITLE} />
      <meta property="og:description" content={APP_DESCRIPTION} />
      <meta property="og:url" content="https://ghrecommender.io/" />

      {/* <!-- Twitter Card --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@ghrecommender" />
      <meta name="twitter:title" content={APP_TITLE} />
      <meta name="twitter:description" content={APP_DESCRIPTION} />
      <meta name="twitter:image" content={APP_IMAGE} />
    </Head>
    <Component {...pageProps} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${APP_GA}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${APP_GA}');
        `}
      </Script>
    </>
}
