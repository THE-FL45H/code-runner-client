import testRequest from "../../requests/testRequest";

export default function Home() {
    async function handleTest() {
        await testRequest();
    }
    return (
        <div>
            <p>Home</p>
            <button onClick={handleTest}>Test</button>
        </div>
    );
}