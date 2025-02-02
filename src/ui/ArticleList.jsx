import Image from "./Image";

function ArticleList({ data }) {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      {data.map((item) => (
        <div
          className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start w-full"
          key={item.title}
        >
          <div className="w-full md:w-auto">
            <Image
              src={item.image}
              alt={item.image}
              className="hidden md:block w-full md:w-auto"
            />
          </div>

          <div className="w-full md:max-w-[329px] space-y-2 text-center md:text-left">
            <p className="font-medium text-sm md:text-lg text-neutral-textParagraph">
              {item.collection}
            </p>
            <h3 className="font-bold text-neutral text-lg md:text-[24px] font-sans">
              {item.title}
            </h3>
            <p className="font-medium text-sm md:text-lg text-neutral-textParagraph truncate">
              {item.description}
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2 md:gap-0">
              <div className="flex items-center gap-2">
                <Image src={item.authorIcon} className="w-6 h-6" />
                <h6 className="font-bold text-sm">{item.author}</h6>
              </div>
              <p className="font-medium text-sm text-neutral-textParagraph">
                {item.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
