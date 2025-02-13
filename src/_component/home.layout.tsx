import React from "react";
import styles from "@/_styles/home.layout.module.css";

interface homeLayoutModel {
    children: React.ReactNode;
}

export const HomeLayout: React.FC<homeLayoutModel> = ({ children }) => {
    return (
        <main className={styles.main}>
            <div className={styles.main_container}>
                <div>
                    <div>
                        <h1>Title of App</h1>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </main>
    );
};
