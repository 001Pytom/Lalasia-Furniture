import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Applayout() {
  return (
    <div className="lg:px-24  pb-8 font-sans">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Applayout;
