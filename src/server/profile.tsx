/* DATABASE BACKEND CALLS */

"use server";

import { database } from "../firebase/firebase";

import {
    doc,
    setDoc,
    updateDoc,
    getDocs,
    query,
    where,
    collection,
} from "firebase/firestore";

import { profileModel } from "@/models";

// This is a next.js server action, which is an alpha feature, so
// use with caution.
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
export async function createProfile(
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

export async function updateProfile(profile: profileModel) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!profile?.id) {
            }
            const profileDoc = doc(collection(database, "test"), profile.id);
            await updateDoc(profileDoc, { ...profile });
            resolve(true);
        } catch (e) {
            console.error(e);
            resolve(false);
        }
    });
}

export const get_login = async (login: profileModel): Promise<profileModel> => {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = collection(database, "test");
            const _query = query(
                doc,
                where("username", "==", login.username),
                where("password", "==", login.password)
            );
            const querySnapshot = await getDocs(_query);
            let items = {} as profileModel;
            querySnapshot.forEach((item) => {
                items = item.data() as profileModel;
            });
            resolve(items);
        } catch (e) {
            console.error(e);
        }
    });
};
