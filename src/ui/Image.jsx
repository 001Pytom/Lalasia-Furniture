// import { useState } from "react";

const Image = ({ src, alt, className, ...props }) => {
  //   const [loaded, setLoaded] = useState(false);
  return (
    <div>
      <img
        //   src={loaded ? src : "../data/images/Header/logo.png"}
        src={src}
        alt={alt}
        className={`max-w-full transition-opacity duration-300 opacity-100 ${className}`}
        //   onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
};
// Image.propTypes = { src: "string", alt: "string", className: "string" };

export default Image;
