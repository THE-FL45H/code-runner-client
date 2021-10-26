import { useState } from "react";

export default function ({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        if (isValid()) {
            const data = { email, password, password1, firstName, lastName };
            onSubmit(data);
        }
    }

    function isValid() {
        if(password.length < 7) {
            setErrors({
                ...errors,
                password: "Password is too short"
            });
            return false;
        }
        if(password !== password1) {
            setErrors({
                ...errors,
                password1: "Passwords must be equal"
            });
            return false;
        }
        return true;
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
                <p>{errors["email"]}</p>
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
                <p>{errors["password"]}</p>
            </div>
            <div>
                <input
                    required
                    type="password"
                    id="password1"
                    placeholder="Confirm Password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                />
                <p>{errors["password1"]}</p>
            </div>
            <div>
                <input
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <p>{errors["firstName"]}</p>
            </div>
            <div>
                <input
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <p>{errors["lastName"]}</p>
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}