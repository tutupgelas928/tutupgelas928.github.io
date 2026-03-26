export async function onRequestGet(context) {
  const host = context.request.headers.get("host");
  const blogUrl = "https://www.fazri.my.id";

  const escapeXml = (str) => {
    return str.replace(/[<>&'"]/g, c => ({
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;"
    }[c]));
  };

  let startIndex = 1;
  const maxResults = 500;
  let labelSet = new Set();

  while (true) {
    const res = await fetch(
      `${blogUrl}/feeds/posts/default?alt=json&max-results=${maxResults}&start-index=${startIndex}`
    );
    const data = await res.json();

    const entries = data.feed.entry || [];
    if (entries.length === 0) break;

    for (const item of entries) {
      if (item.category) {
        for (const cat of item.category) {
          labelSet.add(cat.term);
        }
      }
    }

    startIndex += maxResults;
  }

  const labels = Array.from(labelSet).sort();

  const items = labels.map(label => {
    const safeLabel = encodeURIComponent(label);
    const url = `/categories/?q=${safeLabel}`;

    return `
<url>
  <loc>${escapeXml(`https://${host}${url}`)}</loc>
</url>`;
  }).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8"
    }
  });
}
