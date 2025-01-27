import { createContext, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "../../ui/Image";
import "../../App.css"

const SliderContetxt = createContext();

function Slider({
  children,
  slidesPerView = 4,
  spaceBetween = 20,
  breakpoints,
}) {
  const [isBegining, setIsBegining] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBegining(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <SliderContetxt.Provider value={{ isBegining, isEnd }}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        breakpoints={breakpoints}
        onSlideChange={handleSlideChange}
        onInit={(swiper) => handleSlideChange(swiper)}
        className="mt-10 mb-10 flex"
      >
        {children}
      </Swiper>
    </SliderContetxt.Provider>
  );
}

function Slide({ children, className }) {
  return (
    <SwiperSlide className={`flex-shrink-0   ${className}`}>
      {children}
    </SwiperSlide>
  );
}

function MyNavigation({ prevIcon, nextIcon }) {
  const { isBegining, isEnd } = useContext(SliderContetxt);
  return (
    <>
      <div
        className={`custom-prev absolute left-10 top-1/2 transform -translate-y-1/2 bg-neutral-mixBackground rounded-full p-[10px] z-10 cursor-pointer ${
          isBegining
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-neutral-mixBackground"
        } `}
      >
        <Image src={prevIcon} alt="prevIcon" />
      </div>
      <div
        className={`custom-next absolute right-10 top-1/2 transform -translate-y-1/2 bg-neutral-mixBackground rounded-full p-[10px] z-10 cursor-pointer ${
          isEnd
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-neutral-mixBackground"
        } `}
      >
        <Image src={nextIcon} alt="nextIcon" />
      </div>
    </>
  );
}

Slider.Slide = Slide;
Slider.MyNavigation = MyNavigation;

export default Slider;
