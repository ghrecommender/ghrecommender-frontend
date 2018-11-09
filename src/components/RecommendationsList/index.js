// @flow

import React from 'react'

import { List } from 'semantic-ui-react'
import Linkify from 'react-linkify'
import { emojify } from 'react-emoji'

import type { Item } from '../../types/index'

const getUrl = (name: string) => `https://github.com/${name}`

const sortItem = (a: Item, b: Item): number => b.score - a.score

const renderListItemHeader = (item: Item) => (
  <div>
    <a href={getUrl(item.name)} target="_blank" rel="noopener noreferrer">
      {item.name}
    </a>
  </div>
)

const renderItem = (item: Item) => (
  <List.Item key={item.name} as="a" href={getUrl(item.name)} target="_blank" rel="noopener noreferrer">
    <List.Icon name="github" size="large" verticalAlign="middle" />
    <List.Content>
      <List.Header>{renderListItemHeader(item)}</List.Header>
      <List.Description>
        <Linkify properties={{ target: '_blank', rel: 'noopener noreferrer' }}>
          {emojify(item.description)}
        </Linkify>
      </List.Description>
    </List.Content>
  </List.Item>
)

type Props = {
  items: Item[],
}

const RecommendationsList = ({ items }: Props) => (
  <List divided relaxed selection>
    {items.sort(sortItem).map(renderItem)}
  </List>
)

export default RecommendationsList
