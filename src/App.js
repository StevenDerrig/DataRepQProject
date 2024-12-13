import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigationbar';
import './App.css';

import Home from './components/home';
import Missions from './components/missions';
import Aircraft from './components/aircraft';
import Characters from './components/characters';
import PlayerLog from './components/playerlog';

import AddMissions from './components/CRUD/addMissions';
import EditMission from './components/CRUD/editMission';
import AddAircraft from './components/CRUD/addAircraft';
import EditAircraft from './components/CRUD/editAircraft';
import AddCharacter from './components/CRUD/addCharacter';
import EditCharacter from './components/CRUD/editCharacter';
import AddPlayerLog from './components/CRUD/addPlayerLog';
import EditPlayerLog from './components/CRUD/editPlayerLog';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/addmissions" element={<AddMissions />} />
        <Route path="/editMission/:id" element={<EditMission />} />
        <Route path="/aircraft" element={<Aircraft />} />
        <Route path="/addaircraft" element={<AddAircraft />} />
        <Route path="/editAircraft/:id" element={<EditAircraft />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/addcharacter" element={<AddCharacter />} />
        <Route path="/editCharacter/:id" element={<EditCharacter />} />
        <Route path="/playerlog" element={<PlayerLog />} />
        <Route path="/addplayerlog" element={<AddPlayerLog />} />
        <Route path="/editPlayerLog/:id" element={<EditPlayerLog />} />
      </Routes>
    </Router>
  );
}

export default App;
