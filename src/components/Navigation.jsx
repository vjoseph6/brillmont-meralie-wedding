import { useState } from "react";
import "./Navigation.css";

function Navigation({ activeSection, onSectionChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "wedding", label: "Wedding" },
    { id: "rsvp", label: "RSVP" },
    { id: "entourage", label: "Entourage" },
    { id: "gallery", label: "Gallery" },
    { id: "venue", label: "Venue" },
  ];

  const handleSelect = (id) => {
    // Scroll to top instantly when navigation item is clicked
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Change to "instant" for immediate scroll
    });

    onSectionChange(id);
    setMenuOpen(false); // close menu after selection (mobile)
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Brillmont & Meralie</h2>
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {sections.map((section) => (
            <li key={section.id} className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === section.id ? "active" : ""
                }`}
                onClick={() => handleSelect(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
        <div
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMenuOpen((o) => !o);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
