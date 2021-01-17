import { shallowMount } from '@vue/test-utils'
import { AlignMixin, alignMap } from './AlignMixin'
import { mixins } from 'vue-class-component'
import { Component } from 'vue-property-decorator'
import { h } from 'vue'

const ExampleComponent = {
  mixins: [AlignMixin],
  render () {
    return h('')
  },
}

describe('AlignMixin', () => {
  it('works with no prop', () => {
    const wrapper: any = shallowMount(ExampleComponent as any)
    expect(wrapper.vm.alignComputed.display).toBe('flex')
    expect(wrapper.vm.alignComputed.justifyContent).toBe(alignMap.left)
  })
  it('typeof align is string', () => {
    const wrapper: any = shallowMount(ExampleComponent as any)
    const { align } = wrapper.props()
    expect(typeof align).toBe('string')
  })
  it('applies proper align', () => {
    for (const key in alignMap) {
      const wrapper: any = shallowMount(ExampleComponent as any, { propsData: { align: String(key) } })
      const { display, justifyContent } = wrapper.vm.alignComputed
      expect(display).toBe('flex')
      expect(justifyContent).toBe(alignMap[key as keyof typeof alignMap])
    }
  })
  it('justifyContent is valid css value', () => {
    const wrapper: any = shallowMount(ExampleComponent as any)
    const element = document.createElement('div')
    element.style.display = wrapper.vm.alignComputed.display
    Object.values(alignMap).forEach(value => {
      element.style.justifyContent = value
      expect(element.style.justifyContent).toBe(value)
    })
  })
})
