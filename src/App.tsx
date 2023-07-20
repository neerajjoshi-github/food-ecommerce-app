import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
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
