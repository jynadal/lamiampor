// pages/api/save-json.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const jsonData = req.body;
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
    res.status(200).json({ message: 'JSON file created successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
