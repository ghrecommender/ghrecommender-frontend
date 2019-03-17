// @flow strict

import 'raf/polyfill'
import 'whatwg-fetch'
import { isNil } from 'ramda'

import React from 'react'
import { render } from 'react-snapshot'
import Raven from 'raven-js'
import ReactGA from 'react-ga'

import App from './App'

ReactGA.initialize(process.env.REACT_APP_GA, {
  debug: process.env.NODE_ENV !== 'production',
})

if (process.env.NODE_ENV === 'production') {
  const { REACT_APP_RAVEN_DSN, REACT_APP_VERSION } = process.env

  if (isNil(REACT_APP_RAVEN_DSN)) throw new Error('REACT_APP_RAVEN_DSN not found')
  if (isNil(REACT_APP_VERSION)) throw new Error('REACT_APP_VERSION not found')

  const config = {
    release: REACT_APP_VERSION,
    environment: 'production',
  }

  Raven.config(REACT_APP_RAVEN_DSN, config).install()
}

render(<App />, document.getElementById('root'))
