import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf, action } from '@storybook/react'
import 'semantic-ui-css/semantic.min.css'

import Recommendations from './index'
import { recommendations } from '../../utils/fixtures'

const user = {
  id: 0,
  username: 'yurtaev',
  first_name: '',
  last_name: '',
  email: '',
  social_auth: [],
  stars: 100,
  subscribed: false,
}

const props = {
  onSubscribe: action('subscribe'),
  user: user,
}

const stories = storiesOf('Page - Recommendations', module)
stories.addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
stories.add('Success', () => <Recommendations {...props} items={recommendations} />)
stories.add('Error', () => <Recommendations {...props} items={[]} error={true} />)
stories.add('Warning', () => <Recommendations {...props} user={{...user, stars: 0}} items={[]} error={false} />)
