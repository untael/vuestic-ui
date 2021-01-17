import { mount } from '@vue/test-utils'
import VaForm from '../VaForm.vue'

describe('VaForm', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaForm as any)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
