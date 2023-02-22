const Events = () => {
  const handleMyEvent = e => {
    console.log(e)
    console.log('Ativou o evento!')
  }

  const renderSomenthing = x => {
    if (x) {
      return <h1>Renderizando isso!</h1>
    } else {
      return <h1>Também posso renderizar isso!</h1>
    }
  }

  // Dentro do Return é JSX
  return (
    <div>
      {/* evento com função logica externa */}
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        {/* Botao com função logica curta interna */}
        <button onClick={() => console.log('clicou')}>
          Clique aqui Também!
        </button>
        {/* Botao com função logica longa interna  */}
        <button
          onClick={() => {
            if (true) {
              console.log('Isso não deveria existir')
            }
          }}
        >
          Clique aqui PorFavor
        </button>
      </div>
      {/* Chamando a função externa que tem html */}
      {renderSomenthing(true)}
      {renderSomenthing(false)}
    </div>
  )
}

export default Events
