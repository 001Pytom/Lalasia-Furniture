import Button from "../../ui/Button";
import Image from "../../ui/Image";
import MiniHeading from "../../ui/MiniHeading";
import craftedImg1 from "../../data/images/Home/craftedImg1.png";
import craftedImg2 from "../../data/images/Home/craftedImg2.png";
import { numberCounts } from "../../utils/helpers";

function SectionFour() {
  return (
    <div className="py-10 my-20 flex justify-between items-end  w-full gap-10">
      <div className="space-y-10">
        <MiniHeading
          smallText="Our Product"
          BigText="Crafted by talented and
high quality material"
          className="max-w-[511px] "
        />
        <p className="text-neutral-textParagraph max-w-[580px]  font-sans text-lg font-medium">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient. morbi
          fermentum, vivamus et accumsan dui tincidunt pulvinar
        </p>
        <Button>Learn More</Button>
        <Image src={craftedImg1} alt="craftedImg1" />
      </div>

      <div className="flex flex-col gap-10 items-end">
        <div className="flex gap-10 ">
          {numberCounts.map((count, index) => (
            <div key={index}>
              <h1 className="font-sans font-bold text-[44px] text-neutral">
                {count.heading}
              </h1>
              <p className="font-sans font-medium text-lg text-neutral-textParagraph">
                {count.paragraph}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Image src={craftedImg2} alt="craftedImg2" />
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
