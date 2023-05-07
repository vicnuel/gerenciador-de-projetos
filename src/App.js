// antes do react router
/* import HelloWorld from './components/helloworld';
import Anotacoes from './components/Anotacoes';
import SayMyName from './components/SayMyName';
import './App.css'; */
// depois do react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Estudo from './pages/Estudo'
import Home from './pages/Home'
import NavBar from './layout/NavBar'

function App() {

  // const name = 'Victor'

  // const url_image = 'https://via.placeholder.com/150'

  /* return (
      antes do react router
      // <div className="App">
      
      
      // <h1>Alterando JSX</h1>
      // <p>Olá, {name}!</p>
      // <img src={url_image} alt="teste" />
      // <HelloWorld /> 
      // <Anotacoes /> 
      //  <SayMyName name={name} /> 
      // </div>
      )
*/

  return (
    /* depois do react router */
    <Router >
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/estudo" element={<Estudo />} />
      </Routes>
    </Router>
  )
}

export default App;
