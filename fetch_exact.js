import { execSync } from 'child_process';
import fs from 'fs';

try {
  const url = "https://www.google.com/search?rlz=1C5CHFA_enZA941ZA942&sca_esv=41b1151c51455beb&cs=0&output=search&kgmid=/g/11scsh75_d&q=Little+Flamingos+Daycare&shem=dlvs1,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=2a6796962f49159d&utm_source=dlvs1,shrtsdl,sh/x/loc/uni/m1/1";
  const html = execSync(`curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" "${url}"`).toString();
  fs.writeFileSync('search.html', html);
  const text = html.replace(/<[^>]*>?/gm, ' ');
  fs.writeFileSync('search.txt', text);
  console.log('Saved to search.txt, size:', text.length);
} catch (e) {
  console.error(e);
}
