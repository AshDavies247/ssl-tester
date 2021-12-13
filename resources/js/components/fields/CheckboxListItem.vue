<template>
    <label class="flex items-center mr-2">
        <input class="mr-2" type="checkbox" :name="name" v-model="model" />
        <span class="text-xs">{{ label }}</span>
    </label>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
    name: "checkbox-list-item",
    emit: "update:modelValue",
    props: {
        label: { type: String, required: true },
        modelValue: { type: Boolean },
        name: { type: String },
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
