// Profile Page

import React from "react";
import { HomeLayout } from "@/_component";
import Link from "next/link";
import styles from "@/_styles/profile.module.css";

const page = () => {
    return (
        <HomeLayout>
            <div className={styles.profile_pic}></div>
            <div className={styles.btn_container}>
                <button>
                    <input type="file" />
                    Add Photo
                </button>

                <Link href="/home_page">
                    <button>Cancel</button>
                </Link>
            </div>
        </HomeLayout>
    );
};

export default page;
