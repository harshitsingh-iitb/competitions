// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CompPage from './pages/compPage';
import ScrollToTop from "./components/toTop"; 
import Leaderboard from './pages/leaderboard';
import NotLive from './pages/notLive';
import NotFound from './pages/notFound';

const isLive = false; 
function App() {
  return (
    <Router>
      <ScrollToTop />
      {
        !isLive ? (
          <Routes>
            <Route path="/" element={<NotLive />} />
            <Route path="/leaderboard" element={<NotLive />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<CompPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        )
      }
    </Router>
  );
}
export default App;