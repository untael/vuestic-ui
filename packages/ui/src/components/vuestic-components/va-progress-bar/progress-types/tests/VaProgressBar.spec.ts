import { mount } from '@vue/test-utils'
import { testHasColorThemeMixin } from '../../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../../services/ColorThemePlugin'
import VaProgressBar from '../VaProgressBar.vue'

describe('VaProgressBar', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaProgressBar as any)
    expect(wrapper.findComponent('VaProgressBar')).toBeTruthy()
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaProgressBar as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
