import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SignInForm from "../../components/SignInForm";
import { loginUser } from "../../requests";
import { HOME_ROUTE, SIGNUP_ROUTE } from "../../routes";

export default function SignIn() {
    const [errors, setErrors] = useState({});
    const history = useHistory();
    async function handleSubmit({ email, password }) {
        // make request
        try {
            await loginUser({ email, password });
            history.push(HOME_ROUTE);
        } catch (err) {
            setErrors(err);
        }
    }

    return (
        <div>
            <h1>Sign In</h1>
            <SignInForm onSubmit={handleSubmit}/>
            <p>{errors["details"]}</p>
            <p>Don't have an account? <Link to={SIGNUP_ROUTE}>Sign Up</Link></p>
        </div>
    );
}