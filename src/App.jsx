import Nav from "./components/Nav"
import Grid from "./Grid"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Register from "./login-register-comp/Register"
import Login from "./login-register-comp/Login"
import Contact from "./Contact"
import Hardware from "./Hardware"
import Footer from "./Footer"
import Profile from "./login-register-comp/Profile"


function App() {
  return(
  <>
  <BrowserRouter>
    <Nav></Nav>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="games" element={<Grid/>}/>
    <Route path="contact" element={<Contact/>}></Route>
    <Route path="hardware" element={<Hardware/>}></Route>
    <Route path="login" element={<Login/>}></Route>
    <Route path="register" element={<Register/>}></Route>
    <Route path="login/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>
  <Footer></Footer>
  </>
  )
}


export default App
