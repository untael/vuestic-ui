import { shallowMount } from '@vue/test-utils'
import { isCssColor, getColor, ColorThemeMixin } from './ColorThemePlugin'
import { h } from 'vue'

const ExampleComponent = {
  mixins: [ColorThemeMixin],
  render () {
    return h('')
  },
}

describe('ColorThemePlugin', () => {
  const wrapper: any = shallowMount(ExampleComponent as any)
  it('isCssColor', () => {
    expect(isCssColor('tomato')).toBe(true)
    expect(isCssColor('#123')).toBe(true)
    expect(isCssColor('#123FFF')).toBe(true)
    expect(isCssColor('not-css-color')).toBe(false)
  })
  it('getColor should return default color', () => {
    expect(getColor(wrapper, 'not-css-color')).toBe('#000000')
  })
  it('getColor should return prop color', () => {
    expect(getColor(wrapper, 'green')).toBe('green')
  })

  it('should compute color', async () => {
    const wrapper: any = shallowMount(
      ExampleComponent as any,
      {
        propsData: { color: '' },
      } as any,
    )
    expect(wrapper.vm.colorComputed).toBe('#000000')
    wrapper.setProps({ color: '#333' })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.colorComputed).toBe('#333')
  })
})
