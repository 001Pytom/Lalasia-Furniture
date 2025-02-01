import SectionFive from "../features/HomePage/SectionFive";
import SectionFour from "../features/HomePage/SectionFour";
import SectionOne from "../features/HomePage/SectionOne";
import SectionTwo from "../features/HomePage/SectionTwo";
import MiniHeading from "../ui/MiniHeading";
import Contact from "../features/HomePage/Contact";
import SectionSix from "../features/HomePage/SectionSix";
import Image from "../ui/Image";
import smArrowRight from "../data/images/Home/arrow-right.png";
import smArrowLeft from "../data/images/Home/arrow-left.png";
import { projects } from "../utils/helpers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

// import Slider from "../features/HomePage/Slider";

function HomePage() {
  const [isBegining, setIsBegining] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBegining(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <>
      <SectionOne />

      <SectionTwo />

      <div>
        <div className="flex flex-col gap-10 items-center">
          <MiniHeading
            smallText="Product"
            BigText="Our popular product"
            className="items-center"
          />
          <p className=" font-medium text-lg text-neutral-textParagraph ">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim <br /> placerat nisi, adipiscing mauris non purus
            parturient.
          </p>
        </div>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.5 },
          }}
          onSlideChange={handleSlideChange}
          onInit={(swiper) => handleSlideChange(swiper)}
          className="flex mt-10 mb-20 relative"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className=" space-y-[26px]  flex-shrink-0 w-[394px]"
            >
              <Image src={project.image} alt="product1" />{" "}
              <div className="space-y-[14px]">
                <h5 className="font-bold text-lg text-neutral-textParagraph">
                  {project.title}
                </h5>
                <div className="space-y-[6px]">
                  <h3 className="font-bold text-[26px] tracking-[1%] text-neutral">
                    {project.Heading}
                  </h3>
                  <p className="text-neutral-textParagraph font-medium text-lg">
                    {project.description}
                  </p>
                </div>
                <h3 className="text-neutral text-2xl font-bold">
                  {project.price}
                </h3>
              </div>
            </SwiperSlide>
          ))}
          <div
            className={`custom-prev absolute left-10 top-1/2 transform -translate-y-1/2 bg-neutral-mixBackground rounded-full p-[10px] z-10 cursor-pointer ${
              isBegining
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-neutral-mixBackground"
            } `}
          >
            <Image src={smArrowLeft} alt="smArrowLeft" />
          </div>
          <div
            className={`custom-next absolute right-10 top-1/2 transform -translate-y-1/2 bg-neutral-mixBackground rounded-full p-[10px] z-10 cursor-pointer ${
              isEnd
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-neutral-mixBackground"
            } `}
          >
            <Image src={smArrowRight} alt="smArrowRight" />
          </div>
        </Swiper>
      </div>

      <SectionFour />

      <SectionFive />

      {/* <SectionSix /> */}

      <Contact
        text="Join with me to get special discount"
        buttonText="Learn More"
      />
    </>
  );
}

export default HomePage;
