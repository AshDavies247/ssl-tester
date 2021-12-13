<template>
    <div
        class="
            fixed
            left-0
            top-0
            h-screen
            w-screen
            flex
            items-center
            justify-center
            bg-grey-100 bg-opacity-50
            backdrop-blur-sm
        "
    >
        <div
            class="
                max-w-md
                w-full
                px-4
                py-3
                bg-white
                rounded-sm
                border-t-[1.375rem] border-purple-400
            "
        >
            <heading-alpha class="mb-2">{{ modal.title }}</heading-alpha>
            <p class="mb-2">{{ modal.content }}</p>

            <div class="text-right">
                <app-button @click="onConfirm" class="font-bold">OK</app-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Modal } from "../typings/Modal";

import HeadingAlpha from "./HeadingAlpha.vue";
import AppButton from "./AppButton.vue";

export default defineComponent({
    name: "app-modal",
    emit: "close",
    components: {
        HeadingAlpha,
        AppButton,
    },
    props: {
        modal: { type: Object as PropType<Modal>, required: true },
    },
    setup(_, { emit }) {
        function onConfirm() {
            emit("close");
        }

        return {
            onConfirm,
        };
    },
});
</script>
