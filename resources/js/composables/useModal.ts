import { reactive } from "vue";

import { Modal } from "../typings/Modal";

export default function useModal() {
    const modal = reactive<Modal>({
        shouldShow: false,
        title: "Test",
        content: "Test",
    });

    return {
        modal,
    };
}
