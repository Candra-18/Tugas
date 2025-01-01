// src/app/api/submitAPI.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Console log payload untuk submit
      console.log('Submit Payload:', req.body);
      res.status(200).json({ message: 'Data submitted successfully' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  