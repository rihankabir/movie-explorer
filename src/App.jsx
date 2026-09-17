import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
<Route path="/Movies" element={<Movies />} />

    </Routes>
<Footer />
    </BrowserRouter>
    
  )
}

export default App
