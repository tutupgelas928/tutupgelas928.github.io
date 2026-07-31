export async function onRequest(context) {
  const host = new URL(context.request.url).hostname;

  return new Response(
`User-agent: *
Disallow: /test/
Disallow: /assets/
Allow: /

Sitemap: https://${host}/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=UTF-8",
        "Cache-Control": "public, max-age=5184000"
      }
    }
  );
}
