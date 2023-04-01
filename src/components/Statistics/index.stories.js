import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import Statistics from './index'

const style = { backgroundColor: '#1b1c1d', width: '100%', height: '100%', position: 'absolute' }

export default {
  title: 'Components|Statistics',
  decorators: [story => <div style={style}>{story()}</div>],
}

export const statistics = () => <Statistics />
