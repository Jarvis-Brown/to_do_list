// HOME PAGE //

import React from "react";
import { HomeLayout } from "@/_component";
import styles from "@/_styles/home_layout.module.css";

const page = () => {
    return (
        <HomeLayout>
            <div className={styles.create_list}>
                <button>Create List</button>
            </div>
        </HomeLayout>
    );
};

export default page;
