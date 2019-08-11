import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import RecommendationsList from './index'
import { recommendations } from '../../utils/fixtures'

export default {
  title: 'Components|List',
  component: RecommendationsList,
}

export const recommendationsList = () => <RecommendationsList items={recommendations} />
