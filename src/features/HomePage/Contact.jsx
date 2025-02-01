import Button from "../../ui/Button";
import rightArrow from "../../data/images/Home/right-arrow.png";

function Contact({ text, buttonText }) {
  return (
    <div className="py-10 my-10 flex  flex-col gap-5 md:gap-0 sm:flex-row justify-between items-center">
      <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-5xl ">
        {text}
      </h2>
      <Button>
        <Button.Text>{buttonText}</Button.Text>
        <Button.Icon src={rightArrow} alt="right Arrow" />
      </Button>
    </div>
  );
}

export default Contact;
