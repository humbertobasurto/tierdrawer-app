import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  title: "Outlaw Tiers",
  description: "Choose your loadout",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
