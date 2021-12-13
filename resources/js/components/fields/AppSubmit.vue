<template>
    <div class="p-4 bg-grey-100 shadow-md">
        <app-button variant="primary" class="block w-full"><slot /></app-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppButton from "../AppButton.vue";

export default defineComponent({
    name: "app-submit",
    components: {
        AppButton,
    },
});
</script>
