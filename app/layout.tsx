import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { NavigationMenuDemo } from "@/components/dashboard/Navigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <body className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
          <NavigationMenuDemo />
          <main className="container mx-auto mt-4">
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  )
}