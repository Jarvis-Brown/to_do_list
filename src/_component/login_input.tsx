"use client";

import TextField from "@mui/material/TextField";
import styles from "@/_styles/login.module.css";
import { get_login } from "@/server/profile";
import { useState } from "react";

export const LoginInput: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const check_login = async () => {
        const isValid_Login = await get_login(username, password);
        console.log(isValid_Login);
    };

    return (
        <>
            <div className={styles.textbox}>
                <div>
                    <TextField
                        id="filled-basic"
                        label="Username"
                        fullWidth
                        onChange={(event: any) =>
                            setUsername(event.target.value)
                        }
                        value={username}
                    />
                </div>
                <div>
                    <TextField
                        id="filled-basic"
                        label="Password"
                        type="password"
                        fullWidth
                        onChange={(event: any) =>
                            setPassword(event.target.value)
                        }
                        value={password}
                    />
                    <div className={styles.passwordHint}>Forgot Password?</div>
                </div>
            </div>

            <button className={styles.btn} onClick={check_login}>
                Login
            </button>
        </>
    );
};
