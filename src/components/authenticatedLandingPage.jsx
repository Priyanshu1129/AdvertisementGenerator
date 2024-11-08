"use client";

import { UserButton } from "@clerk/nextjs";
import Header from "./header";

export default function AuthenticatedLandingPage() {
  return (
    <div className="landing-page">
      {/* Header */}
      <Header isAuthenticated={true} />

      {/* Hero Section */}
      <main className="hero">
        <h2>Generate Engaging Content Instantly</h2>
      </main>

      {/* Custom Prompt Section */}
      <section className="custom-prompt">
        <div>
          <p>Welcome to your personalized ad creation dashboard!</p>
          <p>
            Here, you can start generating unique ad copy tailored to your
            needs.
          </p>
        </div>

        {/* Input Box */}
        <div className="input-container">
          <input
            type="text"
            placeholder="Describe your content"
            className="custom-input"
          />
          <button className="send-button">➤</button>
        </div>
      </section>
    </div>
  );
}
