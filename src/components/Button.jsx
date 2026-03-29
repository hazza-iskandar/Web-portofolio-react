const Button = ({
  children,
  href,
  className = "",
  onClick = () => {},
  aos,
}) => {
  const basedStyle = "btn";
  const componentStyle = `${basedStyle} ${className}`;

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
    <button
      className={componentStyle}
      onClick={onClick}
      data-aos="zoom-in"
      data-aos-delay="600"
      data-aos-duration="1000"
    >
      {children}
    </button>
  );
};

export default Button;
