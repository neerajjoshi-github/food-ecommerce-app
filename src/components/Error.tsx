import { useRouteError } from "react-router-dom";
import Lotti from "lottie-react";
import NotFound from "../assets/lotti-animation/404.json";
import Button from "./reusables/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <div
      id="error-page"
      className="w-full h-screen p-2 flex flex-col items-center justify-center overflow-hidden"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-headingColor">
        Oops! Something went wrong!
      </h1>
      <p className="text-xl text-textColor font-semibold mt-2">
        {error.statusText || error.message}
      </p>
      <Lotti className="h-[70vh] w-[70vh]" animationData={NotFound} />
      <Button onClick={() => navigate("/", { replace: true })} size="lg">
        Back to Home
      </Button>
    </div>
  );
};

export default Error;
