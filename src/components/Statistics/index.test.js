import React from 'react'
import renderer from 'react-test-renderer'

import Statistics from './index'



test('<Statistics />', () => {
  const component = renderer.create(<Statistics />)
  expect(component.toJSON()).toMatchSnapshot()
})
