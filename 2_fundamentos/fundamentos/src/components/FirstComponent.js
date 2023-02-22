//Area de arquivo de estilos

import MyComponent from './MyComponent'

//Arrow function
const FirstComponent = () => {
  //explicacao da funcao
  return (
    <div>
      {/* Algum comentario */}
      <h1>Meu primeiro componente yay \0/</h1>
      <p className="marmelada">um textinho de teste</p>
      <MyComponent />
    </div>
  )
}

export default FirstComponent
