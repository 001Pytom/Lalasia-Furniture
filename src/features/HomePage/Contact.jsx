import Button from "../../ui/Button";
import rightArrow from "../../data/images/Home/right-arrow.png";

function Contact({ text, buttonText }) {
  return (
    <div className="py-10 my-10 flex justify-between items-center">
      <h2 className="font-sans font-bold text-[44px] leading -[57px]">
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
