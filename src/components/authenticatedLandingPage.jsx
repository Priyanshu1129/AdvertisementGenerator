// "use client";
// import Header from "./header";

// export default function AuthenticatedLandingPage({ creditPoints }) {
//   return (
//     <div className="landing-page">
//       {/* Header */}
//       <Header isAuthenticated={true} creditPoints={creditPoints} />

//       {/* Hero Section */}
//       <main className="hero">
//         <h2>Generate Engaging Content Instantly</h2>
//       </main>

//       {/* Custom Prompt Section */}
//       <section className="custom-prompt">
//         <div>
//           <p>Welcome to your personalized ad creation dashboard!</p>
//           <p>
//             Here, you can start generating unique ad copy tailored to your
//             needs.
//           </p>
//         </div>

//         {/* Input Box */}
//         <div className="input-container">
//           <input
//             type="text"
//             placeholder="Describe your content"
//             className="custom-input"
//           />
//           <button className="send-button">➤</button>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";
import Header from "./header";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
export default function AuthenticatedLandingPage({ creditPoints }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
      // Handle the file upload here
    }
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <Header isAuthenticated={true} creditPoints={creditPoints} />

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
          {/* File Upload Icon */}
          <label htmlFor="file-upload" className="file-upload-icon">
            <FiUpload />
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          {/* Text Input */}
          <input
            type="text"
            placeholder="Describe your content"
            className="custom-input"
          />
          <button className="send-button">
            <IoSend />
          </button>
        </div>
      </section>
    </div>
  );
}
