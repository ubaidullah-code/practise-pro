
import './App.css';
import { Navigate, Route, Routes } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import AboutBar from './pages/AboutBar';
import MoreDetail from './pages/MoreDetail';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" index element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/about" element={<AboutBar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<MoreDetail/>} />
          <Route path="/not-found" element={<NotFound/>} />
          <Route path='*' element={<Navigate to={"/not-found"} />} />



      
    </Routes>
      
    </div>
  );
}

export default App;
