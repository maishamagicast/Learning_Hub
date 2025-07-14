import './Literature.css';

function Literature() {
  return (
    <div className="literature-container">
      <h1 className="main-heading">📚 Introduction to Literature</h1>

      {/* What is Literature */}
      <section className="section">
        <h2 className="subheading">What is Literature?</h2>
        <p>
          <strong>Literature</strong> is written or spoken work that expresses ideas, emotions, or tells stories in artistic or intellectual ways. It includes genres like fiction, poetry, drama, and essays, and it often reflects human experiences, values, and cultures.
        </p>
        <p>
          Literature uses language creatively, going beyond ordinary speech to explore deeper truths about life, society, and the human condition.
        </p>
      </section>

      {/* Brief History */}
      <section className="section">
        <h2 className="subheading">A Brief History of Literature</h2>
        <p>
          Literature has existed for thousands of years, beginning with oral traditions—stories, myths, and poems passed down by word of mouth. The earliest known written literature dates back to ancient civilizations like Mesopotamia and Egypt.
        </p>
        <p>
          Over time, literature evolved with cultures. The ancient Greeks developed drama and philosophy. The Middle Ages brought religious texts and epic poetry. The Renaissance revived classical ideas and gave rise to figures like Shakespeare. In modern times, literature has expanded to include diverse voices and global perspectives.
        </p>
      </section>

      {/* William Shakespeare */}
      <section className="section">
        <h2 className="subheading">William Shakespeare (1564–1616)</h2>
        <p>
          William Shakespeare was an English playwright, poet, and actor, considered the most influential writer in English literature. He wrote 39 plays, 154 sonnets, and many poems, exploring themes like love, power, ambition, betrayal, and fate.
        </p>
        <ul>
          <li>
            <strong>Hamlet</strong> – A tragedy about Prince Hamlet of Denmark, who seeks revenge for his father's murder. Famous quote: <em>"To be, or not to be: that is the question."</em>
            <br />
            <span className="elaboration">
              This line expresses Hamlet’s inner conflict about life and death. The play explores deep questions about existence, morality, and madness.
            </span>
          </li>
          <li>
            <strong>Romeo and Juliet</strong> – A romantic tragedy of two young lovers from feuding families.
            <br />
            <span className="elaboration">
              The story highlights the power of love and the tragic consequences of hatred and miscommunication.
            </span>
          </li>
        </ul>
      </section>

      {/* Poetry */}
      <section className="section">
        <h2 className="subheading">Understanding Poetry</h2>
        <p>
          <strong>Poetry</strong> is a form of literature that emphasizes expression through rhythm, imagery, and structure. Poems often use condensed language to evoke strong emotions or create vivid imagery.
        </p>
        <ul>
          <li>
            <strong>Rhyme:</strong> Repetition of similar sounds at the end of lines (e.g., "bright light").
          </li>
          <li>
            <strong>Meter:</strong> A pattern of stressed and unstressed syllables (e.g., iambic pentameter).
          </li>
          <li>
            <strong>Imagery:</strong> Descriptive language that appeals to the senses (e.g., “The crimson sky burned with fire”).
          </li>
        </ul>
        <p className="elaboration">
          Example:  
          <br />
          <em>"Hope is the thing with feathers that perches in the soul..."</em> – Emily Dickinson  
          <br />
          This metaphor compares hope to a bird, showing how poetry can make abstract ideas more vivid and meaningful.
        </p>
      </section>

      {/* Why Study Literature */}
      <section className="section">
        <h2 className="subheading">Why Study Literature?</h2>
        <p>
          Literature develops your imagination, critical thinking, and empathy. It strengthens language skills and helps you understand different cultures and perspectives. Whether you're reading ancient epics or modern novels, literature deepens your understanding of humanity.
        </p>
      </section>
    </div>
  );
}

export default Literature;
