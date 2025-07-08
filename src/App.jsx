// App.jsx
import { BrowserRouter as Router, Routes, Route, data } from 'react-router-dom';
import Home from './pages/Home';
import CompPage from './pages/compPage';
import ScrollToTop from "./components/toTop"; 
import Leaderboard from './pages/leaderboard';
import NotLive from './pages/notLive';
import NotFound from './pages/notFound';


const isLive = false;
const message = "Competitions will be live soon!";
function App() {
  // fetch("https://my-backend.onrender.com/status")
fetch("https://comp-0al6.onrender.com/status")
.then(response => response.json())
.then(data => {
  console.log(data); // { days_left: 11, is_live: false, responses: 134 }

  const isLive = data.is_live;
  const competitionDate = data.competition_date;
  const message = isLive
  ? "Competitions are LIVE now!"
  : `Competitions will be live ${competitionDate}`;
  console.log("Is live status:", isLive);
})
.catch(error => {
  console.error("Error fetching status:", error);
});
  return (
    <Router>
      <ScrollToTop />
      {
        !isLive ? (
          <Routes>
            <Route path="/" element={<NotLive message={message}/>} />
            <Route path="/leaderboard" element={<NotLive message={message}/>} />
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