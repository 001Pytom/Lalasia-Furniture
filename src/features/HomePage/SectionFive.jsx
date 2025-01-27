import MiniHeading from "../../ui/MiniHeading";
import qouteIcon from "../../data/images/Home/quote-up.png";
import rateIcon from "../../data/images/Home/star.png";
import { customerTestimonials } from "../../utils/helpers";

function SectionFive() {
  return (
    <div className="my-10 py-10 flex flex-col items-center  gap-[14px]">
      <div className="text-center space-y-4">
        <MiniHeading smallText="Testimonials" BigText="What our customer say" />
        <p className="text-neutral-textParagraph max-w-[656px]  font-sans text-lg font-medium  text-center">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      {/* Testimonials */}
      <div>
        <div className="grid grid-cols-3 gap-10 mt-10">
          {customerTestimonials.map((testimony, index) => (
            <div
              key={index}
              className="p-6 border border-neutral-border flex flex-col gap-5"
            >
              <div>
                <img src={qouteIcon} alt="qouteIcon" />
              </div>
              <p className="text-neutral-textParagraph max-w-[656px]  font-sans text-lg font-medium  ">
                {testimony.testimony}
              </p>

              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <img src={testimony.icon} alt="icon" />
                  <p className="font-bold text-neutral text-[20px]">
                    {testimony.userName}
                  </p>
                </div>
                <div className="flex items-center  gap-2">
                  <img src={rateIcon} alt="rateIcon" />
                  <p className="font-bold text-neutral text-[20px]">
                    {testimony.rateNum}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
