import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IUMP TALCA",
  description: "Iglesia unida metodista pentecostal primera de talca",
  icons: {
    icon: '/logo.png', // /public path
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
