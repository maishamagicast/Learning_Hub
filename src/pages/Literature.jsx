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

      {/* Themes and Literary Elements */}
      <section className="section">
        <h2 className="subheading">Understanding Themes and Literary Elements</h2>
        <p>
          Literature uses various elements to convey deeper meaning. Some of the most important include <strong>theme</strong>, <strong>tone</strong>, <strong>attitude</strong>, <strong>characterization</strong>, and <strong>mood</strong>.
        </p>
        <ul>
          <li><strong>Theme:</strong> The central idea or message in a story. Examples include love, betrayal, freedom, identity, and justice.</li>
          <li><strong>Types of Themes:</strong> Universal themes, moral themes, and social themes.</li>
          <li><strong>Tone:</strong> The author's attitude toward the subject.</li>
          <li><strong>Attitude:</strong> The character or narrator’s stance or opinion toward elements in the story.</li>
          <li><strong>Characterization:</strong> How authors present and develop characters.</li>
          <li><strong>Mood:</strong> The emotional atmosphere that a reader experiences.</li>
        </ul>
      </section>

      {/* Literary Excerpt and Analysis */}
      <section className="section">
        <h2 className="subheading">Excerpt and Literal Analysis</h2>
        <blockquote className="literary-quote">
          “It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...”<br />
          <span>– Charles Dickens, <em>A Tale of Two Cities</em></span>
        </blockquote>
        <p>
          This opening line sets a paradoxical tone that captures the contradictions of the era during the French Revolution. Dickens uses repetition and contrast to reflect instability and duality in human experience.
        </p>
        <p>
          <strong>Theme:</strong> Duality and conflict between extremes.<br />
          <strong>Tone:</strong> Reflective and ironic.<br />
          <strong>Characterization:</strong> The narrator's sweeping overview immediately places the reader in a broader historical and philosophical context.<br />
          <strong>Mood:</strong> Dramatic, tense, and thought-provoking.
        </p>
      </section>

      {/* Why Study Literature */}
      <section className="section">
        <h2 className="subheading">Why Study Literature?</h2>
        <p>
          Literature develops your imagination, critical thinking, and empathy. It strengthens language skills and helps you understand different cultures and perspectives. Whether you're reading ancient epics or modern novels, literature deepens your understanding of humanity.
        </p>
      </section>

      {/* Literary Terms Glossary */}
      <section className="section">
        <h2 className="subheading">📘 Literary Terms and Devices</h2>
        <p>Below are 20 essential literary terms with brief definitions and examples:</p>
        <ul>
          <li><strong>Alliteration:</strong> Repetition of consonant sounds (e.g., “She sells sea shells...”)</li>
          <li><strong>Metaphor:</strong> Comparison without using "like" or "as" (e.g., “Time is a thief.”)</li>
          <li><strong>Simile:</strong> Comparison using "like" or "as" (e.g., “Brave as a lion.”)</li>
          <li><strong>Onomatopoeia:</strong> Words that imitate sounds (e.g., “buzz,” “clang”)</li>
          <li><strong>Hyperbole:</strong> Exaggeration for emphasis (e.g., “I’ve told you a million times.”)</li>
          <li><strong>Irony:</strong> A contrast between expectation and reality (e.g., a fire station burns down)</li>
          <li><strong>Foreshadowing:</strong> Hints of future events (e.g., dark clouds hinting danger)</li>
          <li><strong>Imagery:</strong> Descriptive language that appeals to the senses</li>
          <li><strong>Symbolism:</strong> An object or idea that represents something deeper (e.g., a dove for peace)</li>
          <li><strong>Allegory:</strong> A story with both literal and symbolic meanings (e.g., <em>Animal Farm</em>)</li>
          <li><strong>Personification:</strong> Giving human traits to non-human things (e.g., “The wind whispered.”)</li>
          <li><strong>Oxymoron:</strong> Two contradictory terms together (e.g., “deafening silence”)</li>
          <li><strong>Paradox:</strong> A statement that contradicts itself but reveals truth (e.g., “Less is more.”)</li>
          <li><strong>Theme:</strong> Central idea explored in a text</li>
          <li><strong>Tone:</strong> The writer’s attitude toward the subject</li>
          <li><strong>Mood:</strong> The feeling evoked in the reader</li>
          <li><strong>Flashback:</strong> A scene set in an earlier time than the main story</li>
          <li><strong>Dialogue:</strong> Conversation between characters</li>
          <li><strong>Setting:</strong> Time and place of a story</li>
          <li><strong>Conflict:</strong> The main problem in a story (internal or external)</li>
        </ul>
      </section>
    </div>
  );
}

export default Literature;
