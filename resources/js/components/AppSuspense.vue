<template>
    <Suspense>
        <slot />

        <template #fallback>
            <slot name="fallback">Loading...</slot>
        </template>
    </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "reg-suspense",
});
</script>
