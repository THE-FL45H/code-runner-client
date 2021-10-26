import axios from "axios";

export const codeRunnerServer = axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
        "Ahthorization": `JWT ${localStorage.getItem("access_token")}`
    }
});

