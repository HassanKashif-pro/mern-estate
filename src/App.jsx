import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed import statement
import Home from '../public/Home';
import SignUp from '../public/SignUp';
import Profile from '../public/Profile';
import About from '../public/About';

export default function App() {
  return (
    <Router> {/* Fixed component name from BrouserRouter to BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} /> {/* Fixed path for the Profile route */}
      </Routes>
    </Router>
  );
}
