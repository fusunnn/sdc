import { doc, getDoc, Firestore } from "firebase/firestore";

export async function fetchMetadata(db: Firestore, documentName: string) {
  const docRef = doc(db, "metadata", documentName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return undefined;
  }
}
