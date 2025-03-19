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
        <>
            <aside>
                <div className={styles.profile_pic}></div>
                <div>User Name</div>
                <Search />
            </aside>
        </>
    );
};
