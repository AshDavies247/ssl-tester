import { mount } from "@vue/test-utils";
import AppCheckbox from "../components/fields/AppCheckbox.vue";

describe("App Checkbox Component", () => {
    it("emits update:modelValue when input is changed", async () => {
        const wrapper = mount(AppCheckbox, {
            props: {
                name: "checkbox",
                label: "checkbox",
                modelValue: false,
            },
        });

        wrapper.find("input").trigger("change");

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    });
});
