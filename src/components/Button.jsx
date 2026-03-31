const Button = ({
  children,
  href,
  className = "",
  onClick = () => {},
  type = "button",
  tipeButton = "",
}) => {
  const basedStyle = "btn";
  const componentStyle = `${basedStyle} ${className}`;

  const aos =
    tipeButton != "menu"
      ? {
          "data-aos": "zoom-in",
          "data-aos-delay": "600",
          "data-aos-duration": "1000",
        }
      : {};

  // jika dia href
  if (href) {
    return (
      <a
        href={href}
        className={componentStyle}
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={componentStyle} onClick={onClick} {...aos}>
      {children}
    </button>
  );
};

export default Button;
