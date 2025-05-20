// CREATE ACCOUNT //

"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "@/_styles/login.module.css";
import { LoginLayout } from "@/_component";
import { useRouter } from "next/navigation";
import { postProfile } from "@/server/profile";

const Login = () => {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function test() {
        postProfile(firstName, lastName, email, userName, password);
        console.log(firstName, lastName, email, userName, password);
        // router.push("/");
    }

    return (
        <LoginLayout is_backButton={true}>
            <div className={styles.textbox}>
                <div>
                    <TextField
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        id="filled-basic"
                        label="First Name"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <TextField
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        id="filled-basic"
                        label="Last Name"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="filled-basic"
                        label="Email Address"
                        type="email"
                        fullWidth
                        required
                    />
                </div>

                <div>
                    <TextField
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        id="filled-basic"
                        label="Username"
                        fullWidth
                        required
                    />
                </div>

                <div>
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="filled-basic"
                        label="Password"
                        type="password"
                        fullWidth
                        required
                    />
                </div>

                <button onClick={test} className={styles.btn}>
                    Create Account
                </button>
            </div>
        </LoginLayout>
    );
};

export default Login;
