import fs from 'fs';

const html = fs.readFileSync('search.html', 'utf-8');
const text = html.replace(/<[^>]*>?/gm, ' ');
fs.writeFileSync('search.txt', text);
console.log('Saved to search.txt');
