import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "Product",
    titleList: [
      { to: "/", label: "New Arrivals" },
      { to: "/", label: "Best Selling" },
      { to: "/", label: "Home Decor " },
      { to: "/", label: "Kitchen Set" },
    ],
  },
  {
    title: "Services",
    titleList: [
      { to: "/", label: "Catalog" },
      { to: "/", label: "Blog" },
      { to: "/", label: "FaQ" },
      { to: "/", label: "Pricing" },
    ],
  },
  {
    title: "Follow Us ",
    titleList: [
      { to: "/", label: "Facebook" },
      { to: "/", label: "Instagram" },
      { to: "/", label: "Twitter" },
    ],
  },
];

function Footer() {
  return (
    <div className=" flex flex-col sm:flex-row justify-between sm:items-center gap-4 md:gap-0 py-3 md:py-5 border-t  border-neutral-border">
      <div>
        <Logo />
        <p className=" font-sans font-medium text-sm md:text-base lg:text-lg mt-1 md:mt-0 ">
          Lalasia is digital agency that help you make better
          <br className="hidden sm:block" /> experience iaculis cras in.
        </p>
      </div>
      <div className="flex gap-10 sm:gap-14 xl:gap-20  justify-between sm:justify-start ">
        {footerLinks.map((link) => (
          <div key={link.title} className="mt-10 ">
            <h4 className="font-sans font-bold text-base lg:text-lg xl:text-xl  ">
              {link.title}
            </h4>
            <ul className="mt-6 space-y-3 md:space-y-5">
              {link.titleList.map((item) => (
                <li
                  key={item.label}
                  className="font-sans font-medium text-sm md:text-base lg:text-lg"
                >
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
