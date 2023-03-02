import './App.css'
// Importanto imagem do assets
import City from './assets/img2.jpg'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'

function App() {
  return (
    <div className="App">
      <h1> Começando nova sessão</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  )
}

export default App
