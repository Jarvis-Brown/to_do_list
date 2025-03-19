"use client";

/* Search Component */

import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import styles from "@/_styles/home_layout.module.css";

export const Search = () => {
    return (
        <div className={styles.group}>
            <Autocomplete
                disablePortal
                options={[]}
                renderInput={(params) => (
                    <TextField {...params} label="search" />
                )}
            />
            <Autocomplete
                disablePortal
                options={[]}
                renderInput={(params) => (
                    <TextField {...params} label="filter" />
                )}
            />
        </div>
    );
};
