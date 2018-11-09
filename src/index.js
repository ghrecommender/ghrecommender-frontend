// @flow

import 'raf/polyfill'
import 'whatwg-fetch'

import React from 'react'
import { render } from 'react-snapshot'
import Raven from 'raven-js'
import ReactGA from 'react-ga'

import App from './App'

ReactGA.initialize(process.env.REACT_APP_GA, {
  debug: process.env.NODE_ENV !== 'production',
})

if (process.env.NODE_ENV === 'production') {
  const config = {
    release: process.env.REACT_APP_VERSION,
    environment: 'production',
  }
  Raven.config(process.env.REACT_APP_RAVEN_DSN, config).install()
}

render(<App />, document.getElementById('root'))
