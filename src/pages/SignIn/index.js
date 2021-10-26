import { Link } from "react-router-dom";
import SignInForm from "../../components/SignInForm";
import { SIGNUP_ROUTE } from "../../routes";

export default function() {
    function handleSubmit({ username, password }) {
        // make request
        console.log(username, password);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <SignInForm onSubmit={handleSubmit}/>
            <p>Don't have an account? <Link to={SIGNUP_ROUTE}>Sign Up</Link></p>
        </div>
    );
}