// "use client";
// import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// import Link from 'next/link';
// import LandingPage from "@/components/landingPage";

// export default function HomePage() {
//   const { user, isSignedIn } = useUser();
//   const [creditPoints, setCreditPoints] = useState(null);

//   useEffect(() => {
//     if (user) {
//       const addCreditPoints = async () => {
//         if (user && !user.publicMetadata.creditPoints) {
//           await fetch('/api/users/creditPoints', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ id: user.id }),  // Only send the ID
//           });
//         }
//       };
//       addCreditPoints();
//       setCreditPoints(user.publicMetadata.creditPoints || 100);
//     }
//   }, [user]);

//   // If user is signed in, show the welcome message and credit points
//   if (isSignedIn) {
//     return (
//       <div>
//         <p>Welcome, {user?.firstName}</p>
//         <p>Your credit points: {creditPoints}</p>
//         <UserButton />
//       </div>
//     );
//   }

//   // Otherwise, show the landing page with the "Get Started" button
//   return (
//     <LandingPage />
//   );
// }


// app/page.js
"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import LandingPage from "@/components/landingPage";

export default function HomePage() {
  const { user, isSignedIn } = useUser();
  const [creditPoints, setCreditPoints] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (user) {
      const addCreditPoints = async () => {
        if (user && !user.publicMetadata.creditPoints) {
          await fetch('/api/users/creditPoints', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: user.id }), // Only send the ID
          });
        }
      };
      addCreditPoints();
      setCreditPoints(user.publicMetadata.creditPoints || 100);
    }
  }, [user]);

  const handleGenerate = async () => {
    // Example: Simulate generating advertisement content
    const response = await fetch('/api/generateAd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, image: selectedImage }),
    });
    const data = await response.json();
    setGeneratedContent(data.result);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  if (isSignedIn) {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <div className="logo">AdGenAI</div>
          <div className="user-info">
            <p>Credit Points: {creditPoints}</p>
            <UserButton />
          </div>
        </header>

        <main className="content">
          <h1>What can I help with?</h1>
          <div className="input-section">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt..."
              className="prompt-input"
            ></textarea>
            <input type="file" onChange={handleImageUpload} className="image-upload" />
            <button onClick={handleGenerate} className="generate-button">Generate</button>
          </div>

          {generatedContent && (
            <div className="output-section">
              <h2>Generated Content</h2>
              <p>{generatedContent}</p>
            </div>
          )}
        </main>

        {/* Styles */}
        <style jsx>{`
          .dashboard {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: #1e1e1e;
            color: #ffffff;
            min-height: 100vh;
          }

          .dashboard-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px;
            background-color: #2a2a2a;
          }

          .logo {
            font-size: 24px;
            font-weight: bold;
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .content {
            text-align: center;
            max-width: 600px;
            margin-top: 50px;
          }

          .content h1 {
            font-size: 32px;
            font-weight: bold;
            color: #cccccc;
          }

          .input-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
          }

          .prompt-input {
            width: 100%;
            padding: 15px;
            border: none;
            outline: none;
            border-radius: 24px;
            background-color: #2a2a2a;
            color: #ffffff;
            font-size: 16px;
            min-height: 50px;
            resize: none;
          }

          .prompt-input::placeholder {
            color: #888888;
          }

          .image-upload {
            background-color: #333;
            color: #ffffff;
            border: 1px solid #444;
            padding: 10px;
            border-radius: 5px;
          }

          .generate-button {
            background-color: #0070f3;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
          }

          .output-section {
            margin-top: 30px;
            text-align: left;
          }

          .output-section h2 {
            font-size: 24px;
            color: #0070f3;
          }

          .output-section p {
            font-size: 18px;
            color: #333;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #ddd;
          }
        `}</style>
      </div>
    );
  }

  return <LandingPage />;
}
