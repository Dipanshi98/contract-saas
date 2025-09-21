import React, { useState } from 'react';

function Query() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState(null);

  const handleAsk = async () => {
    setAnswer({ text: "Mock AI answer.", evidence: ["Clause 1: ...", "Clause 5: ..."] });
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Query Contracts</h1>
      <textarea value={query} onChange={(e) => setQuery(e.target.value)} className="border p-2 w-full mb-2"/>
      <button onClick={handleAsk} className="bg-purple-500 text-white px-4 py-2">Ask</button>
      {answer && (
        <div className="mt-4">
          <h2 className="font-bold">AI Answer</h2>
          <p>{answer.text}</p>
          <h3 className="font-bold mt-2">Evidence</h3>
          <ul className="list-disc ml-6">
            {answer.evidence.map((ev, i) => <li key={i}>{ev}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Query;