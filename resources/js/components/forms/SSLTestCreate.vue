<template>
    <form @submit.prevent="submit">
        <form-fields title="MONITOR SETTINGS">
            <app-input
                label="Monitor URL"
                name="url"
                placeholder="https://"
                v-model="data.url"
                type="text"
                info="info"
                :required="true"
            />
            <app-radio-list
                name="checkrate"
                label="Checkrate"
                :radios="checkrateOptions"
                v-model="data.checkrate"
            />
        </form-fields>

        <app-accordion title="ALERT SETTINGS">
            <app-select
                name="contact"
                label="Contact Groups"
                v-model="data.contact"
                :options="contactOptions"
                placeholder="Click here"
            />

            <checkbox-list label="Alert Types">
                <checkbox-list-item
                    label="Send Reminders"
                    v-model="showReminderIntervals"
                ></checkbox-list-item>
                <checkbox-list-item
                    label="Alert of Expiration"
                    name="alert_expiration"
                    v-model="data.alert_expiration"
                ></checkbox-list-item>
                <checkbox-list-item
                    label="Alert on Problems"
                    name="alert_errors"
                    v-model="data.alert_errors"
                ></checkbox-list-item>
                <checkbox-list-item
                    label="Mixed Content Warnings"
                    name="alert_mixed_content"
                    v-model="data.alert_mixed_content"
                ></checkbox-list-item>
            </checkbox-list>

            <template v-if="showReminderIntervals">
                <app-number
                    label="First Reminder"
                    name="first_expiration_reminder"
                    v-model="data.first_expiration_reminder"
                    after-text="Days before expiration"
                />
                <app-number
                    label="Second Reminder"
                    name="second_expiration_reminder"
                    v-model="data.second_expiration_reminder"
                    after-text="Days before expiration"
                />
                <app-number
                    label="Third Reminder"
                    name="third_expiration_reminder"
                    v-model="data.third_expiration_reminder"
                    after-text="Days before expiration"
                />
            </template>
        </app-accordion>

        <app-accordion title="ADVANCED SETTINGS" :no-margin="true">
            <app-checkbox
                name="follow_redirects"
                label="Follow Redirects"
                v-model="data.follow_redirects"
                info="info for this one"
            />
            <app-input
                label="User Agent"
                name="user_agent"
                placeholder="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36 (StatusCake SSL)"
                v-model="data.user_agent"
                type="text"
                info="info"
            />
            <app-input
                label="Custom Hostname"
                name="custom_hostname"
                placeholder="Enter custom hostname here"
                v-model="data.custom_hostname"
                type="text"
            />
        </app-accordion>

        <app-submit>Save Now</app-submit>
    </form>

    <app-modal
        v-if="modal.shouldShow"
        :modal="modal"
        @close="onModalClose"
    ></app-modal>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

import { NewSSLTestDto } from "../../typings/NewSSLTestDto";
import { Radio } from "../../typings/Radio";
import { SelectOption } from "../../typings/SelectOption";

import { useVuelidate } from "@vuelidate/core";

import { saveNewSSLTest } from "../../api";

import useModal from "../../composables/useModal";

import FormFields from "../fields/FormFields.vue";
import AppAccordion from "../AppAccordion.vue";
import AppInput from "../fields/AppInput.vue";
import AppSelect from "../fields/AppSelect.vue";
import AppNumber from "../fields/AppNumber.vue";
import AppCheckbox from "../fields/AppCheckbox.vue";
import CheckboxList from "../fields/CheckboxList.vue";
import CheckboxListItem from "../fields/CheckboxListItem.vue";
import AppRadioList from "../fields/AppRadioList.vue";
import AppSubmit from "../fields/AppSubmit.vue";
import AppModal from "../AppModal.vue";

export default defineComponent({
    name: "form-ssl-test-create",
    components: {
        FormFields,
        AppAccordion,
        AppInput,
        AppSelect,
        AppNumber,
        AppCheckbox,
        CheckboxList,
        CheckboxListItem,
        AppRadioList,
        AppSubmit,
        AppModal,
    },
    setup() {
        const { modal } = useModal();

        const checkrateOptions: Radio[] = [
            { label: "5 Minutes", value: 300, disabled: true },
            { label: "10 Minutes", value: 600, disabled: true },
            { label: "30 Minutes", value: 1800, disabled: true },
            { label: "60 Minutes", value: 3600, disabled: true },
            { label: "24 Hours", value: 86400, disabled: false },
            { label: "7 Days", value: 2073600, disabled: false },
        ];
        const contactOptions: SelectOption[] = [
            { label: "No Contact Group", value: "none" },
            { label: "Default Contact Group", value: "default" },
        ];

        const showReminderIntervals = ref<boolean>(true);

        const data: NewSSLTestDto = reactive({
            url: "https://",
            checkrate: 86400,
            contact: "",
            follow_redirects: false,
            alert_expiration: true,
            alert_errors: true,
            alert_mixed_content: true,
            first_expiration_reminder: 30,
            second_expiration_reminder: 7,
            third_expiration_reminder: 1,
            user_agent: "",
            custom_hostname: "",
        });

        async function submit(e: Event) {
            await saveNewSSLTest(data)
                .then(() => {
                    modal.shouldShow = true;
                    modal.title = "Success!";
                    modal.content = "success message";
                })
                .catch((e) => {
                    console.log(e);
                    modal.shouldShow = true;
                    modal.title = "Failure";
                    modal.content = "Failure message";
                });
        }

        function onModalClose() {
            window.location.href = "/all-monitors";
        }

        return {
            data,
            checkrateOptions,
            contactOptions,
            showReminderIntervals,
            submit,
            modal,
            onModalClose,
        };
    },
});
</script>
