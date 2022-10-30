import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/team/:teamName/matches/:year' element={<MatchPage />} />
          <Route path='/team/:teamName' element={<TeamPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
