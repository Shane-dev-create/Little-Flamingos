import puppeteer from 'puppeteer';
import fs from 'fs';

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
  
  await page.goto('https://www.google.com/maps/search/?api=1&query=Little+Flamingos+Daycare+Cape+Town', { waitUntil: 'networkidle2' });
  
  await new Promise(r => setTimeout(r, 3000));
  
  // Try to click "Reject all" or "Accept all"
  try {
    const buttons = await page.$$('button');
    for (let btn of buttons) {
      const text = await page.evaluate(el => el.innerText, btn);
      if (text.includes('Reject all') || text.includes('Accept all')) {
        await btn.click();
        console.log('Clicked consent button');
        break;
      }
    }
  } catch (e) {
    console.log('No consent button found');
  }
  
  await new Promise(r => setTimeout(r, 5000));
  
  const text = await page.evaluate(() => document.body.innerText);
  fs.writeFileSync('maps.txt', text);
  console.log('Saved to maps.txt, length:', text.length);
  
  await browser.close();
}

run().catch(console.error);
