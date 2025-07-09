"use client";

import TextField from "@mui/material/TextField";
import styles from "@/_styles/login.module.css";
import { useState } from "react";

export const LoginInput: React.FC = () => {
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);

    return (
        <div className={styles.textbox}>
            <div>
                <TextField
                    id="filled-basic"
                    label="Username"
                    fullWidth
                    onChange={(event: any) => setUsername(event)}
                    value={username}
                />
            </div>
            <div>
                <TextField
                    id="filled-basic"
                    label="Password"
                    type="password"
                    fullWidth
                    onChange={(event: any) => setPassword(event)}
                    value={password}
                />
                <div className={styles.passwordHint}>Forgot Password?</div>
            </div>
        </div>
    );
};
