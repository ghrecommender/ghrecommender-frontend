// @flow strict

import { isNil } from 'ramda'

const { REACT_APP_API_HOST } = process.env

if (isNil(REACT_APP_API_HOST)) throw new Error('REACT_APP_API_HOST not found')

export const API_HOST = REACT_APP_API_HOST
export const API_USER_URL = `${API_HOST}/api/user/`
export const API_RECOMMENDATIONS_URL = `${API_HOST}/api/recommendations/`
export const API_SUBSCRIBE_URL = `${API_HOST}/api/subscription/`
export const LOGIN_URL = `${API_HOST}/login/github/`
