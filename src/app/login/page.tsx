// LOGIN PAGE //

import React from "react";

import { LoginLayout, LoginInput } from "@/_component";

const Login = () => {
    return (
        <LoginLayout is_backButton={true}>
            <div>
                <LoginInput />
            </div>
        </LoginLayout>
    );
};

export default Login;
