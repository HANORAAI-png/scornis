import type { APIRoute } from 'astro';
export const GET: APIRoute = ({site}) => {
 const routes=['/','/about','/innovations','/team','/updates','/contact','/privacy','/projects/spacexbot','/projects/hanora-ai','/projects/learn-o-ai','/projects/safaiera','/projects/vita-mini','/projects/astrovita'];
 const xml='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routes.map(path=>'<url><loc>'+new URL(path,site).href+'</loc></url>').join('')+'</urlset>';
 return new Response(xml,{headers:{'Content-Type':'application/xml'}});
};