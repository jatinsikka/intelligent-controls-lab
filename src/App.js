import React, { useState } from "react";

const pages = {
  homepage: (
    <>
      <h1 className="text-4xl font-bold text-red-900 mb-4 border-b-4 border-red-800 pb-2">Intelligent Controls Lab</h1>
      <p className="text-lg max-w-3xl mt-4">
        Department of Mechanical and Aerospace Engineering, NC State University
      </p>
    </>
  ),
  research: (
    <>
      <h2 className="text-3xl font-semibold text-red-900 mb-4 border-b-2 border-red-700 pb-1">Research Areas</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Adaptive and Robust Control</li>
        <li>Human-Robot Collaboration</li>
        <li>Precision Mechatronics</li>
        <li>Autonomous Systems</li>
        <li>Machine Learning for Control</li>
      </ul>
    </>
  ),
  people: (
    <>
      <h2 className="text-3xl font-semibold text-red-900 mb-4 border-b-2 border-red-700 pb-1">People</h2>
      <ul className="space-y-3">
        <li><strong>Dr. [Faculty Name]</strong> – Principal Investigator</li>
        <li><strong>[PhD Student]</strong> – PhD Student</li>
        <li><strong>[MS Student]</strong> – MS Student</li>
      </ul>
    </>
  ),
  publications: (
    <>
      <h2 className="text-3xl font-semibold text-red-900 mb-4 border-b-2 border-red-700 pb-1">Conference and Journal Publications</h2>
      <div className="space-y-6">
        <div>
          <p className="font-semibold">One Filter to Deploy Them All: Robust Safety for Quadrupedal Navigation in Unknown Environments</p>
          <p>Albert Lin, Shuang Peng, Somil Bansal<br />
          <i>arXiv, 2024</i> <a href="https://example.com/pdf1" target="_blank" rel="noopener noreferrer" className="text-red-600">[PDF]</a> <a href="https://example.com/website1" target="_blank" rel="noopener noreferrer" className="text-red-600">[Website]</a></p>
        </div>
        <div>
          <p className="font-semibold">Enhancing Safety and Robustness of Vision-Based Controllers via Reachability Analysis</p>
          <p>Kaustav Chakraborty, Aryaman Gupta, Somil Bansal<br />
          <i>arXiv, 2024</i> <a href="https://example.com/pdf2" target="_blank" rel="noopener noreferrer" className="text-red-600">[PDF]</a> <a href="https://example.com/website2" target="_blank" rel="noopener noreferrer" className="text-red-600">[Website]</a></p>
        </div>
      </div>
    </>
  ),
  contact: (
    <>
      <h2 className="text-3xl font-semibold text-red-900 mb-4 border-b-2 border-red-700 pb-1">Contact</h2>
      <p>Email: [lab-email@ncsu.edu]</p>
      <p>Location: Engineering Building [I/II/III], NC State University</p>
    </>
  ),
};

export default function App() {
  const [activePage, setActivePage] = useState("homepage");

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900 font-sans">
      <aside className="w-64 bg-gray-100 border-r border-gray-300 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-red-800 mb-10 border-b-2 border-red-700 pb-2">IC Lab</h2>
          <nav className="space-y-4">
            {Object.keys(pages).map((key) => (
              <button
                key={key}
                onClick={() => setActivePage(key)}
                className={`block w-full text-left text-lg px-2 py-1 rounded hover:bg-red-100 ${
                  activePage === key ? "bg-red-200 text-red-900 font-semibold" : ""
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-12 bg-white">
        <div className="max-w-5xl mx-auto">
          {pages[activePage]}
        </div>
      </main>
    </div>
  );
}
