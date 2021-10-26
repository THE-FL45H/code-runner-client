import { createBrowserHistory } from 'history';
import axios from "axios";
import { HTTP_UNAUTHORIZED } from "../utils/status_codes";
import refreshToken from "./refreshToken";
import { BASE_URL, LOGIN_URL, REGISTER_URL } from './endpoints';
import logout from './logout';

const history = createBrowserHistory();

const codeRunnerServer = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`
    }
});


codeRunnerServer.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;
        if (error.response.status === HTTP_UNAUTHORIZED && !(originalRequest.url === LOGIN_URL || originalRequest.url=== REGISTER_URL)) {
            return refreshToken()
                .then(({ data }) => {
                    localStorage.setItem("access_token", data["access"]);
                    localStorage.setItem("refresh_token", data["refresh"]);
                    error.config.headers['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
                    return axios.request(originalRequest);
                })
                .catch(err => {
                    logout();
                    history.push("/sign-in")
                    window.location.reload();
                });
        }
        return Promise.reject(error);
    }
);

export { codeRunnerServer };