# Imagens no React

---

- As imagens pública devem ficar na pasta public
- /nome.jpg
- Um padrão bem usado é colocar as imegen em uma pasta chamadas assets no src.
- Usando o Src não precisa do path, vai funcionar semelhante a uma variavel, dependendo do caso isso é a melhor opção

# Hooks

---

- Seria um tipo de função
- Muito usado para facilitar, e evitar repetições desnecessárias
- Padrão é sempre começar com **use** , exemplo: **useState**
- Precisam ser importados
- Serve para gerenciar estados de dados.

# useState Hooks

---

- As variáveis quando dadas um valor, e em seguida são alteradas, não será renderizado , ou seja, seu valor vai permanecer o mesmo.
- Por tanto o useState é um Hooker feito para renderizar e dar esse valor atualizado para a variável.

```javascript
import { useState } from 'react'
const [number, setNumber] = useState(15)
<button onClick={() => setNumber(20)}>Mudar Variável</button>
```

# useState para listas

---

- ele renderiza a lista e atualiza ela

```javascript
//fora do return
const [list] = useState(['Matheus ', 'Pedro', 'Josias', 'Maria'])
//dentro do return
<ul>
  {list.map((item, i )=> (
    /* Como retorno objeto, temos que usar o parenteses e não chaves */
    <li key={i}>{item}</li>
  ))}
</ul>
```

- A chave key tambem eh necessaria para nao dar erro no console.
