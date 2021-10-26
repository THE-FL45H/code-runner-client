import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import RenderErrors from "../../components/RenderErrors";
import SignUpForm from "../../components/SignUpForm";
import { loginUser, registerUser } from "../../requests";
import { HOME_ROUTE, SIGNIN_ROUTE } from "../../routes";

export default function SignUp() {
    const history = useHistory();
    const [ errors, setErrors ] = useState(null);
    
    async function handleSubmit({
        email,
        password,
        password1,
        firstName,
        lastName
    }) {
        try {
            // make request
            await registerUser({
                email,
                password,
                password1,
                firstName,
                lastName
            });
            await loginUser({ email, password });
            history.push(HOME_ROUTE);
        } catch (err) {
            console.log(err);
            setErrors(err);
        }
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <SignUpForm onSubmit={handleSubmit} />
            <RenderErrors errors={errors}/>
            <p>Have an account? <Link to={SIGNIN_ROUTE}>Sign In</Link></p>
        </div>
    );
}