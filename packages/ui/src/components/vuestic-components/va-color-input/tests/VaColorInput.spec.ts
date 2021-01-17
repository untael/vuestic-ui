import { mount } from '@vue/test-utils'

import VaColorInput from '../VaColorInput.vue'

describe('VaColorInput', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaColorInput as any)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
