import "./App.css"
import Update from "./pages/update/Update";
import Fetch from "./pages/fetch/Fetch";
import Header from "./components/header/Header";
import SingUp from "./pages/singUp/SingUp";
import Delete from "./pages/delete/Delete";
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<SingUp/>} path="/"></Route>
    </Routes>
    <Routes>
      <Route element={<Delete/>} path="/delete"></Route>
    </Routes>
    <Routes>
      <Route element={<Fetch/>} path="/fetch"></Route>
    </Routes>
    <Routes>
      <Route element={<Update/>} path="/update"></Route>
    </Routes>
    </BrowserRouter>  
    
    </div>
  );
}

export default App;
