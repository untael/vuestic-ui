//@ts-nocheck
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { RouterLinkMixin } from './RouterLinkMixin'
import VueRouter from 'vue-router'
import { h } from 'vue'

const ExampleComponent = {
  mixins: [RouterLinkMixin],
  render () {
    return h('')
  },
  props: {
    value: {},
  },
}

const stringProps = ['to', 'activeClass', 'exactActiveClass']
const booleanProps = ['replace', 'append', 'exact']

describe('RouterLinkMixin', () => {
  it('hasRouterLinkParams works correctly', () => {
    stringProps.forEach(prop => {
      const wrapper: any = shallowMount(ExampleComponent as any)
      wrapper.setProps({ [prop]: prop })
      expect(wrapper.vm.hasRouterLinkParams).toBeTruthy()
    })
    booleanProps.forEach(prop => {
      const wrapper: any = shallowMount(ExampleComponent as any)
      wrapper.setProps({ [prop]: true })
      expect(wrapper.vm.hasRouterLinkParams).toBeTruthy()
    })
    const wrapper: any = shallowMount(ExampleComponent as any)
    expect(wrapper.vm.hasRouterLinkParams).toBeFalsy()
  })
  it('isActiveRouterLink works correctly', () => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    const router = new VueRouter({ routes: [{ path: '/active' }, { path: '/passive' }] })
    router.push('/active')

    const emptyWrapper = shallowMount(ExampleComponent as any, {
      global: {
        plugins: [VueRouter as any],
      },
    })
    expect(emptyWrapper.vm.isActiveRouterLink).toBeFalsy()

    const wrapperWithProps = shallowMount(ExampleComponent, {
      router,
      localVue,
    })
    wrapperWithProps.setProps({ to: '/active' })
    expect(wrapperWithProps.vm.isActiveRouterLink).toBeTruthy()

    wrapperWithProps.setProps({ to: '/passive' })
    expect(wrapperWithProps.vm.isActiveRouterLink).toBeFalsy()
  })
})
