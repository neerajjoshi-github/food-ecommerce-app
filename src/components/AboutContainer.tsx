const AboutContainer = () => {
  return (
    <div
      id="about"
      className="container-padding flex flex-col gap-8 w-full pt-6"
    >
      <div className="flex w-full items-center gap-2 xs:gap-4 md:gap-10">
        <div className="h-[40vh] w-1/2">
          <img
            className="object-cover w-full h-full rounded-md"
            src="/quality.jpg"
            alt=""
          />
        </div>
        <div className="md:px-4 w-1/2">
          <div className="col-span-3 text-center flex flex-col gap-2">
            <p className="text-base sm:text-2xl md:text-4xl text-textColor font-semibold">
              About Our Passion for Quality
            </p>
            <p className="text-xxs sm:text-xs md:text-base">
              At <span className="font-semibold">Fruitsify</span>, we're not
              just passionate about food; we're passionate about delivering the
              highest quality, freshest, and most delicious products to your
              table. Our journey began with a simple goal - to provide families
              with access to wholesome, farm-fresh produce that's as good for
              you as it is for the planet.
            </p>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 xl:grid-cols-3 gap-1 sm:gap-4 md:gap-6">
        <div className="text-center mt-0">
          <p className="text-base sm:text-2xl md:text-4xl text-textColor font-semibold">
            Our Roots
          </p>
          <p className="text-xxs sm:text-xs md:text-base mt-2">
            Founded in 2023, our roots run deep in the fertile soils of India.
            We believe in sustainable farming practices that nurture the land
            and promote biodiversity. Our commitment to ethical sourcing and
            local partnerships ensures that you receive the very best nature has
            to offer, right at your doorstep.
          </p>
        </div>
        <div className="text-center ">
          <p className="text-base sm:text-2xl md:text-4xl text-textColor font-semibold">
            Farm to Your Table
          </p>
          <p className="text-xxs sm:text-xs md:text-base mt-2">
            We take pride in being a part of the farm-to-table movement. It's
            not just a trend; it's a commitment to quality and sustainability.
            We work closely with local farmers who share our passion for growing
            produce with care and love. Every fruit, vegetable, and grain is
            handpicked at the peak of ripeness, ensuring that you enjoy the full
            flavors and nutritional benefits.
          </p>
        </div>
        <div className="text-center mt-0">
          <p className="text-base sm:text-2xl md:text-4xl text-textColor font-semibold">
            Quality Assurance
          </p>
          <p className="text-xxs sm:text-xs md:text-base mt-2">
            Our team of experts rigorously inspects each product before it
            reaches your kitchen. We believe that quality should never be
            compromised, and we stand behind every item we offer. From farm to
            packaging to delivery, we maintain the highest standards of hygiene
            and freshness.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 xs:gap-4 md:gap-10 items-center">
        <img
          src="/about-page.jpg"
          alt=""
          className="h-[40vh] w-full rounded-md object-cover"
        />
        <img
          src="farmToTable.jpg"
          alt=""
          className="h-[40vh] w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default AboutContainer;
