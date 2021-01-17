import { shallowMount } from '@vue/test-utils'
import { RouterLinkMixin } from './RouterLinkMixin'

export function testHasRouterLinkMixin<T extends RouterLinkMixin> (componentOptions: T) {
  const wrapper: any = shallowMount(componentOptions as any)

  // Test mixin applied
  if (!(wrapper.vm as any).hasRouterLinkMixin) {
    throw new Error('RouterLinkMixin is not added')
  }
}
