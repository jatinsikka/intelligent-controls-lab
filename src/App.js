import React, { useState } from "react";

const pages = {
  homepage: (
    <>
      <h1 className="text-4xl font-bold mb-4">Intelligent Controls Lab</h1>
      <p className="text-lg max-w-3xl">
        Department of Mechanical and Aerospace Engineering, NC State University
      </p>
    </>
  ),
  research: (
    <>
      <h2 className="text-3xl font-semibold mb-4">Research Areas</h2>
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
      <h2 className="text-3xl font-semibold mb-4">People</h2>
      <ul className="space-y-3">
        <li><strong>Dr. [Faculty Name]</strong> – Principal Investigator</li>
        <li><strong>[PhD Student]</strong> – PhD Student</li>
        <li><strong>[MS Student]</strong> – MS Student</li>
      </ul>
    </>
  ),
  publications: (
    <>
      <h2 className="text-3xl font-semibold mb-4">Publications</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>[Author], "[Title]," <i>[Journal]</i>, [Year].</li>
        <li>[Author], "[Title]," <i>[Conference]</i>, [Year].</li>
      </ul>
    </>
  ),
  contact: (
    <>
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>Email: [lab-email@ncsu.edu]</p>
      <p>Location: Engineering Building [I/II/III], NC State University</p>
    </>
  ),
};

export default function App() {
  const [activePage, setActivePage] = useState("homepage");

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <aside className="w-64 bg-white border-r p-6">
        <h2 className="text-2xl font-bold text-red-800 mb-8">IC Lab</h2>
        <nav className="space-y-4">
          {Object.keys(pages).map((key) => (
            <button
              key={key}
              onClick={() => setActivePage(key)}
              className={`block w-full text-left px-2 py-1 rounded hover:bg-red-100 ${
                activePage === key ? "bg-red-200" : ""
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <div className="max-w-4xl mx-auto">
          {pages[activePage]}
        </div>
      </main>
    </div>
  );
}
