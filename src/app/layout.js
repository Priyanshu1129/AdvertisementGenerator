"use client";
import { ClientSessionProvider } from "../components"; // Adjust path as needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body key="unique-body">
        <ClientSessionProvider>
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}




