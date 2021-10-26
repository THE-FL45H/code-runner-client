import { useState } from "react";

export default function ({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [ errors, setErrors ] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        const data = { email, password };
        onSubmit(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    required
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    required
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </form>
    )
}