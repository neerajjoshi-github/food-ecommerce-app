import "react-credit-cards-2/dist/es/styles-compiled.css";
import ShippingDetails from "./ShippingDetails";
import CardDeatils from "./CardDeatils";
import Button from "../reusables/Button";
import { BsArrowRight } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutFormSchema, checkoutFormSchema } from "../../utils/zodSchemas";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type CheckoutFormProps = {
  onSubmitHandler: (data: CheckoutFormSchema) => void;
  totalPrice: number;
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  onSubmitHandler,
  totalPrice,
}) => {
  const currentUser = useSelector((state: RootState) => state.user.user);

  const defaultShipingDetails = {
    firstName: currentUser?.displayName?.split(" ")[0] || "Nichole L",
    lastName: currentUser?.displayName?.split(" ")[1] || "Ritchie",
    address:
      "Street: 2589 Cambridge Court City, State, Zip: Rogers, Arkansas(AR), 72756",
    phone: currentUser?.phoneNumber || "479-531-8911",
    email: currentUser?.email || "cielo1981@gmail.com",
  };

  const defaultCardDetails = {
    number: "5555 4444 3333 1111",
    expiry: "04/28",
    cvc: "737",
    name: currentUser?.displayName || "Nichole",
  };
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<CheckoutFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      ...defaultShipingDetails,
      ...defaultCardDetails,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="sticky top-32 left-0"
    >
      <CardDeatils
        control={control}
        errors={errors}
        defaultValues={defaultCardDetails}
      />
      <ShippingDetails control={control} errors={errors} />
      <Button
        scale={0.98}
        className="w-full mt-6 font-semibold justify-around text-lg"
        disabled={isSubmitting}
      >
        <span>$ {totalPrice}</span>
        <span className="flex gap-4 items-center">
          Checkout <BsArrowRight size={24} />
        </span>
      </Button>
    </form>
  );
};

export default CheckoutForm;
