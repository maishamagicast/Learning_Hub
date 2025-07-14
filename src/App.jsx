import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Grammar from './pages/Grammar';
import Literature from './pages/Literature';
import SpellingMistakes from './pages/Spellingmistakes';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/literature" element={<Literature />} />
        <Route path="/SpellingMistakes" element={<SpellingMistakes />} />
      </Routes>
    </div>
  );
}

export default App;
