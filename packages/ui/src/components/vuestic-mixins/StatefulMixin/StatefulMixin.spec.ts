import { shallowMount } from '@vue/test-utils'
import { StatefulMixin } from './StatefulMixin'
import { h } from 'vue'

const ExampleComponent = {
  mixins: [StatefulMixin],
  render () {
    return h('')
  },
}
describe('StatefulMixin', () => {
  it('stateless', async () => {
    const wrapper: any = shallowMount(
      ExampleComponent as any,
      { propsData: { value: 'one' } } as any,
    )
    expect(wrapper.vm.valueComputed).toBe('one')
    // Component can't modify value
    wrapper.vm.valueComputed = 'two'
    expect(wrapper.vm.valueComputed).toBe('one')
    // But parent can
    wrapper.setProps({ value: 'three' })
    expect(wrapper.vm.valueComputed).toBe('three')
  })
  it('stateful', async () => {
    const wrapper: any = shallowMount(
      ExampleComponent as any,
      {
        propsData: { stateful: true },
      } as any,
    )
    expect(wrapper.vm.valueComputed).toBe(undefined)
    // Component can modify value
    wrapper.vm.valueComputed = 'one'
    expect(wrapper.vm.valueComputed).toBe('one')
    // Parent can modify value as well
    wrapper.setProps({ value: 'three', stateful: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.valueComputed).toBe('three')
  })
})
