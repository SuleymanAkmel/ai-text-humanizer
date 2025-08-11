
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleHumanize = async () => {
    try {
      const res = await axios.post('/api/humanize', { text: input });
      setOutput(res.data.output);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Humanizer</h1>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste AI text here" rows={6} cols={60} />
      <br />
      <button onClick={handleHumanize}>Humanize</button>
      <h2>Output</h2>
      <pre>{output}</pre>
    </div>
  );
}
