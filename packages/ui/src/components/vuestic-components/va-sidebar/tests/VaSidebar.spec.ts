import { mount } from '@vue/test-utils'

import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

import VaSidebar from '../VaSidebar.vue'

describe('VaSidebar', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaSidebar as any)
    expect(wrapper.findComponent('VaSidebar')).toBeTruthy()
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaSidebar as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
