import { CSSProperties } from 'react'

import { Button, Container, Header, Icon, Menu, Segment } from 'semantic-ui-react'
import Link from 'next/link'

import Footer from '@/components/Footer'
import StatisticGroups from '@/components/Statistics'
import { trackClick } from '@/utils'

import dynamic from 'next/dynamic'

const Background = dynamic(() => import('@/components/Background'), {
  ssr: false,
})

const logoStyle = {
  marginTop: '3em',
  userSelect: 'none',
} satisfies CSSProperties

const Headers = () => {
  return (
    <div className='heading'>
      <img alt="logo" src="/assets/android-chrome-192x192.png" style={logoStyle} />
      <Header
        as="h1"
        className='h1'
        content="GHRecommender"
        inverted
        style={{ fontWeight: 'normal', marginBottom: 0 }}
      />
      <Header
        as="h2"
        className='h2'
        content="Welcome to the GHRecommender project – the place where you can find the GitHub projects that may be of interest to you but you haven’t discovered yet."
        inverted
        style={{ fontWeight: 'normal', marginBottom: '1.7em' }}
      />
    </div>
  )
}

const HomePage = () => (
  <div>
    <Segment
      inverted
      textAlign="center"
      style={{ padding: '1em 0em', minHeight: '100vh' }}
      vertical
    >
      <Container style={{ zIndex: 999, position: 'inherit' }}>
        <Menu inverted pointing secondary size="large">
          <Menu.Item as={Link} href="/" active>
            Home
          </Menu.Item>
          <Menu.Item
            as="a"
            href="https://medium.com/@andrey_lisin/building-recommender-system-for-github-a8108f0cb2bd"
            onClick={trackClick('Menu: How it works')}
            target="_blank"
          >
            How it Works
          </Menu.Item>
        </Menu>
      </Container>

      <Container text style={{ zIndex: 999, position: 'inherit' }}>
        <Headers />
        <Button
          primary
          size="huge"
          as={'button'}
          onClick={trackClick('Get Recommendations')}
          disabled
        >
          Get Recommendations
          <Icon name="right arrow" />
        </Button>
        <p><i>Service is no longer available 😢</i></p>
        <Header as="h3" inverted>
          Want to know more? Read check out the{' '}
          <a
            href="https://medium.com/@andrey_lisin/building-recommender-system-for-github-a8108f0cb2bd"
            color="white"
          >
            “How it Works”
          </a>{' '}
          page.
        </Header>
      </Container>

      <Container text style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <StatisticGroups />
      </Container>

      <Background />
    </Segment>
    <Footer />
  </div>
)

export default HomePage
