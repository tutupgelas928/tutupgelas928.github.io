export async function onRequestGet(context) {
  const host = context.request.headers.get("host") || "example.com";

  let sitemapList = "";
  for (let i = 1; i <= 50; i++) {
    const num = String(i).padStart(2, "0"); // jadi 01, 02, 03
    sitemapList += `Sitemap: https://${host}/sitemap/01/sitemap${num}.xml\n`;
  }

  const body = `User-agent: *
Allow: /

${sitemapList}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "no-cache"
    }
  });
}
