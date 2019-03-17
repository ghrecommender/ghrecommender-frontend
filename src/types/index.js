// @flow strict

export type Item = $ReadOnly<{|
  name: string,
  description: string,
  score: number,
|}>

export type SocialUser = $ReadOnly<{|
  id: number,
  extra_data: { access_token?: string },
|}>

export type User = $ReadOnly<{|
  id: number,
  stars: ?number,
  subscribed: boolean,
  username: string,
  first_name: string,
  last_name: string,
  email: string,
  social_auth: SocialUser[],
|}>

export type Subscribe = $ReadOnly<{|
  status: boolean,
|}>

export type PromiseStateType<T> = $ReadOnly<{|
  pending: boolean,
  rejected: boolean,
  fulfilled: boolean,
  value: T,
  meta: {
    response: {
      status: number,
    },
  },
|}>
