// CREATE ACCOUNT //

import React from "react";
import TextField from "@mui/material/TextField";
import styles from "@/_styles/login.module.css";
import { HomeLayout } from "@/_component";

const Login = () => {
    return (
        <HomeLayout is_backButton={true}>
            <div className={styles.textbox}>
                <div>
                    <TextField id="filled-basic" label="First Name" fullWidth />
                </div>
                <div>
                    <TextField id="filled-basic" label="Last Name" fullWidth />
                </div>
                <div>
                    <TextField
                        id="filled-basic"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </div>

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
                </div>

                <button className={styles.btn}>Create Account</button>
            </div>
        </HomeLayout>
    );
};

export default Login;
