import { mount } from '@vue/test-utils'

import VaColorPalette from '../VaColorPalette.vue'

describe('VaColorPalette', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaColorPalette as any)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
