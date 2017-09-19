// @flow

export type Item = {|
  name: string,
  description: string,
  score: number,
|}

export type SocialUser = {
  id: number,
  extra_data: { access_token?: string },
}

export type User = {|
  id: number,
  stars: ?number,
  subscribed: boolean,
  username: string,
  first_name: string,
  last_name: string,
  email: string,
  social_auth: SocialUser[],
|}

export type Subscribe = {|
  status: boolean,
|}

export type PromiseStateType<T> = {
  pending: boolean,
  rejected: boolean,
  fulfilled: boolean,
  value: T,
  meta: {
    response: {
      status: number,
    },
  },
}
