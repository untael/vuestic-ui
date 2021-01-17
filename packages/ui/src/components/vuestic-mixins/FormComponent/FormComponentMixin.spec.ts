import { shallowMount } from '@vue/test-utils'
import { FormComponentMixin } from './FormComponentMixin'
import { sleep } from '../../../services/utils'
import { h } from 'vue'

const ExampleComponent = {
  mixins: [FormComponentMixin],
  render () {
    return h('')
  },
  props: {
    value: {},
  },
}

describe('FormElementMixin', () => {
  it('sets selfValidatesOnBlur on first interaction', async () => {
    const wrapper: any = shallowMount(ExampleComponent as any)
    expect(wrapper.vm.shouldValidateOnBlur).toBe(false)
    wrapper.vm.isFocused = true
    await sleep() // Waiting for watcher to trigger.
    expect(wrapper.vm.shouldValidateOnBlur).toBe(true)
  })
})
