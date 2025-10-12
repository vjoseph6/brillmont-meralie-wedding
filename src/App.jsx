import { useState } from "react";
import FirstPage from "./pages/FirstPage";
import InvitationPage from "./pages/InvitationPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("first");

  const navigateToInvitation = () => {
    setCurrentPage("invitation");
  };

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
