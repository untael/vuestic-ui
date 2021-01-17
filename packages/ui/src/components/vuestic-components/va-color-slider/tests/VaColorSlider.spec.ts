import { mount } from '@vue/test-utils'

import VaColorSlider from '../VaColorSlider.vue'

describe('VaColorSlider', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaColorSlider as any)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
