import Vue from 'vue'
import { mount, shallowMount, RouterLinkStub } from '@vue/test-utils'
import VaButton from '../VaButton.vue'

import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import {
  ColorThemePlugin,
  ColorThemeMixin,
} from '../../../../services/ColorThemePlugin'
import { ContextPlugin } from '../../../context-test/context-provide/ContextPlugin'
import { testIsLoadingMixin } from '../../../vuestic-mixins/LoadingMixin/testIsLoadingMixin'

// @ts-ignore
Vue.use(ColorThemePlugin)
// @ts-ignore
Vue.use(ContextPlugin, {})

describe('VaButton', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaButton as any)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  /* 1. Default button */

  it('button without defined props', () => {
    const wrapper: any = shallowMount(VaButton as any)

    expect(wrapper.find('VaButton').classes()).toContain('va-button--default')
  })

  /* 2. Button sizes */

  it('normal button', () => {
    const wrapper: any = shallowMount(VaButton as any)

    expect(wrapper.find('VaButton').classes()).toContain('va-button--normal')
  })

  it('large button', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: { size: 'large' },
    } as any)
    expect(wrapper.find('VaButton').classes()).toContain('va-button--large')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('small button', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: { size: 'small' },
    } as any)
    expect(wrapper.find('VaButton').classes()).toContain('va-button--small')
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 3. Button types */

  it('default button', () => {
    const wrapper: any = shallowMount(VaButton as any)

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('a button with defined href', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: {
        href: 'http://epic-spinners.epicmax.co/',
      },
    } as any)
    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('a button with defined target', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: {
        target: '_blank',
      },
    } as any)
    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('a button with defined href and target', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: {
        href: 'http://epic-spinners.epicmax.co/',
        target: '_blank',
      },
    } as any)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('router-link button with defined to property', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: {
        to: '/demo',
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    } as any)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('router-link button with defined to and active class properties', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: {
        to: '/demo',
        activeClass: 'va-button--active',
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    } as any)
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 4. Disabled buttons */

  it('disabled button', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: { disabled: true },
    } as any)

    expect(wrapper.find('VaButton').classes()).toContain('va-button--disabled')
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* 5. Buttons with icons */

  it('button with left icon', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: {
        icon: 'clear',
      },
    } as any)
    expect(wrapper.find('VaButton').classes())
      .toContain('va-button--with-left-icon')
  })

  it('button with right icon', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: {
        iconRight: 'create',
      },
    } as any)
    expect(wrapper.find('VaButton').classes())
      .toContain('va-button--with-right-icon')
  })

  it('button with both icons', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      propsData: {
        icon: 'clear',
        iconRight: 'create',
      },
    } as any)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('has loading mixin', () => {
    expect(() => testIsLoadingMixin(VaButton)).not.toThrow()
  })

  it('button public methods focus and blur should works', () => {
    const wrapper: any = shallowMount(VaButton as any, {
      attachToDocument: true,
    } as any)
    const spaceRemover = (value: string) => {
      return value.replace(/\s+|\n|\r/g, '')
    }
    wrapper.vm.focus()
    const focusedButtonString = spaceRemover(wrapper.find('button').html())
    // @ts-ignore
    const activeElementString: string = spaceRemover(document.activeElement.outerHTML)
    expect(focusedButtonString === activeElementString).toEqual(true)

    wrapper.vm.blur()
    expect(document.hasFocus()).toEqual(false)
  })

  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaButton as unknown) as ColorThemeMixin),
    ).not.toThrow()
  })
})
