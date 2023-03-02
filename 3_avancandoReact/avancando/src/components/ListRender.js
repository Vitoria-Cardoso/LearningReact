import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(['Matheus ', 'Pedro', 'Josias', 'Maria'])

  return (
    <div>
      {/* list.map reprocessa o array gerando outro */}
      <ul>
        {list.map(item => (
          /* Como retorno objeto, temos que usar o parenteses e não chaves */
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender
