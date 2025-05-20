/* DATABASE BACKEND CALLS */

"use server";

import { database } from "../firebase/firebase";

import { doc, setDoc } from "firebase/firestore";

// This is a next.js server action, which is an alpha feature, so
// use with caution.
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
export async function postProfile(
    first_name: string, // this is typescript, we are telling it what type of argument it is by stating its a string (typescript may underline things if you don't tell t what type it is)
    last_name: string,
    email: string,
    username: string,
    password: string
) {
    const id = crypto.randomUUID();
    await setDoc(doc(database, "test", id), {
        first_name, // this is the same as first_name: "mario", its shorthand to plug in the value if the key or variable have the same name
        last_name,
        email,
        username,
        password,
        id,
    });
}

function getAuthenticatedAppForUser():
    | { app: any }
    | PromiseLike<{ app: any }> {
    throw new Error("Function not implemented.");
}
