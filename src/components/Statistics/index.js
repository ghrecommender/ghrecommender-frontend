// @flow strict

import React from 'react'
import { Statistic } from 'semantic-ui-react'

const items = [
  { label: 'Users', value: '19,925,204', key: 'users' },
  { label: 'Repositories', value: '64,245,061', key: 'repositories' },
  { label: 'Stars', value: '81,302,007', key: 'stars' },
]

const StatisticGroups = () => (
  <Statistic.Group items={items} size='small' inverted />
)

export default StatisticGroups
