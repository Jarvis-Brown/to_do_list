import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/firebase";

export async function updateProfileImage(id: string, image: File) {
    // this will be the images id for firebase
    try {
        if (!id) throw new Error("No property ID has been provided.");

        if (!image || !image?.name)
            throw new Error("A valid image has not been provided.");

        const upload = await uploadImage(id, image);
        return upload;
    } catch (error) {
        console.error("Error processing request:", error);
        throw new Error("Error processing request");
    }
}

async function uploadImage(id: string, image: File) {
    try {
        const file_path = `image/${id}/${image.name}`;
        const new_image_ref = ref(storage, file_path);
        await uploadBytesResumable(new_image_ref, image);

        return await getDownloadURL(new_image_ref);
    } catch (e) {
        throw new Error("Could not upload image");
    }
}
