import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase.config";

export const saveItem = async (data: any) => {
  await setDoc(doc(firestore, "foodItems", crypto.randomUUID()), data, {
    merge: true,
  });
};
