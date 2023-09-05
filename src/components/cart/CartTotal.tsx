import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Button from "../reusables/Button";

const CartTotal = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.cartTotal);
  const numOfCartItems = useSelector(
    (state: RootState) => state.cart.numOfCartItems
  );
  return (
    <div className="absolute bottom-0 w-full bg-[#e8eaed] p-2 border-white border-t-4">
      <h4 className="text-headingColor border-primary border-b py-2 text-sm">
        PRICE DETAILS
      </h4>
      <div className="flex items-center justify-between my-1 text-sm">
        <p>
          Price (<span>{numOfCartItems}</span> item)
        </p>
        <p>
          $ <span>{totalPrice}</span>
        </p>
      </div>
      <div className="my-1 flex items-center justify-between border-b  border-primary text-sm">
        <p>Delivery Charges</p>
        <p className="text-green-500">Free</p>
      </div>
      <div className="flex items-center justify-between my-2">
        <p className="text-lg font-semibold">Total</p>
        <p className="text-lg font-semibold">$ {totalPrice}</p>
      </div>
      <Button disabled className="w-full">
        Proceed
      </Button>
    </div>
  );
};

export default CartTotal;