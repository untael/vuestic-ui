import { mount } from '@vue/test-utils'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

import VaAlert from '../VaAlert.vue'

describe('VaAlert', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaAlert as any, {
      global: {
        mixins: [ColorThemeMixin as any],
      },
    })
    expect(wrapper.findComponent('VaAlert')).toBeTruthy()
  })

  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaAlert as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
