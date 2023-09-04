import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../../firebase.config";
import { Item } from "../store/slices/itemsSlice";

export const saveItem = async (data: any) => {
  await setDoc(doc(firestore, "foodItems", crypto.randomUUID()), data, {
    merge: true,
  });
};

export const getItems = async () => {
  const items = await getDocs(query(collection(firestore, "foodItems")));
  return items.docs.map((doc) => {
    return { databaseId: doc.id, ...doc.data() };
  });
};

export const getItemWithId = async (id: string) => {
  const docRef = doc(firestore, "foodItems", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const item = docSnap.data() as Item;
    const itemsRef = collection(firestore, "foodItems");
    const q = query(itemsRef, where("category", "==", item.category));
    const querySnapshot = await getDocs(q);
    const similarItems = querySnapshot.docs.map((doc) => {
      return { databaseId: doc.id, ...doc.data() } as Item;
    });

    return {
      item,
      similarItems,
    };
  } else {
    return {
      item: null,
      simlarItems: null,
    };
  }
};
