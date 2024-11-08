// // app/page.js
// "use client";

// import { SignInButton } from "@clerk/nextjs";

// export default function LandingPage() {
//   return (
//     <div className="landing-page">
//       {/* Header */}
//       <header className="header">
//         <div className="logo">Nextacular</div>
//         <nav>
//           <a href="#guides">Guides</a>
//           <a href="#pricing">Pricing</a>
//           <a href="#blog">Blog</a>
//           <SignInButton mode="modal">
//             <button className="login-button">Login</button>
//           </SignInButton>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <main className="hero">
//         <h1>Build SaaS platforms</h1>
//         <h2>like never before</h2>
//         <p>Quickly build landing pages that will help you get results fast</p>
//         <div className="cta-buttons">
//           <SignInButton mode="modal">
//             <button className="get-started-button">Get Started</button>
//           </SignInButton>
//           <button className="live-demo-button">Live Demo</button>
//         </div>
//       </main>

//       {/* Features Section */}
//       <section className="features">
//         <h3>FEATURES</h3>
//         <h4>A better way to build your SaaS</h4>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
//       </section>

//       {/* Styles */}
//       <style jsx>{`
//         .landing-page {
//           font-family: Arial, sans-serif;
//         }

//         /* Header Styles */
//         .header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 20px 40px;
//         }

//         .logo {
//           font-size: 24px;
//           font-weight: bold;
//         }

//         .header nav a {
//           margin: 0 15px;
//           color: #333;
//           text-decoration: none;
//           font-weight: 500;
//         }

//         .login-button {
//           background-color: #0070f3;
//           color: white;
//           padding: 8px 16px;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//         }

//         /* Hero Section Styles */
//         .hero {
//           text-align: center;
//           margin-top: 50px;
//         }

//         .hero h1 {
//           font-size: 48px;
//           font-weight: 700;
//           margin-bottom: 10px;
//         }

//         .hero h2 {
//           font-size: 36px;
//           color: #0070f3;
//           font-weight: 700;
//           margin-bottom: 20px;
//         }

//         .hero p {
//           font-size: 18px;
//           color: #666;
//           margin-bottom: 30px;
//         }

//         .cta-buttons {
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//         }

//         .get-started-button,
//         .live-demo-button {
//           padding: 12px 24px;
//           font-size: 18px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }

//         .get-started-button {
//           background-color: #0070f3;
//           color: white;
//         }

//         .live-demo-button {
//           background-color: #f5f5f5;
//           color: #333;
//           border: 1px solid #ddd;
//         }

//         /* Features Section Styles */
//         .features {
//           text-align: center;
//           padding: 50px 20px;
//         }

//         .features h3 {
//           color: #0070f3;
//           font-weight: 600;
//           letter-spacing: 2px;
//         }

//         .features h4 {
//           font-size: 24px;
//           font-weight: 700;
//           margin-top: 10px;
//         }

//         .features p {
//           color: #666;
//           font-size: 16px;
//           margin-top: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }

// app/page.js
"use client";

import { SignInButton } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">AdGenAI</div>
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
          <SignInButton mode="modal">
            <button className="login-button">Login</button>
          </SignInButton>
        </nav>
      </header>

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

      {/* Styles */}
      <style jsx>{`
        .landing-page {
          font-family: Arial, sans-serif;
        }

        /* Header Styles */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
        }

        .header nav a {
          margin: 0 15px;
          color: #333;
          text-decoration: none;
          font-weight: 500;
        }

        .login-button {
          background-color: #0070f3;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        /* Hero Section Styles */
        .hero {
          text-align: center;
          margin-top: 50px;
        }

        .hero h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .hero h2 {
          font-size: 36px;
          color: #0070f3;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero p {
          font-size: 18px;
          color: #666;
          margin-bottom: 30px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .get-started-button,
        .live-demo-button {
          padding: 12px 24px;
          font-size: 18px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .get-started-button {
          background-color: #0070f3;
          color: white;
        }

        .live-demo-button {
          background-color: #f5f5f5;
          color: #333;
          border: 1px solid #ddd;
        }

        /* Features Section Styles */
        .features {
          text-align: center;
          padding: 50px 20px;
        }

        .features h3 {
          color: #0070f3;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .features h4 {
          font-size: 24px;
          font-weight: 700;
          margin-top: 10px;
        }

        .features p {
          color: #666;
          font-size: 16px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
