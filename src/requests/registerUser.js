import { HTTP_CREATED } from "../utils/status_codes";
import { REGISTER_URL } from "./endpoints";
import { codeRunnerServer } from "./setup";

export default async function registerUser({ email, password, password1, firstName, lastName }) {
    try {
        const response = await codeRunnerServer.post(REGISTER_URL, {
            email: email, 
            password: password, 
            password2: password1, 
            firstName: firstName, 
            lastName: lastName
        });
        if(response.status === HTTP_CREATED) {
            return response;
        }
    } catch (err) {
        throw err.response.data;
    }
}