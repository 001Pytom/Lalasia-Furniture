import { servicesList } from "../../utils/helpers";
import ServiceBox from "../../ui/ServiceBox";
import MiniHeading from "../../ui/MiniHeading";
function SectionTwo() {
  return (
    <div className="my-20 flex flex-col w-full justify-center gap-20 items-center py-10">
      <div className=" w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-0">
        <MiniHeading
          smallText="Benefits"
          BigText="Benefits when using our services"
          className="max-w-[427px]"
        />
        <p className="text-neutral-textParagraph  max-w-[505px] font-sans text-sm sm:text-base  md:text-lg font-medium">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>

      <ServiceBox
        data={servicesList}
        className="bg-neutral-background shadow-home-service-box max-w-96 md:max-w-full"
        renderContent={(service) => (
          <>
            <ServiceBox.Image src={service.icon} alt={service.icon} />
            <ServiceBox.Text
              title={service.title}
              description={service.description}
            />
          </>
        )}
      />
    </div>
  );
}

export default SectionTwo;
