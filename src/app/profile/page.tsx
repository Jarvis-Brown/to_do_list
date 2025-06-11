// Profile Page

import React from "react";
import { HomeLayout } from "@/_component";
import Link from "next/link";
import styles from "@/_styles/profile.module.css";
import { VisuallyHiddenInput } from "@/_styles/custom";

const page = () => {
    return (
        <HomeLayout>
            <div className={styles.profile_pic}></div>
            <div className={styles.btn_container}>
                {" "}
                // this needs to be its own component
                <button>
                    Add Photo
                    <VisuallyHiddenInput
                        type="file"
                        accept=".jpg, .jpeg, .png, .webp"
                        onChange={(e: any) => handle_image(e)}
                        multiple={false}
                    />
                </button>
                ;
                <Link href="/home_page">
                    <button>Cancel</button>
                </Link>
            </div>
        </HomeLayout>
    );
};

function handle_image(events: any) {
    console.log(events);
}

export default page;
