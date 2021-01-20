import { mount } from '@vue/test-utils'

import VaInnerLoading from '../VaInnerLoading.vue'

import { testIsLoadingMixin } from '../../../vuestic-mixins/LoadingMixin/testIsLoadingMixin'

describe('VaInnerLoading', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaInnerLoading as any)
    expect(wrapper.findComponent('VaInnerLoading')).toBeTruthy()
  })

  it('has loading mixin', () => {
    expect(() => testIsLoadingMixin(VaInnerLoading)).not.toThrow()
  })
})
