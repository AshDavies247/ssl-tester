import { createApp } from "vue";

import AppButton from "./components/AppButton.vue";
import AppSuspense from "./components/AppSuspense.vue";
import AllSSLTests from "./components/AllSSLTests.vue";
import FormSSLTestCreate from "./components/forms/SSLTestCreate.vue";

const app = createApp({});

app.component("form-ssl-test-create", FormSSLTestCreate);
app.component("app-button", AppButton);
app.component("app-suspense", AppSuspense);
app.component("all-ssl-tests", AllSSLTests);

app.mount("#app");
