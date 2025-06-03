import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Studio - Reconocimiento de Voz",
  description: "Convierte audio a texto usando inteligencia artificial avanzada",
  keywords: ["AI", "reconocimiento de voz", "transcripción", "Hugging Face", "Next.js"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
