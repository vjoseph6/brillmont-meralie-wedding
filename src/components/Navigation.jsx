import { useState } from "react";
import "./Navigation.css";

function Navigation({ activeSection, onSectionChange }) {
  const sections = [
    { id: "wedding", label: "Wedding" },
    { id: "rsvp", label: "RSVP" },
    { id: "entourage", label: "Entourage" },
    { id: "gallery", label: "Gallery" },
    { id: "venue", label: "Venue" },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Brillmont & Meralie</h2>
        </div>
        <ul className="nav-menu">
          {sections.map((section) => (
            <li key={section.id} className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === section.id ? "active" : ""
                }`}
                onClick={() => onSectionChange(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="nav-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;


