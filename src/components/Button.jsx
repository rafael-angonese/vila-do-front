const Button = (props) => {
  return (
    <button style={{ fontSize: "30px", padding: "30px", color: props.color }}>
      {props.children}
    </button>
  );
};

export default Button;
