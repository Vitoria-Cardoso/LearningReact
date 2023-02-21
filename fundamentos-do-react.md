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


