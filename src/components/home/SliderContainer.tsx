import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ItemsSlider from "../reusables/ItemsSlider";

const SliderContainer = () => {
  const items = useSelector((state: RootState) => state.items.items);
  const fruits = items?.filter((item) => item.category === "fruits");
  const rices = items?.filter((item) => item.category === "rice");
  return (
    <div id="slider-container" className="container-padding">
      {fruits && fruits.length > 0 && (
        <ItemsSlider items={fruits} title="Fresh Fruits" />
      )}
      {rices && rices?.length > 0 && (
        <ItemsSlider items={rices} title="Rice & Rice Products" />
      )}
    </div>
  );
};

export default SliderContainer;
