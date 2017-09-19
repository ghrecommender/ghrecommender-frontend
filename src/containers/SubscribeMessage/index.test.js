import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { PromiseState } from 'react-refetch'

import { SubscribeMessageContainer } from './index'

const props = {
  postSubscribe: jest.fn(),
  subscribed: false,
}

describe('<SubscribeMessageContainer />', () => {
  test('loading', () => {
    const postSubscribeResponse = PromiseState.create()
    const component = renderer.create(
      <SubscribeMessageContainer {...props} postSubscribeResponse={postSubscribeResponse} />,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('subscribed: false', () => {
    const component = renderer.create(<SubscribeMessageContainer subscribed={false} />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('subscribed: true', () => {
    const component = renderer.create(<SubscribeMessageContainer subscribed />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('error', () => {
    const postSubscribeResponse = PromiseState.reject()
    const component = renderer.create(
      <SubscribeMessageContainer {...props} postSubscribeResponse={postSubscribeResponse} />,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('success', () => {
    const postSubscribeResponse = PromiseState.resolve({ status: true })
    const component = renderer.create(
      <SubscribeMessageContainer {...props} postSubscribeResponse={postSubscribeResponse} />,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('Click', () => {
    const component = mount(<SubscribeMessageContainer {...props} />)
    component.find('Button').simulate('click')
    expect(props.postSubscribe.mock.calls.length).toBe(1)
  })
})
