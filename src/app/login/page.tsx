// LOGIN PAGE //

import React from "react";
import styles from "@/_styles/login.module.css";
import { LoginLayout, LoginInput } from "@/_component";
import Link from "next/link";
import { get_login } from "@/server/profile";

const Login = () => {
    const check_login = () => {
        get_login;
    };
    return (
        <LoginLayout is_backButton={true}>
            <div>
                <LoginInput />

                <Link href="/home_page">
                    <button className={styles.btn}>Login</button>
                </Link>
            </div>
        </LoginLayout>
    );
};

export default Login;
