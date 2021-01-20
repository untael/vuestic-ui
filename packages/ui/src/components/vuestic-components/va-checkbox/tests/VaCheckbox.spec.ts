// import Vue from 'vue'
import VaCheckbox from '../VaCheckbox.vue'
import { mount } from '@vue/test-utils'

import { ColorThemePlugin } from '../../../../services/ColorThemePlugin'
import { testIsSelectableComponent } from '../../../vuestic-mixins/SelectableMixin/testIsSelectableComponent'
import { ContextPlugin } from '../../../context-test/context-provide/ContextPlugin'

// Vue.use(ColorThemePlugin)

describe('VaCheckbox', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaCheckbox as any, {
      global: { plugins: [ColorThemePlugin, ContextPlugin] },
    })
    expect(wrapper.findComponent('VaCheckbox')).toBeTruthy()
  })
  // TODO: need fix icon with context-config

  it('default', () => {
    const wrapper: any = mount(VaCheckbox as any, {
      global: { plugins: [ColorThemePlugin, ContextPlugin] },
      props: { value: false },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('true value', () => {
    const wrapper: any = mount(VaCheckbox as any, {
      global: { plugins: [ColorThemePlugin, ContextPlugin] },
      props: { value: true },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('has indeterminate class', () => {
    const wrapper: any = mount(VaCheckbox as any, {
      global: { plugins: [ColorThemePlugin, ContextPlugin] },
      props: { indeterminate: true },
    })
    expect(wrapper.find('VaCheckbox').classes()).toContain('va-checkbox--indeterminate')
  })
  it('computedClass defined', () => {
    const wrapper: any = mount(VaCheckbox as any, {
      global: { plugins: [ColorThemePlugin, ContextPlugin] },
      props: { value: false },
    })
    expect((wrapper.vm as any).computedClass).toBeDefined()
  })
  it('computedIconName should be "check" ', () => {
    const wrapper: any = mount(VaCheckbox as any, {
      global: { plugins: [ColorThemePlugin, ContextPlugin] },
      props: { value: false },
    })
    expect((wrapper.vm as any).computedIconName).toBe('check')
  })
  it('is Selectable Component', () => {
    expect(() => testIsSelectableComponent(VaCheckbox)).not.toThrow()
  })
})
