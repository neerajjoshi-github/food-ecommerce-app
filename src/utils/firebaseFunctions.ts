import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase.config";

export const saveItem = async (data: any) => {
  await setDoc(doc(firestore, "foodItems", crypto.randomUUID()), data, {
    merge: true,
  });
};

export const getItems = async () => {
  const items = await getDocs(query(collection(firestore, "foodItems")));
  return items.docs.map((doc) => doc.data());
};
