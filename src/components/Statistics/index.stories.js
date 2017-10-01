import React from 'react'
import { storiesOf } from '@storybook/react'
import 'semantic-ui-css/semantic.min.css'

import Statistics from './index'

const style = { backgroundColor: '#1b1c1d', width: '100%', height: '100%', position: 'absolute' }

const stories = storiesOf('Component - Statistics', module)
stories.addDecorator(story => <div style={style}>{story()}</div>)
stories.add('<Statistics />', () => <Statistics />)
