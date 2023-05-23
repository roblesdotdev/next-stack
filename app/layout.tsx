import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Henry Stack | Next.js Starter",
  description: "Next.js 13 template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <main className="bg-[#16161a]">{children}</main> */}
        <main className="bg-[#0e0c16]">{children}</main>
      </body>
    </html>
  );
}
