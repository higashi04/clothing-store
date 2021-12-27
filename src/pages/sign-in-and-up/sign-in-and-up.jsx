import React from "react";
import './sign-in-and-up.scss'

import SignIn from "../../components/sign-in/sign-in";

const SignInAndUpPage = () => {
    return(
       <div className="sign-in-and-sign-up">
           SIGN IN 
           <SignIn/>
       </div> 
    )
}
export default SignInAndUpPage;