import { useState, useEffect } from "react";
import FirstPage from "./pages/FirstPage";
import InvitationPage from "./pages/InvitationPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("first");

  const navigateToInvitation = () => {
    setCurrentPage("invitation");
  };

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Change to "instant" for immediate scroll
    });
  }, [currentPage]);

  return (
    <div className="app">
      {currentPage === "first" ? (
        <FirstPage onNavigate={navigateToInvitation} />
      ) : (
        <InvitationPage />
      )}
    </div>
  );
}

export default App;
