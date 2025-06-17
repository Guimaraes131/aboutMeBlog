import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Menu from "./components/Menu";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
