import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import NotFound from './components/pages/NotFound'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'

function App() {

  return (
    <Router >
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />

    </Router>
  )
}

export default App;
