import { codeRunnerServer } from "./setup";

export default async function testRequest() {
    try {
        const { data } = await codeRunnerServer.get("/auth", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`
            }
        });
        console.log(data);
    } catch (err) {
        throw err;
    }
}