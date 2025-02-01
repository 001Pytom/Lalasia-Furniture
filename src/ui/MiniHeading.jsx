function MiniHeading({ smallText, BigText, className }) {
  return (
    <div className={`flex flex-col gap-[14px] ${className}  w-full `}>
      <h5 className="fonts-sans font-bold text-lg text-secondary">
        {smallText}
      </h5>
      <h2 className="fonts-sans font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[44px] lg:leading-[57px]  ">
        {BigText}
      </h2>
    </div>
  );
}

export default MiniHeading;
