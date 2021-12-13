import { mount } from "@vue/test-utils";
import AppSelect from "../components/fields/AppSelect.vue";

describe("Basic Select Component", () => {
    it("emits modelValue when select is changed", async () => {
        const wrapper = mount(AppSelect, {
            props: {
                name: "test",
                label: "test",
                modelValue: "option2",
                options: [
                    { label: "option", value: "option" },
                    { label: "option2", value: "option2" },
                    { label: "option3", value: "option3" },
                ],
                error: null,
            },
        });

        wrapper.find("select").trigger("change");

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    });
});
