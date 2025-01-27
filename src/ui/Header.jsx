import cartIcon from "../data/images/Header/bag-2.png";
import userProfile from "../data/images/Header/user.png";
import Image from "./Image";
import { NavLink } from "react-router-dom";
import { navlinks } from "../utils/helpers";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex justify-between  items-center sticky top-0 py-8 border-b border-neutral-border  z-50">
      <Logo />

      <nav className="hidden  lg:flex gap-14 items-center  ">
        {navlinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `font-sans font-medium text-lg ${
                isActive
                  ? "text-primary  underline underline-offset-[44px]  decoration-[4px]    "
                  : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex gap-3 items-center">
        <Image src={cartIcon} alt="cart-icon" />
        <Image src={userProfile} alt="user-profile" />
      </div>
    </header>
  );
}

export default Header;
