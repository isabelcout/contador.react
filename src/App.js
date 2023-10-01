import "./styles.css";

import React, { useState } from "react";

// utilizando as arrows functions para um código mais limpo e menor

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  // início do código html
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1046/1046277.png"
        alt="Ábaco"
      />
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default Contador;
