import { mount } from "@vue/test-utils";
import CobblestoneHero from "./CobblestoneHero.vue";

describe("CobblestoneHero", () => {
  const wrapper = mount(CobblestoneHero);
  const vm = wrapper.vm;

  it("has an image", () => {
    expect(wrapper.contains("img")).toBe(true);
  });

  describe("img", () => {
    it("emits an `image:clicked` event when clicked", () => {
      wrapper.find("img").trigger("click");
      expect(wrapper.emitted()["image:clicked"].length).toBe(1);
    });
  });
});
