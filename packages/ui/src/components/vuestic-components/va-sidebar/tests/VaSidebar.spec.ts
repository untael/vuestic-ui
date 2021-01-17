import { mount } from '@vue/test-utils'

import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

import VaSidebar from '../VaSidebar.vue'

describe('VaSidebar', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaSidebar as any)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaSidebar as unknown) as ColorThemeMixin),
    ).not.toThrow()
  })
})
