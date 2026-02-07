const ColorBlur = ({ className = "" }) => {
    const classDefault = 'color-blur' ;
    // const classDefault = 'color-blur';
    const classComponent = `${classDefault} ${className}`;
  return <div className={classComponent}>
    {className}
  </div>;
};

export default ColorBlur;
