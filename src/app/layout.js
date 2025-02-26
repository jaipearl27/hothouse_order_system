import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Cart from "@/components/Cart";
import SocketClient from "./socketClient";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hothouse Order System",
  description: "POS Application for Hothouse Northwood Pizza",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body
      >
        <div className="flex flex-row w-screen h-screen antialiased text-blue-gray-800">
          <Sidebar />
          {children}
          <Cart />
        </div>
        <SocketClient />
      </body>
    </html>
  );
}
