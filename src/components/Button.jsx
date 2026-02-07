const Button = ({ children, href, className = "" }) => {
    const basedStyle = "btn";
    const componentStyle = `${basedStyle} ${className}`

  // jika dia href
  if (href) {
    return <a href={href} className={componentStyle}>{children}</a>;
  }

  return <button className={componentStyle} >{children}</button>;
};

export default Button;
