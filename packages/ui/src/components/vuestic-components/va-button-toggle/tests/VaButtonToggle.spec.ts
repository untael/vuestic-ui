import { mount } from '@vue/test-utils'
import VaButtonToggle from '../VaButtonToggle.vue'

describe('VaButtonToggle', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaButtonToggle as any)
    expect(wrapper.findComponent('VaButtonToggle')).toBeTruthy()
  })
})
