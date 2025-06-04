import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfoImg from "./portfo_img.JPG"; // Correct import for your image

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <header className="text-center mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Mohammad Hassaan</h1>
            <p className="text-lg text-gray-600">
              Python Developer | Data Analyst | Machine Learning Enthusiast
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="mailto:mdhassaan56@gmail.com" target="_blank"><FaEnvelope size={24} /></a>
              <a href="https://www.linkedin.com/in/mohammad-hassaan-455869236" target="_blank"><FaLinkedin size={24} /></a>
              <a href="https://github.com/MoHassaan" target="_blank"><FaGithub size={24} /></a>
            </div>
          </div>
          <img
            src={portfoImg}
            alt="Portfolio"
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white cursor-pointer"
            onClick={() => setShowModal(true)}
          />
        </div>
      </header>

      {/* Modal for enlarged image */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-lg shadow-lg p-4">
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl font-bold focus:outline-none"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={portfoImg}
              alt="Portfolio Large"
              className="max-w-[90vw] max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="p-4 bg-white rounded shadow">
          <p><strong>Languages:</strong> Python, SQL</p>
          <p><strong>Libraries:</strong> Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn</p>
          <p><strong>Visualization Tools:</strong> Power BI, Excel</p>
          <p><strong>Databases:</strong> MySQL</p>
          <p><strong>ML/DL:</strong> TensorFlow, Keras, PyTorch, OpenCV, Pillow</p>
          <p><strong>NLP:</strong> NLTK, SpaCy, WordCloud, Word2Vec</p>
          <p><strong>Development:</strong> Jupyter, PyCharm, VS Code, Flask, Streamlit, MLflow</p>
          <p><strong>AI Skills:</strong> Prompt Engineering</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold">
              <a
                href="https://recommendersystem02-6cvzfqucbbxdefpyu5gtj9.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                Integrated Recommendation System
              </a>
            </h3>
            <p>Unified content-based recommender for movies, music, and books using cosine similarity.</p>
            <a
              href="https://recommendersystem02-6cvzfqucbbxdefpyu5gtj9.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-500 underline"
            >
              View Live Demo
            </a>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold">Fashion Recommender System</h3>
            <p>Deep learning project using ResNet50 to suggest similar clothing items via image similarity.</p>
            <a href="https://github.com/MoHassaan/Fashion_Recommender_system" target="_blank" className="inline-block mt-2 text-blue-500 underline">View on GitHub</a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside bg-white p-4 rounded shadow">
          <li>
            100 Days of Code: The Complete Python Pro Bootcamp – <a href="https://drive.google.com/file/d/1bve38CwOivBIi432B2NITAZKiLUJc41x/view" className="text-blue-600 underline" target="_blank">View Certificate</a>
          </li>
          <li>
            Complete Data Analyst Bootcamp – <a href="https://drive.google.com/file/d/1hTKPuFy60yTkEQSpoJc43s7tT23hIDg6/view" className="text-blue-600 underline" target="_blank">View Certificate</a>
          </li>
          <li>
            Project EXPO 2022 – <a href="https://drive.google.com/file/d/1tmqyE_6ldE89I7wZUfniccgrH-Wx3Itx/view" className="text-blue-600 underline" target="_blank">View Certificate</a>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Publications</h2>
        <div className="p-4 bg-white rounded shadow">
          <p>
            <strong>Movies and Books Recommendation System Based on Cosine Similarity & K-Nearest Neighbour Algorithm</strong>
          </p>
          <p>
            Published in the International Scientific Journal of Engineering & Management (ISJEM), Volume 03, Issue 05, May 2024
          </p>
          <p>
            <strong>DOI:</strong> 10.55041/ISJEM02038
          </p>
          <p>
            <strong>Author:</strong> Mohammad Hassaan
          </p>
          <p>
            (Certified by EdTech Publishers, Bangalore, India)
          </p>
          <a
            href={require("./research_paper_cert.jpg")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-500 underline"
          >
            View Certificate
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
