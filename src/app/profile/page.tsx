// Profile Page

import React from "react";
import { HomeLayout } from "@/_component";
import styles from "@/_styles/profile.module.css";
import { ProfileButtons } from "@/_component/profile_buttons";

const page = () => {
    return (
        <HomeLayout>
            <div className={styles.profile_pic}>
                <img
                    className={styles.profile_pic_img}
                    src="
https://firebasestorage.googleapis.com/v0/b/taskly-dcb7e.firebasestorage.app/o/image%2F1730723f-4a58-4828-8b6d-9c0c688020f8%2FIMG_0836.jpg?alt=media&token=7bd1902c-443d-428c-a779-ed2dde707833"
                    alt="profile image"
                />
            </div>
            <ProfileButtons />
        </HomeLayout>
    );
};

export default page;
