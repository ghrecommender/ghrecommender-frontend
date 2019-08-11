import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import 'semantic-ui-css/semantic.min.css'

import Recommendations from './index'
import { recommendations } from '../../utils/fixtures'

export default {
  title: 'Pages|Recommendations',
  component: Recommendations,
  decorators: [story => <MemoryRouter>{story()}</MemoryRouter>],
}

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

export const success = () => <Recommendations {...props} items={recommendations} />
export const error = () => <Recommendations {...props} items={[]} error={true} />
export const warning = () => <Recommendations {...props} user={{ ...user, stars: 0 }} items={[]} error={false} />
