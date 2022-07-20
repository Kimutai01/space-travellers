import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Nav from './components/Navbar';
import Rocket from './components/Rocket';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
