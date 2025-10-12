import DecorativeElements from "../components/DecorativeElements";
import "./FirstPage.css";

function FirstPage({ onNavigate }) {
  const handleOpenInvitation = () => {
    onNavigate();
  };

  return (
    <div className="first-page romantic-pattern">
      <DecorativeElements />

      <div className="content-container">
        <div className="welcome-text">
          <p className="welcome-subtitle font-serif">
            Together with their families
          </p>
        </div>

        <div className="text-container">
          <h1 className="wedding-title font-display">
            The Wedding Celebration of
            <span className="couple-names"> Brillmont & Meralie</span>
          </h1>
        </div>

        <div className="date-info">
          <p className="wedding-date font-serif">December 20, 2025</p>
          <p className="wedding-location font-serif">Mandaue City</p>
        </div>

        <div className="button-container">
          <button
            className="open-invitation-btn"
            onClick={handleOpenInvitation}
          >
            <span className="btn-text">Open Invitation</span>
            <span className="btn-icon">💕</span>
          </button>
        </div>
      </div>

      {/* Romantic border decoration */}
      <div className="romantic-border">
        <div className="border-element border-1"></div>
        <div className="border-element border-2"></div>
        <div className="border-element border-3"></div>
        <div className="border-element border-4"></div>
      </div>
    </div>
  );
}

export default FirstPage;
