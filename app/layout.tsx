import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { LayoutWrapper } from "@/components/layout-wrapper"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Credit Risk & Compliance Assessment",
  description: "Palm Oil Credit Risk and Compliance Assessment Platform",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
