import { mount } from '@vue/test-utils'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

import VaTabs from '../VaTabs.vue'

describe('VaTabs', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaTabs)
    expect(wrapper.findComponent('VaTabs')).toBeTruthy()
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaTabs as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
