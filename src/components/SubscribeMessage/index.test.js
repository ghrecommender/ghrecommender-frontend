import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import SubscribeMessage from './index'

const props = {
  onClick: jest.fn(),
}

describe('<SubscribeMessage />', () => {
  test('<SubscribeMessage />', () => {
    const component = renderer.create(<SubscribeMessage {...props} />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('<SubscribeMessage loading />', () => {
    const component = renderer.create(<SubscribeMessage {...props} loading />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('<SubscribeMessage subscribed />', () => {
    const component = renderer.create(<SubscribeMessage {...props} subscribed />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('<SubscribeMessage subscribed loading />', () => {
    const component = renderer.create(<SubscribeMessage {...props} subscribed loading />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('onClick', () => {
    const component = shallow(<SubscribeMessage {...props} subscribed loading />)
    component.find('Button').simulate('click')
    expect(props.onClick.mock.calls.length).toBe(1)
  })
})
