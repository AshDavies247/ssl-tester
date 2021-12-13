<template>
    <div class="flex items-center">
        <app-label :required="required">{{ label }}</app-label>
        <ul class="flex gap-1">
            <li v-for="radio in radios" :key="radio.value">
                <app-radio
                    :name="name"
                    :label="radio.label"
                    :value="radio.value"
                    :disabled="radio.disabled"
                    v-model="model"
                />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

import { Radio } from "../../typings/Radio";

import AppLabel from "./AppLabel.vue";
import AppRadio from "./AppRadio.vue";

export default defineComponent({
    name: "app-radio-list",
    emit: "update:modelValue",
    components: {
        AppLabel,
        AppRadio,
    },
    props: {
        name: { type: String, required: true },
        label: { type: String, required: true },
        radios: { type: Object as PropType<Radio[]> },
        modelValue: { type: Number, required: true },
        required: { type: Boolean },
    },

    setup(props, { emit }) {
        const model = computed({
            get: (): number => props.modelValue,
            set: (val: number) => emit("update:modelValue", val),
        });

        return {
            model,
        };
    },
});
</script>
