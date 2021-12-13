<template>
    <component :is="Suspense">
        <slot />

        <template #fallback>
            <slot name="fallback">Loading...</slot>
        </template>
    </component>
</template>

<script lang="ts">
import {
    defineComponent,
    Suspense as suspense_,
    SuspenseProps,
    VNodeProps,
} from "vue";

export default defineComponent({
    name: "reg-suspense",
    setup() {
        const Suspense = suspense_ as {
            new (): {
                $props: VNodeProps & SuspenseProps;
            };
        };

        return {
            Suspense,
        };
    },
});
</script>
