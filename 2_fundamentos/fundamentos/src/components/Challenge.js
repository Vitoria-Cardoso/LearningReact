const Challenge = () => {
  //Declara n1 e n2 e efetua a soma deles para o botao
  const n1 = 2
  const n2 = 3
  const handleSoma = e => {
    console.log(n1 + n2)
  }

  return (
    <div>
      {/* Mostra n1 e n2 e faz o evento de clique do botão de soma de n1 e n2 */}
      <h1>
        {n1} e {n2}
      </h1>
      <button onClick={handleSoma}>Clique aqui e some n1 e n2</button>
    </div>
  )
}

export default Challenge
