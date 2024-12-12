import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigationbar';
import './App.css';

import Home from './components/home';
import Missions from './components/missions';
import Aircraft from './components/aircraft';
import Characters from './components/characters';
import PlayerLog from './components/playerlog';

import AddMissions from './components/CRUD/addMissions';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addmissions" element={<AddMissions />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/aircraft" element={<Aircraft />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/playerlog" element={<PlayerLog />} />
      </Routes>
    </Router>
  );
}

export default App;
