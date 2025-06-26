// Profile Image

"use client";
import React, { useRef } from "react";
import { VisuallyHiddenInput } from "@/_styles/custom";
import Link from "next/link";
import styles from "@/_styles/profile.module.css";
import Button from "@mui/material/Button";
import { updateProfileImage } from "@/firebase/storage";
import { profileModel } from "@/models";
import { updateProfile } from "@/server/profile";

export const ProfileButtons = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    async function handle_image(event: any) {
        const getImage = await updateProfileImage(
            crypto.randomUUID(),
            event.target.files[0]
        );
        const profile: profileModel = {
            email: "mariobros@gmail.com",
            first_name: "mario",
            id: "0d1af326-8564-4d80-a1e2-fe9d0a0b22fc",
            last_name: "luigi",
            password: "123456",
            username: "mario88",
            imgSource: getImage,
        };
        updateProfile(profile);
        console.log(event, getImage);
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
                onChange={(event: any) => handle_image(event)}
                multiple={false}
            />
            <Link href="/home_page">
                <button>Cancel</button>
            </Link>
        </div>
    );
};
