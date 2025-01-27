import appLogo from "../data/images/Header/logo.png";
import logoText from "../data/images/Header/Lalasia.png";
import { Link } from "react-router-dom";
import Image from "./Image";
function Logo() {
  return (
    <Link to="/" className="  flex gap-3 items-center">
      <Image src={appLogo} alt="Lalasia_Logo" />
      <Image src={logoText} alt="lalasia_text" />
    </Link>
  );
}

export default Logo;
