# Criar componentes

---

- Fica em uma pasta chamada **components**
- CamelCase (**padrão**)

# Padrão JS S6

---

- Durante o curso é usado esse padrão, as famosas Arrow Functions.

# Como criar componentes

---

### Criação e Exportar

```javascript
//Arrow function
const FirstComponent = () => {
  return <h1>Meu primeiro componente yay \0/</h1>
}

export default FirstComponent
```

### Importar componentes

```javascript
//components
import FirstComponent from './components/FirstComponent'
// add dentro da Div
;<FirstComponent />
```

# JSX

---

- JSX é como se fosse o HTML do React, aqui vai as tags do html
- Tudo dentro do **return** é JSX
- class -> className **padrão**

```javascript
<p className="teste">um textinho de teste</p>
```

- JSX pode ter apenas um componente pai.
- sempre tem que estar envolte de uma div ou tag

# Comentarios

---

- Dois tipos, um na função e um na parte do JSX.

```javascript
//comentario -> função
{/*comentario*/} -> jsx
```

- os comentários não são compartilhados, ou seja, não aparecem no inspect da web

# Template Expressions

---

- Uma maneira de executar JS em JSX
- **Sintaxe:** {Código em JS}
- também interpola variáveis
- Exemplo:

```javascript
const TemplateExpressions = () => {
  //aqui dentro é tudo JS
  const name = 'Matheus'
  return (
    <div>
      <h1>Olá {name}, tudo bem? </h1>
    </div>
  )
}
```

# Hierarquia de componentes

---

- Um componente pode ser usado em outros componentes
- Gerando assim uma hierarquia, por exemplo:
  app.js -> FirstComponent -> MyComponent.

# Eventos

---

### Evento de Click

- onClick, podemos colocar diretamente no JSX
- **Padrão de Nomenclatura**: handleAlgumaCoisa
- Exemplo de evento:

```javascript
const Events = () => {
  const handleMyEvent = e => {
    console.log(e)
    console.log('Ativou o evento!')
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
    </div>
  )
}

export default Events
```
