import "./VenuePage.css";
import HolyFamilyImage from "../assets/images/HolyFamily.jpg";
import VenueImage from "../assets/images/Venue.jpg";

function VenueCard({ title, location, imageUrl, mapHref, mapLabel, icon }) {
  return (
    <section className="venue-card">
      <div className="venue-media">
        <div
          className="venue-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="venue-details">
        <div className="venue-header">
          <span className="venue-icon" aria-hidden="true">
            {icon}
          </span>
          <h2 className="venue-title font-display">{title}</h2>
        </div>
        <p className="venue-location font-serif">{location}</p>
        <a
          className="venue-map-link"
          href={mapHref}
          target="_blank"
          rel="noreferrer"
        >
          {mapLabel || "Open in Google Maps ↗"}
        </a>
      </div>
    </section>
  );
}

function VenuePage() {
  // Local images from assets
  const ceremonyImage = HolyFamilyImage;
  const receptionImage = VenueImage;

  return (
    <div className="venue-page">
      <div className="venue-container">
        <header className="venue-hero">
          <h1 className="venue-heading font-display">Wedding Venue</h1>
          <p className="venue-subtitle font-serif">
            We warmly invite you to celebrate with us in these special places.
          </p>
        </header>

        <VenueCard
          title="Ceremony"
          location="Holy Family Church, Maguikay, Mandaue City"
          imageUrl={ceremonyImage}
          mapHref="https://maps.app.goo.gl/DhXWnihLuYnJjzBD9"
          mapLabel="Holy Family Parish – Google Maps"
          icon="⛪"
        />

        <VenueCard
          title="Reception"
          location="Paradise Garden Events Pavilion, H. Abellana St., Jagobiao, Mandaue City"
          imageUrl={receptionImage}
          mapHref="https://maps.app.goo.gl/2tzfQn9WCAH82KAj9"
          mapLabel="Paradise Garden Events Pavilion – Google Maps"
          icon="🎉"
        />
      </div>
    </div>
  );
}

export default VenuePage;
