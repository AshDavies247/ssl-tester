import axios from "axios";

import { NewSSLTestDto } from "../typings/NewSSLTestDto";

const axiosInstance = axios.create({
    baseURL: "http://interview.statuscake.com",
});

export async function getSSLTests() {
    return await axiosInstance.get("/ssl");
}

export async function getSSLTest(id: string) {
    return await axiosInstance.get(`/ssl/${id}`);
}

export async function saveNewSSLTest(payload: NewSSLTestDto) {
    console.log(payload);
    await axiosInstance.post("/ssl", payload);
}
