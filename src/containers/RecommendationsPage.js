// @flow
import React from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Dimmer, Loader } from 'semantic-ui-react'

import Footer from '../components/Footer'
import Recommendations from '../components/Recommendations'
import { API_RECOMMENDATIONS_URL, API_USER_URL, LOGIN_URL } from '../constants/index'
import type { Item, User, PromiseStateType } from '../types/index'

const refetch = connect.defaults({
  credentials: 'include',
})

const defaultUser: User = {
  id: 0,
  username: '/',
  first_name: '',
  last_name: '',
  email: '',
  social_auth: [],
  stars: 100,
  subscribed: false,
}

type Props = {
  dataFetch: PromiseStateType<Item[]>,
  userFetch: PromiseStateType<User>,
}

export const RecommendationsPage = ({ dataFetch, userFetch }: Props) => {
  const allFetches = PromiseState.all([dataFetch, userFetch])
  const { pending, rejected, fulfilled } = allFetches
  const [items, user] = fulfilled ? allFetches.value : [[], defaultUser]
  let redirect = false
  if (rejected && dataFetch.meta.response) {
    const { status } = dataFetch.meta.response
    if (status === 401 || status === 403) {
      window.location.replace(LOGIN_URL)
      redirect = true
    }
  }
  return (
    <div>
      <Dimmer active={pending}>
        <Loader />
      </Dimmer>
      {!pending && !redirect && <Recommendations error={rejected} items={items} user={user} />}
      {!pending && !redirect && <Footer />}
    </div>
  )
}

export default refetch(props => ({
  dataFetch: API_RECOMMENDATIONS_URL,
  userFetch: API_USER_URL,
}))(RecommendationsPage)
