"use client";
import Header from "./header";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import { MdClose } from "react-icons/md";

export default function AuthenticatedLandingPage({ creditPoints }) {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [outputImage, setOutputImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = async () => {
    if (!file || !description) {
      alert("Please provide an image and description.");
      return;
    }

    setLoading(true);
    setOutputImage(null);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);

    try {
      const response = await fetch("http://localhost:5000/process", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setOutputImage(imageUrl);
      } else {
        console.error("Image processing failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-page">
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

          {file && (
            <div className="image-preview">
              <img
                src={URL.createObjectURL(file)}
                alt="Uploaded Preview"
                className="preview-image"
              />
              <button onClick={handleRemoveFile} className="remove-button">
                <MdClose />
              </button>
            </div>
          )}

          <input
            type="text"
            placeholder="Describe your content"
            className="custom-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            className="send-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Processing..." : <IoSend />}
          </button>
        </div>

        {/* Display Output Image */}
        {loading && <p>Loading...</p>}

        {outputImage && (
          <div className="output-image">
            <img src={outputImage} alt="Generated Output" />
          </div>
        )}
      </section>
    </div>
  );
}
