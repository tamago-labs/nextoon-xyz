import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Torotoon - AI-Powered Webtoon Platform",
  description: "Torotoon leverages AI for seamless content translation and localization, bringing global webtoons to a wider audience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 relative overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Animated gradient circles */}
              <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute top-60 right-20 w-64 h-64 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
          <Header /> 
          {children}
          <Footer/>
        </div>

      </body>
    </html>
  );
}
