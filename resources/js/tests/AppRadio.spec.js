import { mount } from "@vue/test-utils";
import AppRadio from "../components/fields/AppRadio.vue";

describe("App Radio Component", () => {
    it("emits update:modelValue when input is changed", async () => {
        const wrapper = mount(AppRadio, {
            props: {
                name: "radio",
                label: "radio",
                value: 0,
                modelValue: 0,
            },
        });

        wrapper.find("input").trigger("change");

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    });
});
