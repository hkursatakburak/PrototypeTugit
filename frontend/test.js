const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  try {
    const response = await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    console.log('Got response:', response.status());
  } catch (err) {
    console.error('Error navigating:', err);
  }
  
  await browser.close();
})();
