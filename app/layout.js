import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "In Loving Memory ofTimothy Adebayo Adeku | 1945-2024",
  description:
    "A tribute to the extraordinary life ofTimothy Adebayo Adeku. Author, philanthropist, and beloved family member. Share memories, view photos, and celebrate his legacy.",
  openGraph: {
    title: "In Loving Memory ofTimothy Adebayo Adeku",
    description: "A tribute celebrating the extraordinary life ofTimothy Adebayo Adeku (1945-2024)",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#2C3E50",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
