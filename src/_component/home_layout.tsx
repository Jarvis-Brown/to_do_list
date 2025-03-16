// HOME LAYOUT //

import {
    Star,
    Done,
    Settings,
    CalendarToday,
    Close,
} from "@mui/icons-material";

import styles from "@/_styles/home_layout.module.css";

import React from "react";

export const HomeLayout = () => {
    return (
        <>
            <aside>
                <div className={styles.profile_pic}></div>
                <div>User Name</div>
                <form>
                    <input type="search" name=""></input>
                </form>
            </aside>
        </>
    );
};
