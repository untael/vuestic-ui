import { shallowMount } from '@vue/test-utils'
import { SelectableMixin } from './SelectableMixin'
import { testHasColorThemeMixin } from '../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'
import { h } from 'vue'

const ExampleComponent = {
  mixins: [SelectableMixin],
  render () {
    return h('')
  },
}

describe('SelectableMixin', () => {
  describe('isChecked', () => {
    it('true and false', async () => {
      const wrapper: any = shallowMount(ExampleComponent as any)
      expect(wrapper.vm.isChecked).toBe(false)
      wrapper.setProps({ value: true })
      expect(wrapper.vm.isChecked).toBe(true)
    })
    it('with preset values', async () => {
      const wrapper: any = shallowMount(
        ExampleComponent as any,
        // Swap true and false.
        { propsData: { value: true, trueValue: false, falseValue: true } },
      )
      expect(wrapper.vm.isChecked).toBe(false)
      wrapper.setProps({ value: false })
      expect(wrapper.vm.isChecked).toBe(true)
    })
    it('with indeterminate', async () => {
      const wrapper: any = shallowMount(
        ExampleComponent as any,
        { propsData: { value: null, indeterminate: true } },
      )
      expect(wrapper.vm.isChecked).toBe(false)
      expect(wrapper.vm.isIndeterminate).toBe(true)
      wrapper.setProps({ value: false })
      expect(wrapper.vm.isChecked).toBe(false)
      expect(wrapper.vm.isIndeterminate).toBe(false)
      wrapper.setProps({ value: true })
      expect(wrapper.vm.isChecked).toBe(true)
      expect(wrapper.vm.isIndeterminate).toBe(false)
    })
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((ExampleComponent as unknown) as ColorThemeMixin),
    ).not.toThrow()
  })
})
