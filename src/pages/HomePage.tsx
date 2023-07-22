import DeliveryImage from "../assets/images/Delivery.png";
import { motion } from "framer-motion";
import HeroBackground from "../assets/images/heroBg.png";
import IcecreameImage from "../assets/images/i1.png";
import FruitImage from "../assets/images/f4.png";
import DrinkImage from "../assets/images/d7.png";
import FishKebab from "../assets/images/fi1.png";
import ItemsSlider from "../components/ItemsSlider";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import MenuContainer from "../components/MenuContainer";

const heroData = [
  {
    id: 1,
    imageUrl: IcecreameImage,
    title: "Icecream",
    description: "Chocolate & Vanilla",
    price: "5.0",
  },
  {
    id: 2,
    imageUrl: FruitImage,
    title: "Grapes",
    description: "Fresh & Juicy",
    price: "3.0",
  },
  {
    id: 3,
    imageUrl: DrinkImage,
    title: "Drinks",
    description: "Refreshing",
    price: "2.5",
  },
  {
    id: 4,
    imageUrl: FishKebab,
    title: "Icecream",
    description: "Grilled & Savory",
    price: "5.0",
  },
];

const HomePage = () => {
  // Get items and category
  const items = useSelector((state: RootState) => state.items.items);
  const fruits = items?.filter((item) => item.category === "fruits");
  const rices = items?.filter((item) => item.category === "rice");
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
        <div className="flex flex-col items-start  justify-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 bg-primary p-2 rounded-full">
            <p className="text-lg font-base text-white">Fastest Delivery</p>
            <div className="rounded-full w-9 h-9 bg-white">
              <img
                src={DeliveryImage}
                className="object-cover w-full h-full rounded-full"
                alt="Delivery Image"
              />
            </div>
          </div>
          <p className="text-5xl md:text-7xl xl:text-8xl font-black tracking-wide text-headingColor">
            Get Your Products in <span className="text-primary">Minutes.</span>
          </p>
          <p className="font-medium text-base xl:text-lg">
            Welcome to Fruitsify, your one-stop online destination for all
            things
            <span className="font-semibold"> fresh and delicious</span>! At
            Fruitsify, we take pride in delivering the finest selection of
            fruits, vegetables, meat, ice creams, and cold drinks right to your
            doorstep.
          </p>
          <motion.button
            whileTap={{
              scale: 0.95,
            }}
            className="bg-primary w-full xl:w-[500px] px-5 py-4 text-white font-semibold tracking-wide rounded-md hover:shadow-lg hover:bg-primaryHover"
          >
            Order Now
          </motion.button>
        </div>
        <div className="relative">
          <img
            className="w-full h-auto max-h-[550px] md:w-3/4 md:h-full absolute top-0 right-0"
            src={HeroBackground}
            alt="Hero Background"
          />
          <div className="w-full md:w-[90%] xl:w-3/4 h-full relative z-10 py-12 grid grid-cols-2 gap-y-14 gap-x-4 sm:gap-x-10 px-4 sm:px-10 md:px-0">
            {heroData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="group bg-gray-300/50 shadow-xl backdrop-blur-md flex flex-col gap-1 items-center cursor-pointer rounded-xl"
                >
                  <img
                    className="group-hover:scale-110 transition duration-200  w-40 h-40 object-contain drop-shadow-2xl  -mt-12"
                    src={item.imageUrl}
                    alt="Icecreame Image"
                  />
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600 text-sm text-center">
                    {item.description}
                  </p>
                  <p>
                    <span className="text-red-600">$</span> {item.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {fruits && <ItemsSlider items={fruits} title="Fresh Fruits" />}
      {rices && <ItemsSlider items={rices} title="Rice & Rice Products" />}
      <MenuContainer />
    </>
  );
};

export default HomePage;
