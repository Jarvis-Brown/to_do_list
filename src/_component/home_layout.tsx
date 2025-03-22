// HOME LAYOUT //

import {
    Star,
    Done,
    Settings,
    CalendarToday,
    Close,
} from "@mui/icons-material";

import { Search } from "./search";

import styles from "@/_styles/home_layout.module.css";

import React from "react";

export const HomeLayout = () => {
    return (
        <div className={styles.aside_main}>
            <aside className={styles.aside}>
                <div className={styles.profile_pic}></div>
                <div className={styles.user_name}>User Name</div>
                <Search />
                <div className={styles.divider}></div>
                <div className={styles.list}>
                    <div className={styles.list_item}>
                        <div className={styles.list_icon}></div>
                        <div>Current List</div>
                        <div>0</div>
                    </div>
                    <div className={styles.list_item}>
                        <div className={styles.list_icon}></div>
                        <div>Completed List</div>
                        <div>0</div>
                    </div>
                    <div className={styles.divider}></div>
                </div>
            </aside>
        </div>
    );
};
