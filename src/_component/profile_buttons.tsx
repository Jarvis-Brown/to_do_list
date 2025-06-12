"use client";
import React, { useRef } from "react";
import { VisuallyHiddenInput } from "@/_styles/custom";
import Link from "next/link";
import styles from "@/_styles/profile.module.css";
import Button from "@mui/material/Button";
import { updateProfileImage } from "@/firebase/storage";

export const ProfileButtons = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    function handle_image(events: any) {
        console.log(events);
    }

    function handleButtonClick() {
        fileInputRef.current?.click();
    }
    return (
        <div className={styles.btn_container}>
            {" "}
            {/* this needs to be its own component */}
            <button type="button" onClick={handleButtonClick}>
                Add Photo
            </button>
            <VisuallyHiddenInput
                ref={fileInputRef}
                type="file"
                onChange={handle_image}
                multiple={false}
            />
            <Link href="/home_page">
                <button>Cancel</button>
            </Link>
        </div>
    );
};
