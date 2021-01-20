import { mount } from '@vue/test-utils'
import VaBreadcrumbs from '../VaBreadcrumbs.vue'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

describe('VaBreadcrumbs', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaBreadcrumbs as any)
    expect(wrapper.findComponent('VaBreadcrumbs')).toBeTruthy()
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaBreadcrumbs as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
