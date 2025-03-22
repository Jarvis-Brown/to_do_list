//import Image from "next/image";

//LOGIN and ACCOUNT PAGE //

import Link from "next/link";
import styles from "@/_styles/login_account.module.css";
// We would need the HomeLayout for the forgotten the component we forgot to change
import { LoginLayout } from "@/_component";
// Solution
// import { HomeLayout } from "@/_component";

export default function Home() {
    return (
        <>
            {/* We forgot to change component to the login layout */}
            <LoginLayout is_backButton={false}>
                <div className={styles.btn_container}>
                    <Link href="/login">
                        <button>Login</button>
                    </Link>
                    <Link href="/account">
                        <button>Create Account</button>
                    </Link>
                </div>
            </LoginLayout>
        </>
    );
}
