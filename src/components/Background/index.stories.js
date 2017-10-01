import React from 'react'
import { storiesOf } from '@storybook/react'

import Background from './index'

const style = { backgroundColor: '#1b1c1d', width: '100%', height: '100%', position: 'absolute' }

const stories = storiesOf('Component - Background', module)
stories.addDecorator(story => <div style={style}>{story()}</div>)
stories.add('<Background />', () => <Background />)
