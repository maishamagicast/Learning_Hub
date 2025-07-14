import './Grammar.css';

function Grammar() {
  return (
    <div className="grammar-container">
      <h1 className="main-heading">📘 Complete Grammar Notes</h1>

      {/* TENSES */}
      <section className="section">
        <h2 className="subheading">Tenses</h2>
        <p>Tenses indicate the time of action or state of being. English has three main tenses: past, present, and future. Each has four aspects: simple, continuous (progressive), perfect, and perfect continuous.</p>
        <ul>
          <li><strong>Present Simple:</strong> I walk. (habitual or general truth)</li>
          <li><strong>Present Continuous:</strong> I am walking. (action happening now)</li>
          <li><strong>Present Perfect:</strong> I have walked. (action completed with relevance to present)</li>
          <li><strong>Present Perfect Continuous:</strong> I have been walking. (action that started in the past and continues)</li>
          <li><strong>Past Simple:</strong> I walked. (completed action in the past)</li>
          <li><strong>Past Continuous:</strong> I was walking. (action in progress in the past)</li>
          <li><strong>Past Perfect:</strong> I had walked. (completed before another past action)</li>
          <li><strong>Past Perfect Continuous:</strong> I had been walking. (past action in progress before another past action)</li>
          <li><strong>Future Simple:</strong> I will walk. (future action)</li>
          <li><strong>Future Continuous:</strong> I will be walking. (action in progress in the future)</li>
          <li><strong>Future Perfect:</strong> I will have walked. (action that will be completed before a certain future time)</li>
          <li><strong>Future Perfect Continuous:</strong> I will have been walking. (future action in progress over time)</li>
        </ul>
      </section>

      {/* PARTS OF SPEECH */}
      <section className="section">
        <h2 className="subheading">Parts of Speech</h2>
        <p>These are the building blocks of English sentences:</p>
        <ul>
          <li><strong>Noun:</strong> A person, place, thing, or idea (e.g., cat, school, freedom).</li>
          <li><strong>Pronoun:</strong> A word that replaces a noun (e.g., he, she, it, they).</li>
          <li><strong>Verb:</strong> A word that expresses action or state (e.g., run, is, seem).</li>
          <li><strong>Adjective:</strong> Describes a noun (e.g., blue, tall, happy).</li>
          <li><strong>Adverb:</strong> Describes a verb, adjective, or another adverb (e.g., quickly, very, well).</li>
          <li><strong>Preposition:</strong> Shows relationship between noun/pronoun and other words (e.g., in, on, under, with).</li>
          <li><strong>Conjunction:</strong> Connects words or groups of words (e.g., and, but, because).</li>
          <li><strong>Interjection:</strong> A word that expresses emotion (e.g., Wow!, Oh no!).</li>
        </ul>
      </section>

      {/* SENTENCE STRUCTURE */}
      <section className="section">
        <h2 className="subheading">Sentence Structure</h2>
        <p>Sentences in English typically follow this structure: Subject + Verb + Object.</p>
        <ul>
          <li><strong>Simple sentence:</strong> She reads.</li>
          <li><strong>Compound sentence:</strong> She reads, and he writes.</li>
          <li><strong>Complex sentence:</strong> She reads because she enjoys it.</li>
          <li><strong>Compound-complex sentence:</strong> She reads because she enjoys it, and he writes novels.</li>
        </ul>
      </section>

      {/* ARTICLES */}
      <section className="section">
        <h2 className="subheading">Articles</h2>
        <ul>
          <li><strong>Definite article:</strong> <em>the</em> (specific item: the book)</li>
          <li><strong>Indefinite articles:</strong> <em>a</em>, <em>an</em> (non-specific items: a cat, an apple)</li>
        </ul>
      </section>

      {/* MODALS */}
      <section className="section">
        <h2 className="subheading">Modal Verbs</h2>
        <p>Modals express necessity, ability, permission, or possibility.</p>
        <ul>
          <li><strong>Can, Could:</strong> Ability or possibility</li>
          <li><strong>May, Might:</strong> Possibility or permission</li>
          <li><strong>Must:</strong> Obligation or strong necessity</li>
          <li><strong>Shall, Should:</strong> Suggestion or future action</li>
          <li><strong>Will, Would:</strong> Future or hypothetical situations</li>
        </ul>
      </section>

      {/* PUNCTUATION */}
      <section className="section">
        <h2 className="subheading">Punctuation</h2>
        <ul>
          <li><strong>Period (.):</strong> Ends a statement.</li>
          <li><strong>Comma (,):</strong> Separates elements or clauses.</li>
          <li><strong>Question Mark (?):</strong> Ends a question.</li>
          <li><strong>Exclamation Mark (!):</strong> Shows strong feeling.</li>
          <li><strong>Colon (:):</strong> Introduces a list or explanation.</li>
          <li><strong>Semicolon (;):</strong> Connects independent clauses.</li>
          <li><strong>Quotation Marks (" "):</strong> Show direct speech or quotations.</li>
          <li><strong>Apostrophe ('):</strong> Shows possession or contractions.</li>
        </ul>
      </section>

      {/* SUBJECT-VERB AGREEMENT */}
      <section className="section">
        <h2 className="subheading">Subject-Verb Agreement</h2>
        <p>Subjects and verbs must agree in number (singular or plural).</p>
        <ul>
          <li><strong>Correct:</strong> He runs fast.</li>
          <li><strong>Incorrect:</strong> He run fast.</li>
        </ul>
      </section>

      {/* VOICE & MOOD */}
      <section className="section">
        <h2 className="subheading">Voice and Mood</h2>
        <ul>
          <li><strong>Active voice:</strong> The subject does the action (e.g., The cat chased the mouse).</li>
          <li><strong>Passive voice:</strong> The subject receives the action (e.g., The mouse was chased by the cat).</li>
          <li><strong>Indicative mood:</strong> States facts (e.g., She works hard).</li>
          <li><strong>Imperative mood:</strong> Gives commands (e.g., Close the door).</li>
          <li><strong>Subjunctive mood:</strong> Expresses wishes or hypothetical situations (e.g., If I were taller...)</li>
        </ul>
      </section>
    </div>
  );
}

export default Grammar;

