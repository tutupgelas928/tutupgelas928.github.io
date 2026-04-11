export async function onRequestGet(context) {
  const host = context.request.headers.get("host");

  const sitemapList = Array.from({ length: 50 }, (_, i) => {
    const num = String(i + 51).padStart(2, "0");
    return `Sitemap: https://${host}/sitemap/01/sitemap${num}.xml`;
  }).join("\n");

  const body = `User-agent: *
Allow: /

${sitemapList}

`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "public, max-age=2592000"
    }
  });
}
