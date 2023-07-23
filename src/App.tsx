import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { getItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "./store/slices/itemsSlice";
import { Item } from "./store/slices/itemsSlice";
import Cart from "./components/Cart";
import { RootState } from "./store/store";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);
  const dispath = useDispatch();
  const fetchItems = async () => {
    const data = await getItems();
    dispath(setItems(data as Item[]));
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="w-full h-auto flex flex-col">
      <Header />
      <main className="mt-24 md:mt-28 px-4 sm:px-6 md:px-8 xl:px-12 w-full">
        <Outlet />
      </main>
      <AnimatePresence>{isCartOpen && <Cart />}</AnimatePresence>
    </div>
  );
};
export default App;
