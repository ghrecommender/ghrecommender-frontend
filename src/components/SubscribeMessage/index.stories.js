import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import 'semantic-ui-css/semantic.min.css'

import SubscribeMessage from './index'

const props = {
  onClick: action('clicked'),
}

const stories = storiesOf('Component - <SubscribeMessage />', module)

stories.add('<SubscribeMessage />', () => <SubscribeMessage {...props} />)

stories.add('<SubscribeMessage subscribed />', () => (
  <SubscribeMessage {...props} subscribed={true} />
))

stories.add('<SubscribeMessage loading />', () => <SubscribeMessage {...props} loading={true} />)

stories.add('<SubscribeMessage loading subscribed />', () => (
  <SubscribeMessage {...props} loading={true} subscribed={true} />
))
