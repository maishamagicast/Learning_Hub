import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      backgroundColor: '#282c34',
      color: 'white'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/grammar" style={{ color: 'white', textDecoration: 'none' }}>Grammar</Link>
      <Link to="/literature" style={{ color: 'white', textDecoration: 'none' }}>Literature</Link>
      <Link to="/SpellingMistakes" style={{ color: 'white', textDecoration: 'none' }}>Spelling Mistakes</Link>
    </nav>
  );
}

export default Navbar;
