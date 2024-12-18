import { useEffect, useState } from "react";
import "./Conversor.css"


function Conversor() {
  const [valor, setValor] = useState(0);
  const [valorConvertido, setValorConvertido] = useState(0);
  const [taxa, setTaxa] = useState(0);

  // Função para converter valores
  const handleConverter = () => {
    setValorConvertido(valor * taxa);
  };

  // Atualiza a taxa apenas uma vez ao carregar o componente
  useEffect(() => {
    setTaxa(6.09);
  }, []);

  return (
    <>
      <div>
        <h1>Conversor de Moedas</h1>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          placeholder="Digite o valor em moeda base"
        />

        <button onClick={handleConverter}>Converter</button>

        <h2>
          Valor em Reais: R${" "}
          {valorConvertido.toLocaleString("pr-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
      </div>
    </>
  );
}

export default Conversor;
