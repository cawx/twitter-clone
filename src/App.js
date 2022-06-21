import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import Login from './components/Login';
import "./components/style.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
