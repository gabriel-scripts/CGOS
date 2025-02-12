import "./globals.css"

import { Header } from './components/header/page'
import { LeftBar } from './components/sidebar/page'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <Header/>
        <LeftBar/>
        
        {children}

      </body>
    </html>
  );
}
