// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CompPage from './pages/compPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/competitions" element={<Home />} />
        <Route path="/competitions/:slug" element={<CompPage />} />
      </Routes>
    </Router>
  );
}

export default App;
