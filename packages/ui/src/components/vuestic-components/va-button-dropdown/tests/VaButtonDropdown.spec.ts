import VaButtonDropdown from '../VaButtonDropdown.vue'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

describe('VaButtonDropdown', () => {
  // it('should render without an error', () => {
  //   const wrapper: any = mount(VaButtonDropdown)
  //   expect(wrapper.findComponent('')).toBeTruthy()
  // })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaButtonDropdown as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
