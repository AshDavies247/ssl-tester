<template>
    <label class="flex items-center">
        <app-label>{{ label }}</app-label>
        <select
            :name="name"
            v-model="model"
            :placeholder="placeholder"
            class="
                w-full
                p-3
                text-sm
                border border-grey-100
                rounded
                outline-none
                focus:shadow-[0_0_5px_#e0e0e0]
            "
        >
            <option value="" hidden disabled>Click here</option>
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </label>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

import { SelectOption } from "../../typings/SelectOption";

import AppLabel from "./AppLabel.vue";

export default defineComponent({
    name: "app-select",
    components: {
        AppLabel,
    },
    props: {
        name: { type: String, required: true },
        label: { type: String, required: true },
        modelValue: { type: String, required: true },
        options: { type: Object as PropType<SelectOption[]> },
        placeholder: { type: String },
    },
    setup(props, { emit }) {
        const model = computed({
            get: (): string => props.modelValue,
            set: (val: string) => emit("update:modelValue", val),
        });

        return {
            model,
        };
    },
});
</script>
