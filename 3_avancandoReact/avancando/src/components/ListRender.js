import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(['Matheus ', 'Pedro', 'Josias', 'Maria'])

  const [users] = useState([
    {id: 1, name: "Matheus", age: 31},
    {id: 234, name: "Joao", age: 28},
    {id: 898, name: "Pedro", age: 44},
  ])

  return (
    <div>
      {/* list.map reprocessa o array gerando outro */}
      <ul>
        {list.map((item, i )=> (
          /* Como retorno objeto, temos que usar o parenteses e não chaves */
          // Adicionando i que eh o nosso indice para nao dar erro.
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user)=>(
          <li key={user.id}> {user.name} - {user.age} </li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender
