import { Component } from "react";

const styles = {
  detallesCarro: {
    background: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  producto: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  button: {
    backgroundColor: "#0A283E",
    color: "#fff",
    padding: "15px 20px ",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "inline",
    justifycontent: "right",
    marginLeft: 25,
    marginBottom: 10
  },
  green: {
    backgroundColor: "green",
    color: "#fff",
    padding: "15px 20px ",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "inline",
    justifycontent: "right",
    marginLeft: 25,
    marginBottom: 10
  },
};

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    var total = console.log(carro);
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((x) => (
            <li style={styles.producto} key={x.name}>
              <img alt={x.name} src={x.img} width="50" height="32" />
              {x.name} <span>{x.cantidad} un</span> <span>${x.price}</span>
            </li>
          ))}
          <p>Total : {total}</p>
        </ul>
        <button style={styles.green}>Enviar pedido</button>
        <button style={styles.button}>Vaciar Carro</button>
      </div>
    );
  }
}

export default DetallesCarro;
