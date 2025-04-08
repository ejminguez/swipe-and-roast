import { pb } from "@/lib/pocketbaseClient";

export const authLogin = async (email: string, password: string) => {
    const authData = await pb.collection('users').authWithPassword(email, password);
}