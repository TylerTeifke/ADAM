import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Left from './pages/Left';
import Right from './pages/Right';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Left" element={<Left/>}/>
          <Route path="/Right" element={<Right/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;