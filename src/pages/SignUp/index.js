import { Link } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm";
import { SIGNIN_ROUTE } from "../../routes";

export default function() {
    function handleSubmit(data) {
        // make request
        console.log(data);
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <SignUpForm onSubmit={handleSubmit}/>
            <p>Have an account? <Link to={SIGNIN_ROUTE}>Sign In</Link></p>
        </div>
    );
}