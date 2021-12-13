<template>
    <div :class="{ 'mb-7': !noMargin }">
        <button
            class="
                flex
                justify-between
                items-center
                w-full
                py-5
                px-6
                bg-purple-400
                text-left
            "
            @click.prevent="toggle"
        >
            <heading-beta class="text-white">{{ title }}</heading-beta>
            <app-icon
                type="arrow"
                class="transition-transform duration-200 fill-white"
                :class="{ 'rotate-180': open }"
            />
        </button>

        <transition
            class="overflow-hidden duration-200 transition-height"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
        >
            <div v-show="open">
                <div class="p-3 grid grid-cols-1 gap-3 bg-white">
                    <slot />
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import AppIcon from "./AppIcon.vue";
import HeadingBeta from "./HeadingBeta.vue";

export default defineComponent({
    name: "app-accordion",
    components: {
        AppIcon,
        HeadingBeta,
    },
    props: {
        title: { type: String },
        noMargin: { type: Boolean },
    },
    setup() {
        const open = ref<boolean>(false);

        function toggle() {
            open.value = !open.value;
        }

        function beforeEnter(el: Element) {
            const element = el as HTMLElement;
            element.style.height = "0";
        }

        function enter(el: Element) {
            const element = el as HTMLElement;
            element.style.height = el.scrollHeight + "px";
        }

        function afterEnter(el: Element) {
            const element = el as HTMLElement;
            element.style.height = "auto";
        }

        function beforeLeave(el: Element) {
            const element = el as HTMLElement;
            element.style.height = el.scrollHeight + "px";
        }

        function leave(el: Element) {
            const element = el as HTMLElement;
            element.style.height = "0";
        }

        return {
            open,
            toggle,
            beforeEnter,
            enter,
            afterEnter,
            beforeLeave,
            leave,
        };
    },
});
</script>
