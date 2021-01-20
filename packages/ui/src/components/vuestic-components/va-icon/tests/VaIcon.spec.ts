import { mount } from '@vue/test-utils'
import VaIcon from '../VaIcon.vue'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

describe('VaIcon', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaIcon as any)
    expect(wrapper.findComponent('VaIcon')).toBeTruthy()
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaIcon as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
