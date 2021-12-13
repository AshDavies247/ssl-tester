<template>
    <div class="w-36 flex-shrink-0 mr-3" :class="{ 'flex items-center': info }">
        <app-icon v-if="info" class="mr-1" type="info" title="info" />
        <span class="text-xs font-bold">
            <slot />
            <template v-if="required">*</template>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppIcon from "../AppIcon.vue";

export default defineComponent({
    name: "app-label",
    components: {
        AppIcon,
    },
    props: {
        info: { type: String },
        required: { type: Boolean },
    },
});
</script>
