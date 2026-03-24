import https from 'https';
import fs from 'fs';

https.get('https://www.google.com/search?q=Little+Flamingos+Daycare+Cape+Town', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    fs.writeFileSync('search.html', data);
    console.log('Saved to search.html');
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
