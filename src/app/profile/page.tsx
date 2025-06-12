// Profile Page

import React from "react";
import { HomeLayout } from "@/_component";
import styles from "@/_styles/profile.module.css";
import { ProfileButtons } from "@/_component/profile_buttons";

const page = () => {
    return (
        <HomeLayout>
            <div className={styles.profile_pic}></div>
            <ProfileButtons />
        </HomeLayout>
    );
};

export default page;
