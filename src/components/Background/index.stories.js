import React from 'react'

import Background from './index'

const style = { backgroundColor: '#1b1c1d', width: '100%', height: '100%', position: 'absolute' }

export default {
  title: 'Components|Background',
  decorators: [story => <div style={style}>{story()}</div>],
  component: Background,
}

export const background = () => <Background />
