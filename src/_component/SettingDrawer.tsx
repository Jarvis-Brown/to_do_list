"use client";

import Drawer from "@mui/material/Drawer";

import { Settings, Close } from "@mui/icons-material";

import { useState } from "react";

import React from "react";

import styles from "@/_styles/home_layout.module.css";

import Link from "next/link";

export const SettingDrawer = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <div className={styles.setting_container}>
            <Settings onClick={toggleDrawer(true)} sx={{ fontSize: 35 }} />
            <Drawer open={open} anchor="right">
                <div className={styles.drawer_wrapper}>
                    <div className={styles.close_icon}>
                        <Close onClick={toggleDrawer(false)} />
                    </div>
                    <div className={styles.setting_button_container}>
                        <div className={styles.setting_button_group}>
                            <Link href="/profile">
                                <button>Edit Profile</button>
                            </Link>

                            <button>Clear Lists</button>
                        </div>

                        <div className={styles.sign_out_button}>
                            <button>Sign Out</button>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};
