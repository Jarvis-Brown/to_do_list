//import Image from "next/image";
import Link from "next/link";
import styles from "@/_styles/home.module.css";
import { HomeLayout } from "@/_component";

export default function Home() {
    return (
        <>
            <HomeLayout>
                <div className={styles.btn_container}>
                    <Link href="/login">
                        <button>Login</button>
                    </Link>
                    <Link href="#">
                        <button>Create Account</button>
                    </Link>
                </div>
            </HomeLayout>
        </>
    );
}
