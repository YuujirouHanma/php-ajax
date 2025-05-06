export default function handler(req, res) {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString(); // Konversi buffer ke string
      });
  
      req.on('end', () => {
        const { username, comment } = JSON.parse(body);
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(`<p><strong>${username}:</strong> ${comment}</p>`);
      });
    } else {
      res.status(405).send('Method Not Allowed');
    }
  }
  