//import Image from "next/image";
import Link from "next/link";
import styles from "@/_styles/home.module.css";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.main_container}>
                    <div>
                        <h1 className={styles.header}>Title of App</h1>
                        <div className={styles.btn_container}>
                            <Link href="/login">
                                <button>Login</button>
                            </Link>
                            <Link href="#">
                                <button>Create Account</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
