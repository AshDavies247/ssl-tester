<template>
    <div class="p-4 mb-4 max-w-xl mx-auto rounded-lg bg-white">
        <ul>
            <li
                class="mb-4 flex items-center gap-2 last:mb-0"
                v-for="(datapoint, name) in overallData"
                :key="datapoint"
            >
                <h2 class="font-bold">{{ camelCaseToTitleCase(name) }}:</h2>
                <p class="text-base">{{ datapoint }}</p>
            </li>
        </ul>
    </div>

    <table
        v-if="tests.length"
        class="w-full text-left rounded-lg overflow-hidden"
    >
        <thead class="bg-white">
            <tr>
                <th v-for="item in tableHead" :key="item" class="p-4">
                    {{ item }}
                </th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            <tr
                v-for="(item, index) in tableBody"
                :key="index"
                :class="index as number % 2 == 0 ? 'bg-grey-100' : 'bg-white'"
            >
                <td
                    v-for="(datapoint, name) in item"
                    :key="datapoint"
                    class="p-4"
                >
                    <template
                        v-if="
                            name === 'checkrate' &&
                            typeof datapoint === 'number'
                        "
                        >{{ secondsToTime(datapoint) }}</template
                    >

                    <template
                        v-else-if="
                            name === 'url' && typeof datapoint === 'string'
                        "
                    >
                        <app-button variant="text" :href="datapoint">{{
                            datapoint
                        }}</app-button>
                    </template>

                    <template v-else>{{ datapoint }}</template>
                </td>
                <td>
                    <app-button
                        variant="icon"
                        class="border-red-200"
                        @click="onDelete(item)"
                    >
                        <app-icon
                            type="bin"
                            class="cursor-pointer fill-red-200"
                        ></app-icon>
                    </app-button>
                </td>
            </tr>
        </tbody>
    </table>

    <app-card v-else>
        <heading-alpha>No Active Tests!</heading-alpha>

        <app-button href="/new-monitor">Add new tests</app-button>
    </app-card>

    <app-modal
        v-if="modal.shouldShow"
        :modal="modal"
        @close="onModalClose"
    ></app-modal>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

import { SSLTest } from "../typings/SSLTest";

import { getSSLTests, deleteSSLTest } from "../api";

import { secondsToTime } from "../helpers/secondsToTime";
import { camelCaseToTitleCase } from "../helpers/camelCaseToTitleCase";

import useModal from "../composables/useModal";

import AppIcon from "./AppIcon.vue";
import AppButton from "./AppButton.vue";
import HeadingAlpha from "./HeadingAlpha.vue";
import AppModal from "./AppModal.vue";
import AppCard from "./AppCard.vue";

export default defineComponent({
    name: "all-ssl-tests",
    components: {
        AppIcon,
        AppButton,
        HeadingAlpha,
        AppModal,
        AppCard,
    },
    async setup() {
        const tests = ref<SSLTest[]>([]);
        const { modal } = useModal();
        const tableHead = ref<string[]>([]);
        const tableBody = ref<{ [key: string]: string | number }[]>([]);

        const overallData = reactive({
            totalTests: 0,
            testsRemainingOnPlan: 3,
            certificatesExpiringInLessThanAMonth: 0,
        });

        await getSSLTests().then(({ data }: any) => {
            tests.value = data.tests;
            overallData.totalTests = data.metadata.total_size;
        });

        const excludedColumns = [
            "alert_expiration",
            "alert_errors",
            "alert_mixed_content",
            "follow_redirects",
            "first_expiration_reminder",
            "second_expiration_reminder",
            "third_expiration_reminder",
        ];

        if (tests.value.length) {
            tableHead.value = Object.keys(tests.value[0]).filter(
                (col: string) => !excludedColumns.includes(col)
            );

            tableBody.value = tests.value.map((test: SSLTest) => {
                return Object.keys(tests.value[0])
                    .filter((item) => !excludedColumns.includes(item))
                    .reduce(
                        (obj, key: string) => ({
                            ...obj,
                            [key]: test[key as keyof typeof test],
                        }),
                        {}
                    );
            });
        }

        async function onDelete(item: { [key: string]: string | number }) {
            if (typeof item.test_id === "string") {
                await deleteSSLTest(item.test_id)
                    .then(() => {
                        location.reload();
                    })
                    .catch((e) => {
                        modal.title = "Error";
                        modal.content = e.toJSON().message;
                        modal.shouldShow = true;
                    });
            } else {
                modal.title = "Error";
                modal.content = "there has been as issue";
                modal.shouldShow = true;
            }
        }
        async function onModalClose() {
            location.reload();
        }

        return {
            tests,
            overallData,
            excludedColumns,
            tableHead,
            tableBody,
            onDelete,
            camelCaseToTitleCase,
            secondsToTime,
            modal,
            onModalClose,
        };
    },
});
</script>
