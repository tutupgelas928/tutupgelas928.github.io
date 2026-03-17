export async function onRequestGet(context) {
  const host = context.request.headers.get("host");
  
  const body = `User-agent: *
Allow: /

Sitemap: https://${host}/sitemap/01/sitemap01.xml
Sitemap: https://${host}/sitemap/01/sitemap02.xml
Sitemap: https://${host}/sitemap/01/sitemap03.xml
Sitemap: https://${host}/sitemap/01/sitemap04.xml
Sitemap: https://${host}/sitemap/01/sitemap05.xml
Sitemap: https://${host}/sitemap/01/sitemap06.xml
Sitemap: https://${host}/sitemap/01/sitemap07.xml
Sitemap: https://${host}/sitemap/01/sitemap08.xml
Sitemap: https://${host}/sitemap/01/sitemap09.xml
Sitemap: https://${host}/sitemap/01/sitemap10.xml
Sitemap: https://${host}/sitemap/01/sitemap11.xml
Sitemap: https://${host}/sitemap/01/sitemap12.xml
Sitemap: https://${host}/sitemap/01/sitemap13.xml
Sitemap: https://${host}/sitemap/01/sitemap14.xml
Sitemap: https://${host}/sitemap/01/sitemap15.xml
Sitemap: https://${host}/sitemap/01/sitemap16.xml
Sitemap: https://${host}/sitemap/01/sitemap17.xml
Sitemap: https://${host}/sitemap/01/sitemap18.xml
Sitemap: https://${host}/sitemap/01/sitemap19.xml
Sitemap: https://${host}/sitemap/01/sitemap20.xml
Sitemap: https://${host}/sitemap/01/sitemap21.xml
Sitemap: https://${host}/sitemap/01/sitemap22.xml
Sitemap: https://${host}/sitemap/01/sitemap23.xml
Sitemap: https://${host}/sitemap/01/sitemap24.xml
Sitemap: https://${host}/sitemap/01/sitemap25.xml
Sitemap: https://${host}/sitemap/01/sitemap26.xml
Sitemap: https://${host}/sitemap/01/sitemap27.xml
Sitemap: https://${host}/sitemap/01/sitemap28.xml
Sitemap: https://${host}/sitemap/01/sitemap29.xml
Sitemap: https://${host}/sitemap/01/sitemap30.xml
Sitemap: https://${host}/sitemap/01/sitemap31.xml
Sitemap: https://${host}/sitemap/01/sitemap32.xml
Sitemap: https://${host}/sitemap/01/sitemap33.xml
Sitemap: https://${host}/sitemap/01/sitemap34.xml
Sitemap: https://${host}/sitemap/01/sitemap35.xml
Sitemap: https://${host}/sitemap/01/sitemap36.xml
Sitemap: https://${host}/sitemap/01/sitemap37.xml
Sitemap: https://${host}/sitemap/01/sitemap38.xml
Sitemap: https://${host}/sitemap/01/sitemap39.xml
Sitemap: https://${host}/sitemap/01/sitemap40.xml
Sitemap: https://${host}/sitemap/01/sitemap41.xml
Sitemap: https://${host}/sitemap/01/sitemap42.xml
Sitemap: https://${host}/sitemap/01/sitemap43.xml
Sitemap: https://${host}/sitemap/01/sitemap44.xml
Sitemap: https://${host}/sitemap/01/sitemap45.xml
Sitemap: https://${host}/sitemap/01/sitemap46.xml
Sitemap: https://${host}/sitemap/01/sitemap47.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0"
    }
  });
}
