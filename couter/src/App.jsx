import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Products from "./pages/Products"
import Profile from "./pages/Profile"
import Services from "./pages/Services"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/aboutUs" element = {<AboutUs/>}/>
      {/* <Route path="/product" element = {<Products/>}/> */}
      <Route path="/profile" element = {<Profile/>} />
      <Route path="/services" element = {<Services/>}/>
     </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
