import { useState } from 'react'

const ManageData = () => {
  let someData = 10

  const [number, setNumber] = useState(15)
  {console.log(number)}

  return (
    <div>
      <div>
        {/* Alterando sem uso do hooker, nao funciona*/}
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        {/* Mudando valor da variável usando hooker useState */}
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(20)}>Mudar State</button>
        {console.log(number)}
      </div>
    </div>
  )
}

export default ManageData
