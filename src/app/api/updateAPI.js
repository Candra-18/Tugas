export default function handler(req, res) {
    if (req.method === 'PUT') {
      console.log('Update Payload:', req.body);
      res.status(200).json({ message: 'Data updated successfully' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  