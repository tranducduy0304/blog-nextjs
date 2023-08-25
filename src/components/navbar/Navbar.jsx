"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkMode from "../darkMode/DarkMode";
import { signOut, useSession } from "next-auth/react";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        titile: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        titile: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {
    const session = useSession();

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                weeki
            </Link>
            <div className={styles.links}>
                <DarkMode />
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                {session.status === "authenticated" && (
                    <button className={styles.logout} onClick={signOut}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
