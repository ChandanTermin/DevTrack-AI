import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DevTrack AI",
  description: "AI Powered Career Intelligence Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geist.className} min-h-screen overflow-x-hidden bg-[#09090B] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}