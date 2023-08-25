"use client";
import React from "react";
import { useContext } from "react";
import styles from "./darkMode.module.css";
import { ThemeContext } from "../../context/ThemeContext";

function DarkMode() {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div
                className={styles.ball}
                style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
            ></div>
        </div>
    );
}

export default DarkMode;
