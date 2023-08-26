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
        <Route path='/info/:farmacia1Name/:farmacia2Name/:farmacia1Map/:farmacia2Map/:farmacia1Tel/:farmacia2Tel/:farmacia1Loc/:farmacia2Loc/:farmacia1Dir/:farmacia2Dir/:num/:month/:farmacia3Name/:farmacia4Name/:farmacia3Map/:farmacia4Map/:farmacia3Tel/:farmacia4Tel/:farmacia3Loc/:farmacia4Loc/:farmacia3Dir/:farmacia4Dir/' element={<Info/>}></Route>
        <Route path='/info2/:farmacia1Name/:farmacia2Name/:farmacia1Map/:farmacia2Map/:farmacia1Tel/:farmacia2Tel/:farmacia1Loc/:farmacia2Loc/:farmacia1Dir/:farmacia2Dir/:num/:month/:farmacia3Name/:farmacia4Name/:farmacia3Map/:farmacia4Map/:farmacia3Tel/:farmacia4Tel/:farmacia3Loc/:farmacia4Loc/:farmacia3Dir/:farmacia4Dir/:farmacia5Name/:farmacia5Map/:farmacia5Tel/:farmacia5Loc/:farmacia5Dir/' element={<Info/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
