import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import HomePage from './index'

test('<HomePage />', () => {
  const component = renderer.create(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  )
  expect(component.toJSON()).toMatchSnapshot()
})
