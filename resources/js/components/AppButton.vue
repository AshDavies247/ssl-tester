<template>
    <component :is="element" v-bind="attributes" :class="btnClass()">
        <slot>Submit</slot>
    </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

const variants: { [key: string]: string } = {
    primary:
        "px-6 py-2 bg-blue-50 rounded-sm text-white text-sm transition-colors hover:bg-blue-100 disabled:bg-blue-100",
    text: "underline text-blue-100",
    icon: "border p-2 rounded",
};

export default defineComponent({
    name: "AppButton",
    props: {
        href: { type: String, required: false },
        variant: { type: String, default: "primary" },
        type: { type: String, default: "button" },
    },
    setup(props) {
        const element = computed(() => (props.href ? "a" : "button"));

        const attributes = computed(() => {
            if (props.href) {
                return { href: props.href };
            } else {
                return { href: props.type };
            }
        });

        function btnClass() {
            return variants[props.variant];
        }

        return {
            attributes,
            element,
            btnClass,
        };
    },
});
</script>
