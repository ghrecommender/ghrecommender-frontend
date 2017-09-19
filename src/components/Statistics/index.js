import React from 'react'
import { Statistic } from 'semantic-ui-react'

const items = [
  { label: 'Users', value: '19,925,204' },
  { label: 'Repositories', value: '64,245,061' },
  { label: 'Stars', value: '81,302,007' },
]

const StatisticGroups = () => (
  <Statistic.Group items={items} size='small' inverted />
)

export default StatisticGroups
