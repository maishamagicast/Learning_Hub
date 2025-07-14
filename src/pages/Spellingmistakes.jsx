import { useEffect, useState } from 'react';
import './SpellingMistakes.css';

function SpellingMistakes() {
  const [wordList, setWordList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}misspelled_words_500.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setWordList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="spelling-container">
      <h1 className="main-heading">Commonly Misspelled Words</h1>
      <p className="intro">Below is a list of frequently misspelled English words along with their correct spellings. Use this to improve your writing accuracy!</p>
      <table className="word-table">
        <thead>
          <tr>
            <th>Incorrect</th>
            <th>Correct</th>
          </tr>
        </thead>
        <tbody>
          {wordList.map((item, index) => (
            <tr key={index}>
              <td>{item.wrong}</td>
              <td>{item.correct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpellingMistakes;
