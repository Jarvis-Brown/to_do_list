// TEMPLATE PAGE //

import React from "react";
import styles from "@/_styles/login_layout.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

interface homeLayoutModel {
    children: React.ReactNode;
    is_backButton: boolean;
}

export const LoginLayout: React.FC<homeLayoutModel> = ({
    children,
    is_backButton,
}) => {
    return (
        <main className={styles.main}>
            {is_backButton && (
                <Link href="/" className={styles.back_arrow}>
                    <KeyboardBackspaceIcon />
                </Link>
            )}
            <div className={styles.main_container}>
                <div>
                    <div>
                        <h1>Taskly</h1>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </main>
    );
};
