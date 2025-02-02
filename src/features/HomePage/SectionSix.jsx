import MiniHeading from "../../ui/MiniHeading";
import articleOne from "../../data/images/Home/article1.png";
import Image from "../../ui/Image";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import leftArrow from "../../data/images/Home/left-arrow.png";
import rightArrow from "../../data/images/Home/right-arrow.png";
import ArticleList from "../../ui/ArticleList";
import { articlesList } from "../../utils/helpers";

function SectionSix() {
  return (
    <div className="my-10 py-10 flex flex-col lg:flex-row items-center  lg:items-end gap-6 md:gap-10 w-full  justify-between">
      <div className="space-y-6 md:space-y-8 ">
        <MiniHeading
          smallText="Articles"
          BigText="The best furniture comes from Lalasia"
          className="max-w-[544px]"
        />
        <p className=" font-medium text-lg text-neutral-textParagraph ">
          Pellentesque etiam blandit in tincidunt at donec.
        </p>

        <div className=" w-full relative ">
          <Image src={articleOne} alt="articleOne" className="w-full" />
          <div className="max-w-[530px] space-y-[14px]  absolute bottom-5 left-5 right-5 md:bottom-10 md:left-10 p-4 md:p-6 ">
            <p className="text-neutral-background font-medium text-sm md:text-lg opacity-[70%]">
              Tips and Trick
            </p>
            <div className="space-y-2">
              <h3 className="font-bold text-neutral-background text-lg md:text-[26px] tracking-[1%] font-sans">
                Create Cozy Dinning Room Vibes
              </h3>
              <p className="truncate font-medium text-sm md:text-lg text-neutral-background opacity-[70%]">
                Decorating with neutrals brings balance to the dining room. With
                eclectic decoration on the sides, Caruso Dining Table and
                Cyrillo Dining Chairs elevate the tonal base of the room. The
                modern furniture set gives personality to any space in all types
                of architecture. The wide volume enables everyone to sit back
                and relax, be it in the dining room, conference, or office.
              </p>
            </div>
            <div>
              <Link
                to="/articles"
                className="text-sm md:text-lg text-neutral-background "
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="absolute -bottom-8 md:-bottom-12  right-0 flex">
            <Button size="md" variant="secondary">
              <Button.Icon src={leftArrow} alt="leftArrow" />
            </Button>
            <Button size="md">
              <Button.Icon src={rightArrow} alt="rightArrow" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg">
        <ArticleList data={articlesList} />
      </div>
    </div>
  );
}

export default SectionSix;
