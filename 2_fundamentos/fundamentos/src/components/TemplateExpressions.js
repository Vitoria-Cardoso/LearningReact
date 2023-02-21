const TemplateExpressions = () => {
  //aqui dentro é tudo JS

  const name = 'Matheus'
  const data = {
    age: 31,
    job: 'Programmer'
  }

  //dentro do return é JSX
  return (
    <div>
      {/* Acessando variaveis */}
      <h1>Olá {name}, tudo bem? </h1>
      <p>Você atua como: {data.job}</p>
    </div>
  )
}

export default TemplateExpressions
