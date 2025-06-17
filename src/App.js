import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
