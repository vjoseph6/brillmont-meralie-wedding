import { useState } from "react";
import Navigation from "../components/Navigation";
import CountdownTimer from "../components/CountdownTimer";
import DecorativeElements from "../components/DecorativeElements";
import RSVPPage from "./RSVPPage";
import EntouragePage from "./EntouragePage";
import VenuePage from "./VenuePage";
import "./InvitationPage.css";

function InvitationPage() {
  const [activeSection, setActiveSection] = useState("wedding");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderWeddingContent = () => (
    <div className="wedding-content">
      {/* Our Love Story Section */}
      <section className="love-story">
        <h2>Our Love Story</h2>
        <div className="story-content">
          <p>
            Our love story is a masterpiece painted with the hues of shared
            laughter, tender moments, and the strength of our bond. From the
            first flutter of our hearts to this momentous day, every step we've
            taken together has woven the fabric of our journey, creating a
            tapestry of love, trust, and unwavering support.
          </p>
          <p>
            As we stand hand in hand, surrounded by the love of our cherished
            ones, I am filled with profound gratitude for the love we share and
            the adventures that await us. With you by my side, I am emboldened
            to face any challenge and embrace every joy that life presents.
            Together, we are ready to script the next chapter of our love
            story—one that will be filled with boundless love, cherished
            memories, and the promise of forever.
          </p>
          <p className="signature">With all my heart,</p>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="countdown-section">
        <CountdownTimer />
      </section>

      {/* Save the Date */}
      <section className="save-the-date">
        <h2>Save the Date</h2>
        <div className="date-info">
          <h3>The Wedding</h3>
          <div className="when-where">
            <div className="date-item">
              <span className="icon">📅</span>
              <span>Saturday, December 20, 2025</span>
            </div>
            <div className="date-item">
              <span className="icon">📍</span>
              <span>Mandaue City</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2>Our Save-the-Date Video</h2>
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src="https://drive.google.com/file/d/1_8B7joSYCIYS-K_6Xzmj7w6WG3Ut-AhN/preview"
              allow="autoplay"
              allowFullScreen
              title="Save the Date Video"
            ></iframe>
          </div>
        </div>
      </section>

      {/* We Look Forward Section */}
      <section className="look-forward">
        <h2>We Look Forward to Seeing You!</h2>
        <p>
          Now, the time has come for them to embark on their greatest journey
          yet—to unite their lives in the eternal bond of marriage. They invite
          you to witness the merging of their worlds, the fusion of their
          hearts, and the creation of their love story.
        </p>
      </section>

      {/* Dress Code */}
      <section className="dress-code">
        <h2>Dress Code</h2>
        <div className="dress-info">
          <h3>What to Wear:</h3>
          <div className="dress-items">
            <div className="dress-item">
              <span className="icon">👔</span>
              <span>Gentlemen: Barong or Polo with Black Pants</span>
            </div>
            <div className="dress-item">
              <span className="icon">👗</span>
              <span>Ladies: Gown or Dress</span>
            </div>
            <div className="dress-item">
              <span className="icon">🎉</span>
              <span>Guests: Semi-Formal</span>
            </div>
          </div>
          <p className="color-preference">
            We'd love to see you in these colors:{" "}
            <strong>Nude or any Neutral Shades</strong>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>CAN I BRING A DATE OR PLUS-ONE?</h3>
            <p>
              Unfortunately, no. Due to limited seating, we can only accommodate
              guests listed on our invitation. Please respect our wishes as we
              want to keep our wedding an intimate celebration.
            </p>
          </div>

          <div className="faq-item">
            <h3>WHAT TIME SHOULD I ARRIVE?</h3>
            <p>
              The ceremony will begin at 3:00 PM. Please arrive 15–30 minutes
              early to park and find your seat.
            </p>
          </div>

          <div className="faq-item">
            <h3>WHAT IF I'M LATE TO THE CEREMONY?</h3>
            <p>
              If you arrive late, please do not interrupt the ceremony. You may
              watch from a distance, wait in your car, or proceed to the
              reception area. Kindly avoid taking a seat during the ceremony to
              prevent disruptions.
            </p>
          </div>

          <div className="faq-item">
            <h3>CAN WE TAKE PHOTOS OR VIDEOS DURING THE CEREMONY?</h3>
            <p>
              Our ceremony will be unplugged to keep it solemn. Please refrain
              from taking pictures or videos during the wedding. After we are
              announced as Husband and Wife, you are free to take photos. Please
              avoid blocking the view of our professional photo and video team.
              We'll share the official photos once they're ready.
            </p>
          </div>

          <div className="faq-item">
            <h3>CAN WE SIT ANYWHERE AT THE RECEPTION?</h3>
            <p>
              No. The seating arrangement has been carefully planned for
              everyone's comfort. You'll be seated with your family and friends.
            </p>
          </div>

          <div className="faq-item">
            <h3>WHAT TIME WILL FOOD AND DRINKS BE SERVED?</h3>
            <p>
              Appetizers and refreshments will be available right after the
              ceremony. Dinner will follow after the couple's first dance. Fun
              activities will also be provided during this time.
            </p>
          </div>

          <div className="faq-item">
            <h3>DO YOU HAVE ANY PREFERENCE FOR WEDDING GIFTS?</h3>
            <p>
              Your presence is the best gift we could ask for. However, if you
              wish to give something, monetary gifts to help us build our
              forever home will be greatly appreciated.
            </p>
          </div>

          <div className="faq-item">
            <h3>WHEN IS THE APPROPRIATE TIME TO LEAVE?</h3>
            <p>
              The program will end around 10:00 PM after the Same Day Edit Video
              is shown. Please stay and enjoy the celebration—don't eat and run!
            </p>
          </div>

          <div className="faq-item">
            <h3>DO WE REALLY NEED TO RSVP?</h3>
            <p>
              Yes. This helps us finalize catering and seating arrangements.
              Please confirm your attendance by responding to the RSVP on this
              e-invitation page. If your availability changes after responding,
              please let us know as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Private Invitation */}
      <section className="private-invitation">
        <h2>Private Invitation</h2>
        <p>
          This invitation is strictly private. Our wedding will be an intimate
          event with only our closest family and friends.
        </p>
        <p>
          Please do not share this invitation with anyone else. Thank you for
          understanding.
        </p>
      </section>
    </div>
  );

  const renderOtherSections = () => {
    if (activeSection === "rsvp") {
      return <RSVPPage />;
    }
    if (activeSection === "entourage") {
      return <EntouragePage />;
    }
    if (activeSection === "venue") {
      return <VenuePage />;
    }

    return (
      <div className="coming-soon">
        <h2>
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
        </h2>
        <p>This section is coming soon!</p>
      </div>
    );
  };

  return (
    <div className="invitation-page romantic-pattern">
      <DecorativeElements />
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <div className="page-content">
        {activeSection === "wedding"
          ? renderWeddingContent()
          : renderOtherSections()}
      </div>
    </div>
  );
}

export default InvitationPage;
