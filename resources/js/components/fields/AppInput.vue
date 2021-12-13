<template>
    <label class="flex items-center">
        <app-label :info="info" :required="required">{{ label }}</app-label>
        <input
            :type="type"
            :name="name"
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
            v-model="model"
        />
    </label>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import AppLabel from "./AppLabel.vue";

export default defineComponent({
    name: "app-input",
    emit: "update:modelVlue",
    components: {
        AppLabel,
    },
    props: {
        name: { type: String, required: true },
        label: { type: String, required: true },
        type: { type: String, default: "text" },
        modelValue: { type: String, default: "" },
        placeholder: { type: String },
        info: { type: String },
        required: { type: Boolean },
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
