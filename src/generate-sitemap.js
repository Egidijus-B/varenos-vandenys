import sitemap from 'sitemap'; // Import the default export

const createSitemap = sitemap.createSitemap; // Access createSitemap directly

// Check if createSitemap is a valid function
if (typeof createSitemap !== 'function') {
  console.error("createSitemap is not a function. Check the sitemap package export.");
  process.exit(1);
}

console.log("Sitemap module loaded.");

const sitemapInstance = createSitemap({
  hostname: 'http://localhost:5173', // Use your local server URL
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/gedimai', changefreq: 'monthly', priority: 0.8 },
    { url: '/kainos', changefreq: 'monthly', priority: 0.8 },
    { url: '/abonementai', changefreq: 'monthly', priority: 0.8 },
    { url: '/projektai', changefreq: 'monthly', priority: 0.8 },
    { url: '/kontaktai', changefreq: 'monthly', priority: 0.8 },
    { url: '/teisine-informacija', changefreq: 'monthly', priority: 0.8 },
    { url: '/gyvenamosios-vietoves', changefreq: 'monthly', priority: 0.8 },
    { url: '/asmens-duomenu-apsauga', changefreq: 'monthly', priority: 0.8 },
    { url: '/korupcijos-prevencija', changefreq: 'monthly', priority: 0.8 },
    { url: '/darbo-uzmokestis', changefreq: 'monthly', priority: 0.8 },
    { url: '/viesieji-pirkimai', changefreq: 'monthly', priority: 0.8 },
    { url: '/administracija', changefreq: 'monthly', priority: 0.8 },
    { url: '/karjera', changefreq: 'monthly', priority: 0.8 },
  ],
});

console.log("Sitemap created.");

sitemapInstance.toXML((err, xml) => {
  if (err) {
    console.error("Error generating XML:", err);
    return;
  }
  console.log("Sitemap XML generated:");
  console.log(xml); // You can also write this to a file if needed
});







