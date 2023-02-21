# Criar componentes
---
* Fica em uma pasta chamada **components**
* CamelCase (**padrão**)


# Padrão JS S6
---
* Durante o curso é usado esse padrão, as famosas Arrow Functions.


# Como criar componentes
---

### Criação e Exportar
```javascript
//Arrow function
const FirstComponent = () => {
  return (
  <h1>Meu primeiro componente yay \0/</h1>
  );
}

export default FirstComponent;
```

### Importar componentes
```javascript
//components
import FirstComponent from './components/FirstComponent'
// add dentro da Div
<FirstComponent />
```

# JSX

* JSX é como se fosse o HTML do React, aqui vai as tags do html
* Tudo dentro do **return** é JSX
* class -> className **padrão**
```javascript
<p className="teste">um textinho de teste</p>
```
* JSX pode ter apenas um componente pai.
* sempre tem que estar envolte de uma div ou tag

