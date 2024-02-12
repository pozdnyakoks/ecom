import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layouts/footer/Footer'
import { Header } from './components/layouts/header/Header'

function App() {

  return (
    <>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/catalog' element={<h1>Catalog</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
