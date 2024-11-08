"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Header({ isAuthenticated, creditPoints }) {
  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <div className="logo">AdGenAI</div>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>
      </div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {isAuthenticated ? (
          <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <div className="credit-points">
              <span className="coin-icon">💰</span> {creditPoints} Coins
            </div>
            <UserButton />
          </div>
        ) : (
          <SignInButton mode="modal">
            <button className="login-button">Login</button>
          </SignInButton>
        )}
      </nav>
    </header>
  );
}
