import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "Visuapp Studios | Criação de Sites Profissionais e Landing Pages",
  description: "Transforme seu negócio com sites de alta conversão, design responsivo e estratégias de SEO.",
  icons: {
    icon: '/assets/logo.svg',
    apple: '/assets/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className={`${jakarta.variable} font-sans bg-visu-light text-visu-black antialiased`}>
        {children}
      </body>
    </html>
  );
}