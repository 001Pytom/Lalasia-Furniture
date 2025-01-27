import Image from "./Image";


function ArticleList({ data }) {
  return (
    <div className="flex flex-col gap-10">
      {data.map((item) => (
        <div className="flex gap-4 items-center" key={item.title}>
          <div>
            <Image src={item.image} alt={item.image} />
          </div>
          <div className="space-y-2 max-w-[329px]">
            <p className="font-medium text-lg text-neutral-textParagraph ">
              {item.collection}
            </p>
            <h3 className="font-bold text-neutral text-[24px]  font-sans">
              {item.title}
            </h3>
            <p className=" font-medium text-lg text-neutral-textParagraph truncate">
              {item.description}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image src={item.authorIcon} />{" "}
                <h6 className="font-bold text-sm">{item.author}</h6>
              </div>
              <p className="font-medium text-sm text-neutral-textParagraph ">
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
