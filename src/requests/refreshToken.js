import axios from "axios";
import { BASE_URL, REFRESH_TOKEN_URL } from "./endpoints";

export default function refreshToken() {
    return axios.post(`${BASE_URL}${REFRESH_TOKEN_URL}`, {
        refresh: localStorage.getItem("refresh_token")
    }, {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
}