import { useState } from "react";

export default function SecretGame() {
  const secret = Math.floor(Math.random() * 10) + 1;

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const checkNumber = () => {
    const number = Number(guess);

    if (!number) {
      setMessage("❌ Ingresa un número válido");
      return;
    }

    if (number === secret) {
      setMessage("🎉 ¡Correcto! Adivinaste el número");
    } else if (number > secret) {
      setMessage("📉 El número es menor");
    } else {
      setMessage("📈 El número es mayor");
    }
  };

  return (
    <div>
      <h3>🎯 Juego del número secreto</h3>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      <button onClick={checkNumber}>Probar</button>

      <p>{message}</p>
    </div>
  );
}
