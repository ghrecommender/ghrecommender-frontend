// @flow strict

import React from 'react'

import { connect } from 'react-refetch'

import SubscribeMessage from '../../components/SubscribeMessage'
import { API_SUBSCRIBE_URL } from '../../constants/index'
import type { PromiseStateType, Subscribe } from '../../types'

const refetch = connect.defaults({
  credentials: 'include',
})

const postSubscribe = () => ({
  postSubscribeResponse: {
    url: API_SUBSCRIBE_URL,
    method: 'POST',
    force: true,
  },
})

type Props = {
  subscribed: boolean,
  postSubscribe: (*) => void,
  postSubscribeResponse?: PromiseStateType<Subscribe>,
}

export const SubscribeMessageContainer = ({ subscribed, postSubscribe, postSubscribeResponse }: Props) => {
  let pending = false
  let status = subscribed

  if (postSubscribeResponse) {
    pending = postSubscribeResponse.pending
    status = postSubscribeResponse.fulfilled ? postSubscribeResponse.value.status : subscribed
  }
  return <SubscribeMessage loading={pending} subscribed={status} onClick={postSubscribe} />
}

export default refetch(props => ({
  postSubscribe: postSubscribe,
}))(SubscribeMessageContainer)
