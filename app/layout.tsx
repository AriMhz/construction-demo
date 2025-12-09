import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "HIMALAYA BUILD CO. | Premium Construction & Projects in Nepal",
  description:
    "Expert construction services and completed projects across Nepal. Premium residential, commercial, and institutional builds with modern techniques.",
  generator: "v0.app",
  applicationName: "HIMALAYA BUILD CO.",
  keywords: ["construction", "nepal", "architecture", "projects", "building", "residential", "commercial"],
  creator: "HIMALAYA BUILD CO.",
  publisher: "HIMALAYA BUILD CO.",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himalaya-build.com",
    title: "HIMALAYA BUILD CO. | Premium Construction in Nepal",
    description: "Expert construction and innovative projects across Nepal",
    siteName: "HIMALAYA BUILD CO.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIMALAYA BUILD CO.",
    description: "Premium construction services in Nepal",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B4F6C" },
    { media: "(prefers-color-scheme: dark)", color: "#F2994A" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
