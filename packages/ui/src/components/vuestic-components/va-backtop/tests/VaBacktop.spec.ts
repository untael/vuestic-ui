import { mount } from '@vue/test-utils'

import VaBacktop from '../VaBacktop.vue'
import { testIsContextableComponent } from '../../../context-test/context-provide/testIsContextableComponent'

describe('VaBacktop', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaBacktop as any)
    expect(wrapper.findComponent('VaBacktop')).toBeTruthy()
  })
  it('is contextable', () => {
    const props = {
      target: 'body',
      visibilityHeight: 0,
      speed: 50,
      verticalOffset: '1rem',
      horizontalOffset: '1rem',
      color: '',
      horizontalPosition: 'left',
      verticalPosition: 'right',
    }
    expect(() => testIsContextableComponent(VaBacktop, props)).not.toThrow()
  })
})
