
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    // Simulate humanization
    const output = text.replace(/AI/gi, 'Humanized AI');
    res.status(200).json({ output });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
