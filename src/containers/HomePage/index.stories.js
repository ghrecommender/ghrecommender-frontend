import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import HomePage from './index'

export default {
  title: 'Pages|Home',
  decorators: [story => <MemoryRouter>{story()}</MemoryRouter>],
}

export const homePage = () => <HomePage />
