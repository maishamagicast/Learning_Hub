import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="main-heading">🎓 Welcome to the English Learning Hub</h1>

      <section className="intro-section">
        <p>
          This hub is designed to help you build a strong foundation in English through clear explanations,
          practical examples, and engaging content. Whether you're a student, teacher, or just a language lover,
          you'll find useful resources to improve your skills.
        </p>
      </section>

      <section className="features-section">
        <h2 className="subheading">🌟 What You'll Find Here</h2>
        <ul>
          <li><strong>Grammar Guides:</strong> Learn sentence structure, tenses, punctuation, and parts of speech with real examples.</li>
          <li><strong>Literature Lessons:</strong> Dive into classic texts, themes, authors, and literary devices.</li>
          <li><strong>Writing Tips:</strong> Discover how to express ideas clearly, creatively, and correctly.</li>
          <li><strong>Reading Practice:</strong> Improve comprehension with guided passages and vocabulary support.</li>
        </ul>
      </section>

      <section className="goal-section">
        <h2 className="subheading">🚀 Our Goal</h2>
        <p>
          To create a simple, focused space for English learners of all levels — without distractions, ads,
          or unnecessary quizzes. We believe that learning should be practical, accessible, and enjoyable.
        </p>
      </section>
    </div>
  );
}

export default Home;
