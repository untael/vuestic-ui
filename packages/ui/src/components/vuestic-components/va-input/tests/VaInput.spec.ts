import VaInput from '../VaInput.vue'
import { mount } from '@vue/test-utils'

import { testIsFormComponent } from '../../../vuestic-mixins/FormComponent/testIsFormComponent'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

describe('VaInput', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaInput as any)
    expect(wrapper.findComponent('VaInput')).toBeTruthy()
  })
  it('is FormElement', () => {
    expect(() => testIsFormComponent(VaInput)).not.toThrow()
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaInput as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
