<template>
    <label class="relative">
        <input
            type="radio"
            :name="name"
            v-model="model"
            :value="value"
            class="absolute top-0 left-0 opacity-0"
            :disabled="disabled"
        />

        <div
            class="px-4 py-2 border border-green-200 rounded"
            :class="[
                disabled
                    ? 'opacity-25 cursor-not-allowed flex items-center'
                    : 'cursor-pointer',
                { 'bg-green-200 text-white': model === value },
            ]"
        >
            <app-icon v-if="disabled" type="lock" class="mr-1" />
            {{ label }}
        </div>
    </label>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import AppIcon from "../AppIcon.vue";

export default defineComponent({
    name: "app-radio",
    emit: "change",
    components: {
        AppIcon,
    },
    props: {
        name: { type: String, required: true },
        value: { type: Number, required: true },
        modelValue: { type: Number, required: true },
        label: { type: String, required: true },
        disabled: { type: Boolean },
    },
    setup(props, { emit }) {
        const model = computed<Number>({
            get: (): Number => props.modelValue,
            set: (val: Number) => emit("update:modelValue", val),
        });

        return {
            model,
        };
    },
});
</script>
