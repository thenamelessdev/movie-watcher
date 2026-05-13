import React from 'react'
import "./globals.css"

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-neutral-800 text-neutral-300">
        <main className="m-3">
          {children}
        </main>
      </body>
    </html>
  )
}
