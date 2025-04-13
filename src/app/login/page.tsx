// LOGIN PAGE //

import React from "react";
import TextField from "@mui/material/TextField";
import styles from "@/_styles/login.module.css";
import { LoginLayout } from "@/_component";
import Link from "next/link";

const Login = () => {
    return (
        <LoginLayout is_backButton={true}>
            <div className={styles.textbox}>
                <div>
                    <TextField id="filled-basic" label="Username" fullWidth />
                </div>
                <div>
                    <TextField
                        id="filled-basic"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                    <div className={styles.passwordHint}>Forgot Password?</div>
                </div>

                <Link href="/home_page">
                    <button className={styles.btn}>Login</button>
                </Link>
            </div>
        </LoginLayout>
    );
};

export default Login;
