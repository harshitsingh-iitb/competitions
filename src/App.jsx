// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CompPage from './pages/compPage';
import ScrollToTop from "./components/toTop"; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Main App Structure */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<CompPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
