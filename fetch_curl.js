import { execSync } from 'child_process';
import fs from 'fs';

try {
  const html = execSync('curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" "https://www.google.com/search?q=Little+Flamingos+Daycare+Cape+Town"').toString();
  fs.writeFileSync('search.html', html);
  const text = html.replace(/<[^>]*>?/gm, ' ');
  fs.writeFileSync('search.txt', text);
  console.log('Saved to search.txt, size:', text.length);
} catch (e) {
  console.error(e);
}
