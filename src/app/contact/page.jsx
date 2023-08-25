import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
// import Button from "@/components/button/Button";

export async function generateMetadata({ params }) {
    return {
        title: "Contact Us",
    };
}

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let's Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/contact.png"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input
                        type="text"
                        placeholder="name"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="mail"
                        className={styles.input}
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        className={styles.textArea}
                        placeholder="message"
                    ></textarea>
                    {/* <Button url="#" text="Send"></Button> */}
                </form>
            </div>
        </div>
    );
};

export default Contact;
