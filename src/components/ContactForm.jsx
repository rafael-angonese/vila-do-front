import React from "react";

class ConctactForm extends React.Component {
  render() {
    const inputStyle = {
      width: "100%",
      padding: "12px 20px",
      marginBottom: "20px",
    };
    const buttonStyle = {
      width: "80px",
      padding: "5px 20px",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "#ddd255",
      border: "1px solid #cccccc",
    };

    return (
      <>
        <div style={{ display: "flex-column" }}>
          <h1 style={{ textAlign: "center" }}>Olá, mundo!</h1>
          <form style={{ width: "400px", margin: "0 auto" }}>
            <label>Nome</label>
            <input style={inputStyle} />
            <label>Email</label>
            <input style={inputStyle} />
            <label>Telefone</label>
            <input style={inputStyle} />
            <button style={buttonStyle}>Enviar</button>
          </form>
        </div>
      </>
    );
  }
}

export default ConctactForm;
