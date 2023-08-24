import './App.css';
import Header from './components/header';
import Grid from './components/grid';
import Dates from './components/dates';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from './components/info';
import Home from './components/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/info/:farmacia' element={<Info/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
