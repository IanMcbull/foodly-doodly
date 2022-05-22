import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import NavigationBar from "@/components/NavigationBar.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(NavigationBar, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
