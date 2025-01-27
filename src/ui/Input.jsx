import searchIcon from "../data/images/Home/search-normal.png";
import Image from "../ui/Image";

function Input({
  width = "w-[80vw] max-w-[810px]",
  placeholder = "Search Property",
  icon = searchIcon,
  className = "",
  inputClassName = "",
  children,
  ...rest
}) {
  return (
    <div
      className={`${width} bg-neutral-background h-[84px] shadow-home-custom-input flex justify-between items-center px-5 ${className}`}
    >
      <div className=" w-3/4 flex gap-[18px]">
        <Image src={icon} alt={icon} />
        <input
          type="text"
          placeholder={placeholder}
          className={`flex-1 outline-none bg-transparent ${inputClassName}`}
          {...rest}
        />
      </div>

      {children}
    </div>
  );
}

export default Input;
