export async function onRequestGet(context) {
  const host = context.request.headers.get("host");

  let sitemapList = "";
  for (let i = 51; i <= 100; i++) {
    sitemapList += `Sitemap: https://${host}/sitemap/01/sitemap${i}.xml\n`;
  }

  const body = `User-agent: *
Allow: /

${sitemapList}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0"
    }
  });
}
