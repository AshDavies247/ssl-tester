import { mount } from "@vue/test-utils";
import AppNumber from "../components/fields/AppNumber.vue";

describe("App Number Component", () => {
    it("emits update:modelValue when input is changed", async () => {
        const wrapper = mount(AppNumber, {
            props: {
                name: "number",
                label: "number",
                modelValue: 0,
            },
        });

        wrapper.find("input").trigger("input");

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    });
});
