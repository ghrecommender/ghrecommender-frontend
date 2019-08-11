import React from 'react'
import { action } from '@storybook/addon-actions'
import 'semantic-ui-css/semantic.min.css'

import SubscribeMessage from './index'

export default {
  title: 'Components|Message',
  component: SubscribeMessage,
}

const props = {
  onClick: action('clicked'),
}

export const defaultStory = () => <SubscribeMessage {...props} />
defaultStory.story = {
  name: 'default',
}

export const subscribed = () => <SubscribeMessage {...props} subscribed={true} />

export const loading = () => <SubscribeMessage {...props} loading={true} />

export const loadingSubscribed = () => <SubscribeMessage {...props} loading={true} subscribed={true} />
loadingSubscribed.story = {
  name: 'loading & subscribed',
}
