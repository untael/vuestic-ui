import { mount, shallowMount } from '@vue/test-utils'
import VaChip from '../VaChip.vue'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

describe('VaChip', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaChip as any)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  /* 2. Button sizes */

  it('large chip', () => {
    const wrapper: any = shallowMount(VaChip as any, {
      propsData: { size: 'large' },
    })
    expect(wrapper.find('VaChip').classes()).toContain('va-chip--large')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('small chip', () => {
    const wrapper: any = shallowMount(VaChip as any, {
      propsData: { size: 'small' },
    })
    expect(wrapper.find('VaChip').classes()).toContain('va-chip--small')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be a link', () => {
    const wrapper: any = shallowMount(VaChip as any, {
      propsData: {
        href: '/',
      },
    })
    expect(wrapper.find('a').exists()).toBe(true)
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaChip as unknown) as ColorThemeMixin),
    ).not.toThrow()
  })
})
