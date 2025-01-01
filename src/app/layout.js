// src/app/layout.js
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Landing Page - Papan Peringkat</title>
      </head>
      <body>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-blue-500 p-4 text-white text-center">
            <h1 className="text-2xl font-bold">Landing Page - Papan Peringkat</h1>
          </header>
          <main className="p-4">{children}</main>
          <footer className="bg-blue-500 p-4 text-white text-center mt-4">
            <p>&copy; 2024 Game Papan Peringkat</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
