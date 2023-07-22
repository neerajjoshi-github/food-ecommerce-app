import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { getItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "./store/slices/itemsSlice";
import { Item } from "./store/slices/itemsSlice";

const App = () => {
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
      <main className="mt-24 px-4 sm:px-6 md:px-8 xl:px-12 w-full">
        <Outlet />
      </main>
    </div>
  );
};
export default App;
