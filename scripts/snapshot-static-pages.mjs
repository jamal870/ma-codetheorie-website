// Build step after `vite build`: renders the content pages once with the freshly built SSR
// handler and writes them as static HTML into dist/. Netlify serves dist/ files before the SSR
// function (`preferStatic`), so these pages come straight from the CDN. Pages not listed here
// (and the redirect routes /code, /pro, /theorie) still go through the SSR function.
// The page list is read from public/sitemap.xml, so a new page needs no change here. Nothing in
// dist/ is ever committed.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");

const sitemap = await readFile(join(root, "public/sitemap.xml"), "utf8");
const ROUTES = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
if (ROUTES.length === 0) throw new Error("[snapshot] no <loc> entries in public/sitemap.xml");
const handlerUrl = pathToFileURL(join(root, ".netlify/functions-internal/server/main.mjs")).href;
const { default: handler } = await import(handlerUrl);

let failed = 0;
for (const route of ROUTES) {
  const res = await handler(new Request(`https://codetheorie.ma${route}`), {});
  const html = await res.text();
  const ok = res.status === 200 && /<html/i.test(html) && html.includes("</html>");
  if (!ok) {
    console.error(`[snapshot] FAILED ${route}: HTTP ${res.status}`);
    failed++;
    continue;
  }
  const file = join(root, "dist", route === "/" ? "" : route, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
  console.log(`[snapshot] ${route} -> ${file.slice(root.length + 1)} (${html.length} bytes)`);
}
if (failed) process.exit(1);
