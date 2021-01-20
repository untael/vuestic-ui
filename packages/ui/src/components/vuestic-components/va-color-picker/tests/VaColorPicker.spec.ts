import { mount } from '@vue/test-utils'

import VaColorPicker from '../VaColorPicker.vue'

describe('VaColorPicker', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaColorPicker as any)
    expect(wrapper.findComponent('VaColorPicker')).toBeTruthy()
  })
})
