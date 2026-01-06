import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/admin', '/portal'],
    },
    sitemap: 'https://www.visuapp.com.br/sitemap.xml',
  };
}