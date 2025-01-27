import { servicesList } from "../utils/helpers";

function ServiceBox({
  className,
  data,
  wrapperClassName = "w-full flex justify-between items-center gap-10",
  renderContent,
}) {
  return (
    <div className={wrapperClassName}>
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col gap-[26px] ${className} p-8  `}
        >
          {renderContent(item)}
        </div>
      ))}
    </div>
  );
}

function Image({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
}

function Text({ title, description }) {
  return (
    <div className="flex flex-col gap-[26px]">
      <h3 className="fonts-sans font-bold text-2xl ">{title}</h3>
      <p className="fonts-sans font-medium text-lg text-neutral-textParagraph">
        {description}
      </p>
    </div>
  );
}

function ServiceNumber({ children }) {
  return <span>{children}</span>;
}

function Icon({ children }) {
  return <span>{children}</span>;
}
ServiceBox.Image = Image;
ServiceBox.Icon = Icon;
ServiceBox.Text = Text;
ServiceBox.ServiceNumber = ServiceNumber;

export default ServiceBox;
