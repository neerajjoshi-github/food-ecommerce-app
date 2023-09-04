import Lottie from "lottie-react";
import FlowerAnimation from "../../public/lotti-animation/white-flower.json";

const JoinContainer = () => {
  return (
    <div className="overflow-hidden mt-6 sky-gradient flex items-center justify-start relative h-screen w-full">
      <Lottie
        className="absolute -top-[430px] -left-[100px] w-[180%] h-[180%]"
        animationData={FlowerAnimation}
      />

      <div className="z-10 p-10 flex flex-col gap-4 w-full sm:w-3/4 md:w-1/2">
        <p className="text-5xl sm:text-5xl md:text-7xl  font-bold bg-text">
          Join Our Community
        </p>
        <p className=" text-xs md:text-base xl:text-lg text-zinc-200">
          We invite you to join our growing community of food enthusiasts who
          appreciate the joy of cooking and the goodness of nature's bounty.
          Together, we can create a world where the food on your plate is a
          celebration of flavor, sustainability, and well-being.
        </p>
      </div>
    </div>
  );
};

export default JoinContainer;
