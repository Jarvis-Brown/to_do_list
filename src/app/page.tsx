//import Image from "next/image";

// HOME PAGE //

import Link from "next/link";
import styles from "@/_styles/home.module.css";
import { HomeLayout } from "@/_component";

export default function Home() {
    return (
        <>
            <HomeLayout is_backButton={false}>
                <div className={styles.btn_container}>
                    <Link href="/login">
                        <button>Login</button>
                    </Link>
                    <Link href="/account">
                        <button>Create Account</button>
                    </Link>
                </div>
            </HomeLayout>
        </>
    );
}
