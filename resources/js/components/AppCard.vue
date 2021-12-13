<template>
    <div class="max-w-4xl mx-auto p-4 rounded bg-white text-center">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "app-card",
});
</script>
