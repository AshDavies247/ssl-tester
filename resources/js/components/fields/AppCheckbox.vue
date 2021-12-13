<template>
    <label class="flex items-center">
        <app-label :required="required" :info="info">{{ label }}</app-label>
        <input type="checkbox" :name="name" v-model="model" />
    </label>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import AppLabel from "./AppLabel.vue";

export default defineComponent({
    name: "app-checkbox",
    emit: "update:modelValue",
    components: {
        AppLabel,
    },
    props: {
        name: { type: String, required: true },
        label: { type: String, required: true },
        modelValue: { type: Boolean },
        info: { type: String },
        required: { type: Boolean },
    },
    setup(props, { emit }) {
        const model = computed({
            get: (): boolean => props.modelValue,
            set: (val: boolean) => emit("update:modelValue", val),
        });

        return {
            model,
        };
    },
});
</script>
