import Image from "../../ui/Image";
import section1Image from "../../data/images/Home/sec1Image.png";
import SketchStar from "../../data/images/Home/Sketch-stars.png";
import sketchArrow from "../../data/images/Home/Sketch-arrow-spiral.png";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
function SectionOne() {
  return (
    <div className=" my-20  w-full flex flex-col gap-14  justify-center items-center  ">
      <div className=" lg:w-[796px] text-center flex flex-col items-center relative">
        <Image
          src={sketchArrow}
          alt="image"
          className="absolute -bottom-16  -left-40"
        />

        <h1 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-neutral  relative">
          Discover Furniture With <br /> High Quality Wood
          <Image
            src={SketchStar}
            alt="image"
            className="absolute -bottom-1 -right-5 lg:bottom-10 lg:right-0"
          />
        </h1>
        <p className="font-sans font-medium text-sm md:text-base lg:text-lg text-neutral-textParagraph  my-6  px-5 ">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non. Purus parturient viverra nunc,
          tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
        </p>
      </div>

      <div className="relative max-w-full z-10">
        <Input className="absolute -top-10 left-1/2 transform -translate-x-1/2 ">
          <Button>
            <Button.Text>Search</Button.Text>
          </Button>
        </Input>
        <Image src={section1Image} alt="image" />
      </div>
    </div>
  );
}

export default SectionOne;
