import { shallowMount } from '@vue/test-utils'
import { SizeMixin, sizesConfig, fontSizesConfig } from './SizeMixin'
import { h } from 'vue'

const ExampleComponent = {
  mixins: [SizeMixin],
  render () {
    return h('')
  },
}

describe('SizeMixin', () => {
  it('return default size', () => {
    const wrapper: any = shallowMount(ExampleComponent as any)
    expect(wrapper.vm.sizeComputed).toBe(`${sizesConfig.defaultSize}px`)
    expect(wrapper.vm.fontSizeComputed).toBe(`${fontSizesConfig.defaultSize}rem`)
  })
  it('Should match predefined constants', () => {
    const wrapper: any = shallowMount(ExampleComponent as any, {
      propsData: { size: 'medium' },
    })
    expect(wrapper.vm.sizeComputed).toBe(`${sizesConfig.sizes.medium}px`)
    expect(wrapper.vm.fontSizeComputed).toBe(`${fontSizesConfig.sizes.medium}rem`)
    wrapper.setProps({ size: 'large' })
    expect(wrapper.vm.sizeComputed).toBe(`${sizesConfig.sizes.large}px`)
    expect(wrapper.vm.fontSizeComputed).toBe(`${fontSizesConfig.sizes.large}rem`)
    wrapper.setProps({ size: 'small' })
    expect(wrapper.vm.sizeComputed).toBe(`${sizesConfig.sizes.small}px`)
    expect(wrapper.vm.fontSizeComputed).toBe(`${fontSizesConfig.sizes.small}rem`)
  })
  it('Should return correct value if string', () => {
    const wrapper: any = shallowMount(ExampleComponent as any, {
      propsData: { size: '10px' },
    })
    expect(wrapper.vm.sizeComputed).toBe('10px')
    expect(wrapper.vm.fontSizeComputed).toBe('0.125rem')
    wrapper.setProps({ size: '2rem' })
    expect(wrapper.vm.sizeComputed).toBe('2rem')
    expect(wrapper.vm.fontSizeComputed).toBe('2rem')
  })
  it('Should throw if incorrect size format was used', () => {
    const wrapper: any = shallowMount(ExampleComponent as any, {
      propsData: { size: '10asd' },
    })
    expect(() => wrapper.vm.fontSizeComputed).toThrow()
  })
  it('Should return correct string if number', () => {
    const wrapper: any = shallowMount(ExampleComponent as any, {
      propsData: { size: 32 },
    })
    expect(wrapper.vm.sizeComputed).toBe('32px')
    expect(wrapper.vm.fontSizeComputed).toBe('1.5rem')
  })
})
