// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import RecommendationsList from '../RecommendationsList/index'
import SubscribeMessage from '../../containers/SubscribeMessage/index'
import { Container, Header, Message, Menu } from 'semantic-ui-react'
import type { Item, User } from '../../types/index'

const MessageWarning = () => (
  <Message
    warning
    content="We don’t have personalized recommendations for you - it looks like you have starred less than 30 repositories. Maybe you will be interested in these popular projects?"
  />
)

const MessageError = () => <Message error header="Oops, something went wrong…" />

type Props = {
  error: boolean,
  items: Item[],
  user: User,
}

export const Recommendations = ({ loading, items, error, user }: Props) => {
  const showWarning = (user.stars || 0) <= 30
  return (
    <Container text>
      <Menu secondary pointing size="large">
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/app/recommendations/" active>
          Recommendations
        </Menu.Item>
        <Menu.Item
          as="a"
          href="https://medium.com/@andrey_lisin/building-recommender-system-for-github-a8108f0cb2bd"
        >
          How it Works
        </Menu.Item>
      </Menu>
      <Header as="h1" dividing>
        The recommended projects for{' '}
        <a href={`https://github.com/${user.username}`} target="_blank" rel="noopener noreferrer">
          {user.username}
        </a>
      </Header>
      {showWarning && <MessageWarning />}
      {error && <MessageError />}
      <SubscribeMessage subscribed={user.subscribed} />
      <RecommendationsList items={items} />
    </Container>
  )
}

export default Recommendations
