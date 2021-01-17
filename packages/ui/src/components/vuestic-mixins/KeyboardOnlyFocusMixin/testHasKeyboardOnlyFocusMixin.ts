import { shallowMount } from '@vue/test-utils'
import { KeyboardOnlyFocusMixin } from './KeyboardOnlyFocusMixin'

export function testHasKeyboardOnlyFocusMixin<T extends KeyboardOnlyFocusMixin> (componentOptions: T) {
  const wrapper: any = shallowMount(componentOptions as any)

  // Test mixin applied
  if (!(wrapper.vm as any).hasKeyboardOnlyFocusMixin) {
    throw new Error('KeyboardOnlyFocusMixin is not added')
  }
}
