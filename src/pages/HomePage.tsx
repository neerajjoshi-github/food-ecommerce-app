import MenuContainer from "../components/home/MenuContainer";
import ServicesContainer from "../components/home/ServicesContainer";
import AboutContainer from "../components/home/AboutContainer";
import JoinContainer from "../components/home/JoinContainer";
import HeroContainer from "../components/home/HeroContainer";
import SliderContainer from "../components/home/SliderContainer";

const HomePage = () => {
  return (
    <>
      <HeroContainer />
      <SliderContainer />
      <MenuContainer />
      <ServicesContainer />
      <AboutContainer />
      <JoinContainer />
    </>
  );
};

export default HomePage;
