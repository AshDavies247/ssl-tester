<template>
    <component
        :is="element"
        v-bind="attributes"
        class="
            px-6
            py-2
            bg-blue-50
            rounded-sm
            text-white text-sm
            transition-colors
            hover:bg-blue-100
            disabled:bg-blue-100
        "
    >
        <slot>Submit</slot>
    </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
    name: "AppButton",
    props: {
        href: { type: String, required: false },
    },
    setup(props) {
        const element = computed(() => (props.href ? "a" : "button"));

        const attributes = computed(() => {
            if (props.href) {
                return { href: props.href };
            }

            return {};
        });

        return {
            attributes,
            element,
        };
    },
});
</script>
