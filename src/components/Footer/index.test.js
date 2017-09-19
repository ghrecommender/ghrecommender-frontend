import React from 'react'
import renderer from 'react-test-renderer'

import Footer from './index'

test('<Footer />', () => {
  const component = renderer.create(<Footer />)
  expect(component.toJSON()).toMatchSnapshot()
})
