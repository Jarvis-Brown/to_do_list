// HOME LAYOUT //

"use client";

import { Star, Done, Settings, CalendarToday } from "@mui/icons-material";

import { Search } from "./search";

import styles from "@/_styles/home_layout.module.css";

import Switch from "@mui/material/Switch";

import { SettingDrawer } from "./SettingDrawer";

import React, { useEffect, useState } from "react";
import { workAsyncStorage } from "next/dist/server/app-render/entry-base";

interface homeLayoutModel {
    children: React.ReactNode;
}

export const HomeLayout: React.FC<homeLayoutModel> = ({ children }) => {
    const [username, setProfileImg] = useState("");
    useEffect(() => {
        const getProfile = JSON.parse(
            localStorage.getItem("profile") as string
        );
        setProfileImg(getProfile);
    }, []);
    return (
        <div className={styles.aside_main}>
            <aside className={styles.aside}>
                <div className={styles.profile_pic}>
                    <img
                        src="
https://firebasestorage.googleapis.com/v0/b/taskly-dcb7e.firebasestorage.app/o/image%2F1730723f-4a58-4828-8b6d-9c0c688020f8%2FIMG_0836.jpg?alt=media&token=7bd1902c-443d-428c-a779-ed2dde707833"
                        alt="profile image"
                    />
                </div>
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
                <SettingDrawer />
                <div className={styles.calendar_container}>
                    <div>Wednesday</div>

                    <div className={styles.date_container}>
                        <p>February 19, 1988 </p>
                        <CalendarToday />
                    </div>
                </div>

                {children}

                {/* <div className={styles.create_list}>
                    <button>Create List</button>
                </div> */}
            </main>
        </div>
    );
};
