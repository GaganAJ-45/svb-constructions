const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const fallbackSiteUrl = "https://svb-constructions.vercel.app/";
const configuredSiteUrl = process.env.REACT_APP_SITE_URL || process.env.SITE_URL || fallbackSiteUrl;

const normalizedSiteUrl = configuredSiteUrl.replace(/\/+$/, "");
const buildDate = new Date().toISOString().slice(0, 10);

const filesToUpdate = [
  { fileName: "index.html", replacers: [["__SITE_URL__", normalizedSiteUrl]] },
  { fileName: "robots.txt", replacers: [["__SITE_URL__", normalizedSiteUrl]] },
  {
    fileName: "sitemap.xml",
    replacers: [
      ["__SITE_URL__", normalizedSiteUrl],
      ["__LASTMOD__", buildDate],
    ],
  },
];

for (const { fileName, replacers } of filesToUpdate) {
  const filePath = path.join(buildDir, fileName);
  if (!fs.existsSync(filePath)) {
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");
  for (const [searchValue, replaceValue] of replacers) {
    content = content.split(searchValue).join(replaceValue);
  }
  fs.writeFileSync(filePath, content, "utf8");
}

console.log(`[postbuild] SEO assets updated for ${normalizedSiteUrl}`);
