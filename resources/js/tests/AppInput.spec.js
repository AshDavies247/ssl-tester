import { mount } from "@vue/test-utils";
import AppInput from "../components/fields/AppInput.vue";

describe("App Input Component", () => {
    it("emits update:modelValue when input is changed", async () => {
        const wrapper = mount(AppInput, {
            props: {
                name: "name",
                label: "name",
                modelValue: "",
            },
        });

        wrapper.find("input").trigger("input");

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    });
});
