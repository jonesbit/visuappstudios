import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Visuapp Studios',
    short_name: 'Visuapp',
    description: 'Desenvolvimento Web e Design de Alta Performance.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/assets/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}