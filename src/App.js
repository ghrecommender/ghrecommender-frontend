// @flow

import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './containers/HomePage'
import RecommendationsPage from './containers/RecommendationsPage'

import 'semantic-ui-css/semantic.min.css'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/app/recommendations/" component={RecommendationsPage} />
    </div>
  </Router>
)

export default App
