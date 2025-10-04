import type { Metadata, Viewport } from "next";
import "./globals.css";

import { open, varela } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import Footer from "./_custom_components/layout/Footer";
import Navigation from "./_custom_components/layout/Navigation";
import OpeningAnimation from "./_custom_components/homePage/OpeningAnimation";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: `%s | Ecoscope`,
      default: "Ecoscope",
    },
    description: "Ecoscope - Environmental Solutions",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("bg-white text-foreground scroll-smooth", open.variable, varela.variable)} suppressHydrationWarning>
      <body
        id="body"
        className={cn(
          "min-h-screen bg-background font-body antialiased flex flex-col relative"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OpeningAnimation />
          <Navigation />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        ></Script>
      </body>
    </html>
  );
}