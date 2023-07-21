import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import MyGigs from './pages/MyGigs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-gigs" element={<MyGigs />}/>
        <Route path="/create-post" element={<CreatePost />}/>
        <Route path="/create-post/:eventId" element={<CreatePost />}/>
        </Routes>
      </Router>
         
    </div>
  );
}

export default App;
