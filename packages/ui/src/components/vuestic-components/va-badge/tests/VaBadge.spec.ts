import { mount } from '@vue/test-utils'
import VaBadge from '../VaBadge.vue'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

describe('VaBadge', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaBadge as any)
    expect(wrapper.findComponent('VaBadge')).toBeTruthy()
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaBadge as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
