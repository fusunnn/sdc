import { getStorage, ref } from "firebase/storage";
import { app } from "./firebaseConfig";

export const storage = getStorage(app);
