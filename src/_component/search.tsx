"use client";

/* Search Component */

import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import styles from "@/_styles/home_layout.module.css";

export const Search = () => {
    const list = ["STL", "DET"];
    return (
        <div className={styles.group}>
            <Autocomplete
                disablePortal
                options={list}
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
