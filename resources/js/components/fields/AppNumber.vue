<template>
    <label class="flex items-center">
        <app-label :info="info" :required="required">{{ label }}</app-label>
        <input
            class="
                h-11
                w-20
                p-4
                font-bold
                text-center text-xs
                border border-grey-100
            "
            type="number"
            v-model="model"
            :name="name"
        />
        <div
            class="flex items-center h-full px-2 bg-grey-100 text-sm"
            v-if="afterText"
        >
            {{ afterText }}
        </div>
    </label>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import AppLabel from "./AppLabel.vue";

export default defineComponent({
    name: "app-number",
    emit: "update:modelValue",
    components: {
        AppLabel,
    },
    props: {
        name: { type: String, required: true },
        label: { type: String, required: true },
        afterText: { type: String },
        modelValue: { type: Number, default: 0 },
        info: { type: String },
        required: { type: Boolean },
    },
    setup(props, { emit }) {
        const model = computed({
            get: (): number => props.modelValue,
            set: (val: number) => emit("update:modelValue", val),
        });

        return { model };
    },
});
</script>
