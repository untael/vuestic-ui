import { mount, shallowMount } from '@vue/test-utils'

import VaListLabel from '../VaListLabel.vue'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'
describe('VaListLabel', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaListLabel as any)
    expect(wrapper.findComponent('VaListLabel')).toBeTruthy()
  })

  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaListLabel as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
