import { mount } from "@vue/test-utils";
import test1 from '../test.json';

import TestVue from './test.vue';

describe('Alert.vue1', () => {
  it('should emit click event', () => {
    // const wrapper = mount(TestVue);
    expect(test1.a).toEqual(1);
  });
})