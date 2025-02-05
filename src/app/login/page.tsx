import React from "react";
import TextField from "@mui/material/TextField";
import styles from "@/_styles/login.module.css";

const Login = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main_container}>
                <div>
                    <div>
                        <h1>Title of App</h1>
                    </div>
                    <div className={styles.textbox}>
                        <div>
                            <TextField
                                id="filled-basic"
                                label="Username"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="filled-basic"
                                label="Password"
                                type="password"
                                fullWidth
                            />
                            <div className={styles.passwordHint}>
                                Forgot Password?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
