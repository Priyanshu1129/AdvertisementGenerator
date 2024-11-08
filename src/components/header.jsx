"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Header({ isAuthenticated }) {
  return (
    <header className="header">
      <div className="logo">AdGenAI</div>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>
        {isAuthenticated ? (
          <UserButton />
        ) : (
          <SignInButton mode="modal">
            <button className="login-button">Login</button>
          </SignInButton>
        )}
      </nav>
    </header>
  );
}
