import './globals.css'

export const metadata = {
  title: 'testing-dups-healthcare-patient-portal-1754190932844 - Healthcare Portal',
  description: 'Dups',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="font-bold text-xl text-blue-600">testing-dups-healthcare-patient-portal-1754190932844</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Login</li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 p-6 mt-12">
          <div className="container mx-auto text-center">
            <p>© 2025 testing-dups-healthcare-patient-portal-1754190932844 - All rights reserved</p>
          </div>
        </footer>
      </body>
    </html>
  )
}