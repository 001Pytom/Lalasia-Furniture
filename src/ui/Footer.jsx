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
    <div className=" flex flex-col lg:flex-row justify-between items-center py-5 border-t  border-neutral-border">
      <div>
        <Logo />
        <p className=" font-sans font-medium text-lg">
          Lalasia is digital agency that help you make better <br /> experience
          iaculis cras in.
        </p>
      </div>
      <div className="flex gap-20    ">
        {footerLinks.map((link) => (
          <div key={link.title} className="mt-10 ">
            <h4 className="font-sans font-bold text-xl ">{link.title}</h4>
            <ul className="mt-6 space-y-5">
              {link.titleList.map((item) => (
                <li key={item.label} className="font-sans font-medium text-lg">
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
