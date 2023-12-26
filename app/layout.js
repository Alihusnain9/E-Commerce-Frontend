import { Inter } from "next/font/google";
// import { Suspense } from 'react';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoteState from "./Context/NoteState";
// import Loading from "./dashboard/loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ali's Mart",
  description:
    "This is my personal project. I made this project in Next.js, Tailwind.css, Strapi for backend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NoteState>
          <Navbar />
          <br />
          <br />
          {/* <Suspense fallback={<Loading />}> */}
            {children}
            {/* </Suspense> */}
          <Footer />
        </NoteState>
      </body>
    </html>
  );
}
