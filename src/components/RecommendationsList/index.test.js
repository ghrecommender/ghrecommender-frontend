import React from 'react'
import renderer from 'react-test-renderer'

import RecommendationsList from './index'

const items = [
  {
    name: 'FreeCodeCamp/FreeCodeCamp',
    score: 0.9888941549280906,
    description:
      'The http://FreeCodeCamp.com open source codebase and curriculum. Learn to code and help nonprofits.',
  },
  {
    name: 'mxstbr/react-boilerplate',
    score: 0.9909724505140743,
    description:
      ':fire: Quick setup for performance orientated, offline-first React.js applications featuring Redux, hot-reloading, PostCSS, react-router, ServiceWorker, AppCache, FontFaceObserver and Mocha.',
  },
  {
    name: 'nodejs/node',
    score: 0.9905174541678359,
    description: 'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
  },
]

test('<RecommendationsList />', () => {
  const component = renderer.create(<RecommendationsList items={items} />)
  expect(component.toJSON()).toMatchSnapshot()
})
