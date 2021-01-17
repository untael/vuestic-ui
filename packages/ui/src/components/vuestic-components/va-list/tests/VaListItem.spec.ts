import { mount, shallowMount } from '@vue/test-utils'
import { testHasRouterLinkMixin } from './../../../vuestic-mixins/RouterLinkMixin/testHasRouterLinkMixin'
import { testHasKeyboardOnlyFocusMixin } from '../../../vuestic-mixins/KeyboardOnlyFocusMixin/testHasKeyboardOnlyFocusMixin'
import { testIsContextableComponent } from '../../../context-test/context-provide/testIsContextableComponent'

import VaListItem from '../VaListItem.vue'
import { RouterLinkMixin } from '../../../vuestic-mixins/RouterLinkMixin/RouterLinkMixin'
import { KeyboardOnlyFocusMixin } from '../../../vuestic-mixins/KeyboardOnlyFocusMixin/KeyboardOnlyFocusMixin'
import VaAccordion from '../../va-accordion/VaAccordion.vue'

describe('VaListItem', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaListItem as any)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('should be a link', () => {
    const wrapper: any =  shallowMount(VaListItem as any, {
      propsData: {
        href: '/',
      },
    })
    expect(wrapper.find('a').exists()).toBe(true)
  })
  it('has RouterLinkMixin', () => {
    expect(() =>
      testHasRouterLinkMixin((VaListItem as unknown) as RouterLinkMixin),
    ).not.toThrow()
  })

  it('has KeyboardOnlyFocusMixin', () => {
    expect(() =>
      testHasKeyboardOnlyFocusMixin((VaListItem as unknown) as KeyboardOnlyFocusMixin),
    ).not.toThrow()
  })

  it('is contextable', () => {
    const props = {
      tag: 'div',
      disabled: false,
    }
    expect(() => testIsContextableComponent(VaListItem, props)).not.toThrow()
  })

  it('should have disabled class', () => {
    const wrapper: any =  shallowMount(VaListItem as any, {
      propsData: { disabled: true },
    })
    expect(wrapper.classes()).toContain('va-list-item--disabled')
  })

  it('should emit `focus` event', async () => {
    const wrapper: any = shallowMount(VaListItem as any)

    await wrapper.vm.onFocus()

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().focus.length).toBe(1)
  })
})
