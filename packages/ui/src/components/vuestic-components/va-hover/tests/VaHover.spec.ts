import { mount } from '@vue/test-utils'
import VaHover from '../VaHover.vue'

describe('VaHover', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaHover as any)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
