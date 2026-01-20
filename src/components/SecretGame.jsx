import { useState } from "react";

export default function NumeroSecreto() {
  const [mensaje, setMensaje] = useState("");
  const numeroSecreto = 7;

  const verificarNumero = (e) => {
    e.preventDefault();
    const intento = parseInt(e.target.elements.numero.value);

    if (intento === numeroSecreto) {
      setMensaje("🎉 ¡Correcto! Adivinaste el número secreto");
    } else {
      setMensaje("😅 Incorrecto, intenta de nuevo");
    }
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-lg font-bold mb-2">Juego del número secreto</h2>
      <form onSubmit={verificarNumero} className="flex gap-2">
        <input
          type="number"
          name="numero"
          placeholder="Ingresa un número"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Probar
        </button>
      </form>
      {mensaje && <p className="mt-2">{mensaje}</p>}
    </div>
  );
}