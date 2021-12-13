<template>
    <div class="flex items-center">
        <app-label>{{ label }}</app-label>

        <div class="flex items-center gap-3">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppLabel from "./AppLabel.vue";

export default defineComponent({
    name: "checkbox-list",
    components: {
        AppLabel,
    },
    props: {
        label: { type: String, required: true },
    },
});
</script>
