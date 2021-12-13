<template>
    <svg
        :viewBox="viewBox"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        class="block"
    >
        <component :is="icon"></component>
    </svg>
</template>

<script lang="ts">
import { defineComponent, computed, Component } from "vue";

import Lock from "./icons/Lock.vue";
import Info from "./icons/Info.vue";
import Arrow from "./icons/Arrow.vue";

const components: { [key: string]: Component } = {
    arrow: Arrow,
    lock: Lock,
    info: Info,
};

export default defineComponent({
    name: "app-icon",
    components,
    props: {
        viewBox: {
            type: String,
            default: "0 0 24 24",
        },
        width: {
            type: String,
            default: "12",
        },
        height: {
            type: String,
            default: "12",
        },
        type: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx) {
        const icon = computed(() => components[props.type]);

        return {
            icon,
        };
    },
});
</script>
