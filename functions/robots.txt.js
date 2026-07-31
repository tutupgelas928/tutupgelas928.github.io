export async function onRequest(context) {
  const host = new URL(context.request.url).hostname;

  const robots = `User-agent: *
Disallow: /test/
Disallow: /assets/
Allow: /

Sitemap: https://${host}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
