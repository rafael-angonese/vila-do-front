const Button = (props) => {

  console.log(props)
  return (
    <button style={{ fontSize: props.size, padding: "30px", color: props.color }}>
      {props.children} {props.size}
    </button>
  );
};

export default Button;
