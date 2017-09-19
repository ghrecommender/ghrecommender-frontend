import React from 'react'
import rendered from 'react-test-renderer'

import Background from './index'


test('<Background />', () => {
  const component = rendered.create(<Background />)
  expect(component.toJSON()).toMatchSnapshot()
})
