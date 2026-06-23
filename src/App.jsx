import { LocaleProvider } from './i18n/LocaleContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <LocaleProvider>
      <div className="app">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Products />
          <Contact />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  )
}

export default App
