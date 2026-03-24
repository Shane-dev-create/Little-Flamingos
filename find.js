import fs from 'fs';

const html = fs.readFileSync('search.html', 'utf-8');
const match = html.match(/href="([^"]+)"/i);
if (match) {
  console.log(match[1]);
} else {
  console.log('No href found');
}
