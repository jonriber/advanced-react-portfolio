
import { useEffect } from 'react'
// import './App.css'
import {ChakraProvider} from "@chakra-ui/react"
import { AlertProvider} from "./context/alertContext"
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import ProjectsSection from './components/ProjectsSection'
import ContactMeSection from './components/ContactMeSection'
import Footer from './components/Footer'
import Alert from './components/Alert'

function App() {

  useEffect(() => {
    document.title = "Pete"
  },[])

  return (
      <ChakraProvider>
        <AlertProvider>
          <main>
            <Header />
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </main>
        </AlertProvider>
      </ChakraProvider>
      
  )
}

export default App