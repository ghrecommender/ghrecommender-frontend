// @flow strict

import React from 'react'

import { Message, Icon, Button } from 'semantic-ui-react'

import { trackClick } from '../../utils'

const getIcon = (loading: boolean): string => {
  return loading ? 'circle notched' : 'envelope outline'
}

type Props = {
  loading: boolean,
  subscribed: boolean,
  onClick: (*) => void,
}

const SubscribeMessage = ({ loading, subscribed, onClick }: Props) => {
  const handleClick = () => {
    onClick(subscribed)
    trackClick('Subscribe')()
  }
  const buttonSubscibe = <Button size="small" positive loading={loading} onClick={handleClick} content="Subscribe" />
  const buttonUnsubscibe = <Button size="small" negative loading={loading} onClick={handleClick} content="Unsubscribe" />
  return (
  <Message icon>
    <Icon name={getIcon(loading)} loading={loading} />
    <Message.Content>
      <Message.Header>Subscribe to get new recommendations as soon as they arrive.</Message.Header>
      <br />
      {!subscribed && buttonSubscibe}
      {subscribed && buttonUnsubscibe}
    </Message.Content>
  </Message>
)}

SubscribeMessage.defaultProps = {
  loading: false,
  subscribed: false,
}

export default SubscribeMessage
