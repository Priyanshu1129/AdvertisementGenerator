"use client";
import Header from "./Header";
import { SignInButton } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header */}
      <Header isAuthenticated={false} />

      {/* Hero Section */}
      <main className="hero">
        <h1>Create Ads with AI</h1>
        <h2>Generate Engaging Content Instantly</h2>
        <p>
          Use advanced AI to produce ad copy that grabs attention and drives
          conversions.
        </p>
        <div className="cta-buttons">
          <SignInButton mode="modal">
            <button className="get-started-button">Get Started</button>
          </SignInButton>
          <button className="live-demo-button">Live Demo</button>
        </div>
      </main>

      {/* Features Section */}
      <section className="features" id="features">
        <h3>FEATURES</h3>
        <h4>Revolutionize Your Advertising Strategy</h4>
        <p>
          Leverage AI to generate personalized, high-impact ads effortlessly.
        </p>
      </section>
    </div>
  );
}
