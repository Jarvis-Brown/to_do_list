"use client";

import Drawer from "@mui/material/Drawer";

import { Settings, Close } from "@mui/icons-material";

import { useState } from "react";

import React from "react";

import styles from "@/_styles/home_layout.module.css";

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
                </div>
            </Drawer>
        </div>
    );
};
