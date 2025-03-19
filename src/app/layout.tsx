import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import NProgress from "@/provider/NProgress";
import type { Metadata } from "next";
import { Nunito, Questrial } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grow Well Funding - Empowering Financial Growth",
  description:
    "Grow Well Funding is a platform dedicated to providing innovative financial solutions, resources, and tools to help individuals and businesses thrive. Discover expert insights, funding opportunities, and strategies for sustainable financial growth.",
};

const questrial = Questrial({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-questrial",
});

//eslint-disable-next-line @typescript-eslint/no-unused-vars
const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(questrial.className, "antialiased")}>
        
        {children}
       
      </body>
    </html>
  );
}
