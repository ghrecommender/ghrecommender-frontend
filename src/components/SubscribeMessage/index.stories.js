import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import 'semantic-ui-css/semantic.min.css'

import SubscribeMessage from './index'

const props = {
  onClick: action('clicked'),
}

const stories = storiesOf('SubscribeMessage', module)

stories.add('default', () => <SubscribeMessage {...props} />)

stories.add('subscribed', () => (
  <SubscribeMessage {...props} subscribed={true} />
))

stories.add('loading', () => <SubscribeMessage {...props} loading={true} />)

stories.add('loading & subscribed', () => (
  <SubscribeMessage {...props} loading={true} subscribed={true} />
))
