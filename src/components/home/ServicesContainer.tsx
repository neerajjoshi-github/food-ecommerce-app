import Lottie from "lottie-react";
import FarmerAnimation from "../../../src/assets/lotti-animation/woman-framer.json";
import ServiceCard from "../../../src/components/reusables/ServiceCard";

const servicesData = [
  {
    id: 1,
    title: "Fresh Fruits Delivery",
    description:
      "Get a wide variety of fresh fruits delivered to your doorstep. From apples to mangoes, we have it all.",
    image: "/images/services/fresh-fruits.jpg",
    color: "bg-[#FFA1A1]",
    textColor: "#3DBE3D",
  },
  {
    id: 2,
    title: "Farm-Fresh Vegetables",
    description:
      "Discover the goodness of farm-fresh vegetables. We deliver everything from leafy greens to exotic veggies.",
    image: "/images/services/fresh-vegetables.jpg",
    color: "bg-[#A8E4A0]",
    textColor: "#FF5252",
  },
  {
    id: 3,
    title: "Quality Rice Varieties",
    description:
      "Choose from a range of high-quality rice varieties. Basmati, jasmine, and more, all at your convenience.",
    image: "/images/services/rice.jpg",
    color: "bg-[#A0C7FF]",
    textColor: "#FF9500",
  },
  {
    id: 4,
    title: "Dairy and Eggs",
    description:
      "Enjoy dairy products like milk, cheese, and yogurt, along with farm-fresh eggs.",
    image: "/images/services/eggs.jpg",
    color: "bg-[#FFD79E]",
    textColor: "#0077B6",
  },
  {
    id: 5,
    title: "Organic Products",
    description:
      "Go organic with our selection of pesticide-free fruits, vegetables, and grains.",
    image: "/images/services/organic-products.jpg",
    color: "bg-[#FFB2D3]",
    textColor: "#5F9E3D",
  },
  {
    id: 6,
    title: "Specialty Items",
    description:
      "Explore our specialty section for unique ingredients and gourmet products.",
    image: "/images/services/special-products.jpg",
    color: "bg-[#9FCC92]",
    textColor: "#E64980",
  },
];

const ServicesContainer = () => {
  return (
    <div
      id="services"
      className="container-padding grid grid-cols-1 xl:grid-cols-2 py-4 gap-4 bg-[#e3e4e7]"
    >
      <div className="py-6">
        <div className="flex flex-col sm:flex-row-reverse xl:flex-col items-center gap-4 relative">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-textColor font-black text-center">
            Delivering <span className="text-primary">Freshness</span> to Your{" "}
            <span className="text-primary">Doorstep</span>: Our{" "}
            <span className="text-primary">Food</span>, Your{" "}
            <span className="text-primary">Happiness</span>
          </h1>
          <Lottie className="max-sm:h-40" animationData={FarmerAnimation} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        {servicesData.map((data) => {
          return (
            <ServiceCard
              key={data.id}
              title={data.title}
              description={data.description}
              image={data.image}
              bgColor={data.color}
              textColor={data.textColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesContainer;
