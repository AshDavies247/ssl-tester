<template>
    <div class="bg-white mb-7 shadow-md">
        <div class="px-4 py-2 border-b border-grey-100">
            <heading-beta>{{ title }}</heading-beta>
        </div>
        <div class="p-3 grid grid-cols-1 gap-3">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeadingBeta from "../HeadingBeta.vue";

export default defineComponent({
    name: "form-fields",
    components: {
        HeadingBeta,
    },
    props: {
        title: { type: String },
    },
});
</script>
