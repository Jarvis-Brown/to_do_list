/* DATABASE BACKEND CALLS */

"use server";

import { database } from "../firebase/firebase";

import { doc, setDoc } from "firebase/firestore";

// This is a next.js server action, which is an alpha feature, so
// use with caution.
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
export async function postProfile(data) {
    await setDoc(doc(database, "profile", crypto.randomUUID()));
}
function getAuthenticatedAppForUser():
    | { app: any }
    | PromiseLike<{ app: any }> {
    throw new Error("Function not implemented.");
}
