"use client";
import "./globals.css"
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import LandingPage from "@/components/landingPage";
import AuthenticatedLandingPage from "@/components/authenticatedLandingPage";

export default function HomePage() {
  const { user, isSignedIn } = useUser();
  const [creditPoints, setCreditPoints] = useState(null);

  useEffect(() => {
    if (user) {
      const addCreditPoints = async () => {
        if (user && !user.publicMetadata.creditPoints) {
          await fetch('/api/users/creditPoints', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: user.id }),  // Only send the ID
          });
        }
      };
      addCreditPoints();
      setCreditPoints(user.publicMetadata.creditPoints || 100);
    }
  }, [user]);

  // If user is signed in, show the welcome message and credit points
  if (isSignedIn) {
    return (
      <AuthenticatedLandingPage creditPoints={creditPoints} />
    );
  }

  // Otherwise, show the landing page with the "Get Started" button
  return (
    <LandingPage />
  );
}



