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

import Switch from "@mui/material/Switch";

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
                        <div className={styles.list_icon}>
                            <div className={styles.current_circle}></div>
                        </div>

                        <div>Current List</div>
                        <div>0</div>
                    </div>
                    <div className={styles.list_item}>
                        <div className={styles.list_icon}>
                            <Done />
                        </div>
                        <div>Completed List</div>
                        <div>0</div>
                    </div>
                    <div className={styles.divider}></div>
                </div>
                <div className={styles.switch}>
                    <Switch defaultChecked />
                </div>
            </aside>
            <main className={styles.main}>
                <div className={styles.setting_container}>
                    <Settings sx={{ fontSize: 35 }} />
                </div>
                <div className={styles.calendar_container}>
                    <div>Wednesday</div>

                    <div className={styles.date_container}>
                        <p>February 19, 1988 </p>
                        <CalendarToday />
                    </div>
                </div>

                <div className={styles.create_list}>
                    <button>Create List</button>
                </div>
            </main>
        </div>
    );
};
