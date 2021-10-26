import { HTTP_OK } from "../utils/status_codes";
import { LOGIN_URL } from "./endpoints";
import { codeRunnerServer } from "./setup";

export default  async function loginUser({ email, password }) {
    try {
        const response = await codeRunnerServer.post(LOGIN_URL, {
            username: email,
            password: password
        });
        if(response.status === HTTP_OK) {
            localStorage.setItem("access_token", response.data["access"]);
            localStorage.setItem("refresh_token", response.data["refresh"]);
            return response;
        }
    } catch(err) {
        throw err.response.data;
    }
}