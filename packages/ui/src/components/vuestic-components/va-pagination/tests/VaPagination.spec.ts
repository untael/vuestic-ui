import { mount, shallowMount } from '@vue/test-utils'

import VaPagination from '../VaPagination.vue'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'
describe('VaPagination', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaPagination as any)
    expect(wrapper.findComponent('VaPagination')).toBeTruthy()
  })

  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaPagination as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
