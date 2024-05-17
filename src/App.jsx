import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./components/Header"
import Detail from "./pages/Detail"


const App = () => {
  return (

     <BrowserRouter>
     
        <Header/>
       <Routes>

       <Route path="/"  element= { <Main /> } />  
       <Route path="/detail"  element= { <Detail /> } />  

       </Routes>
       
     </BrowserRouter>
  )
}

export default App