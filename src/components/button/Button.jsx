import React from "react";
import Link from "next/link";
import styles from "./button.modules.css";

export const Button = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className={StyleSheet.container}>{text}</button>
        </Link>
    );
};
