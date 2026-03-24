import puppeteer from 'puppeteer';
import fs from 'fs';

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://share.google/KopPGAHK1frG5y1XO', { waitUntil: 'networkidle2' });
  
  // Wait a bit for the redirect and rendering
  await new Promise(r => setTimeout(r, 3000));
  
  const text = await page.evaluate(() => document.body.innerText);
  fs.writeFileSync('puppeteer.txt', text);
  console.log('Saved to puppeteer.txt, length:', text.length);
  
  await browser.close();
}

run().catch(console.error);
