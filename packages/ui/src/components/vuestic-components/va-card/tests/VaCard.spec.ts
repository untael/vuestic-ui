import { mount } from '@vue/test-utils'
import VaCard from '../VaCard.vue'

import { testIsContextableComponent } from '../../../context-test/context-provide/testIsContextableComponent'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

describe('VaCard', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaCard as any)
    expect(wrapper.findComponent('VaCard')).toBeTruthy()
  })
  it('is contextable', () => {
    const props = {
      tag: 'a',
      square: true,
      outlined: true,
      bordered: false,
      disabled: true,
      href: 'example.com',
      target: '_blank',
      stripe: true,
      stripeColor: 'purple',
      gradient: true,
    }
    expect(() => testIsContextableComponent(VaCard, props)).not.toThrow()
  })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaCard as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
