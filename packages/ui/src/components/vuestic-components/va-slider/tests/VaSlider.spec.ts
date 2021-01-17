import { mount } from '@vue/test-utils'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

import VaSlider from '../VaSlider.vue'

describe('VaSlider', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaSlider as any)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaSlider as unknown) as ColorThemeMixin),
    ).not.toThrow()
  })
})
