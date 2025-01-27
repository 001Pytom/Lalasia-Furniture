import Image from "./Image";

function Button({ children, size = "lg", variant = "primary" }) {
  const sizeClasses = {
    sm: " p-[10px] text-center text-sm font-medium",
    md: "p-[21px]",
    lg: "px-[30px] py-[15px] text-center text-lg font-bold",
  };

  const variantClasses = {
    primary: "bg-primary text-neutral-background",
    secondary:
      "bg-neutral-background shadow-home-custom-input text-neutral-background",
  };

  const baseClass =
    " text-sans inline-flex items-center justify-center gap-[10px] ";
  return (
    <button
      className={`${baseClass} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}

function Icon({ src, alt }) {
  return <Image src={src} alt={alt} />;
}

function Text({ children }) {
  return <span>{children}</span>;
}

Button.Icon = Icon;
Button.Text = Text;

export default Button;
