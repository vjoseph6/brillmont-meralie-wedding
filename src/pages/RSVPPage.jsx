import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import db from "../configs/firebase";
import "./RSVPPage.css";

function RSVPPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    attendance: "",
    message: "",
  });
  const [guestId, setGuestId] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [guests, setGuests] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    attending: 0,
    notAttending: 0,
    withMessages: 0,
  });

  // Get next available guest ID
  useEffect(() => {
    const getNextGuestId = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "wedding_rsvp_guests")
        );
        const maxId = querySnapshot.docs.reduce((max, doc) => {
          const data = doc.data();
          return data.id > max ? data.id : max;
        }, 0);
        setGuestId(maxId + 1);
      } catch (error) {
        console.error("Error getting next guest ID:", error);
        setGuestId(1);
      }
    };
    getNextGuestId();
  }, []);

  // Real-time listener for guests data
  useEffect(() => {
    const q = query(
      collection(db, "wedding_rsvp_guests"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const guestsData = [];
      querySnapshot.forEach((doc) => {
        guestsData.push({ id: doc.id, ...doc.data() });
      });
      setGuests(guestsData);

      // Calculate statistics
      const total = guestsData.length;
      const attending = guestsData.filter(
        (guest) => guest.attendance === "Yes"
      ).length;
      const notAttending = guestsData.filter(
        (guest) => guest.attendance === "No"
      ).length;
      const withMessages = guestsData.filter(
        (guest) => guest.message && guest.message.trim() !== ""
      ).length;

      setStats({ total, attending, notAttending, withMessages });
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkDuplicateName = async (firstName, middleName, lastName) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "wedding_rsvp_guests")
      );
      return querySnapshot.docs.some((doc) => {
        const data = doc.data();
        return (
          data.firstName.toLowerCase() === firstName.toLowerCase() &&
          data.middleName.toLowerCase() === middleName.toLowerCase() &&
          data.lastName.toLowerCase() === lastName.toLowerCase()
        );
      });
    } catch (error) {
      console.error("Error checking duplicate:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Validate required fields
      if (
        !formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.attendance
      ) {
        setSubmitMessage(
          "⚠️ Please complete all required information before submitting."
        );
        setIsSubmitting(false);
        return;
      }

      // Prepare data
      const middleName = formData.middleName.trim() || "N/A";
      const firstName = formData.firstName.trim();
      const lastName = formData.lastName.trim();

      // Check for duplicates
      const isDuplicate = await checkDuplicateName(
        firstName,
        middleName,
        lastName
      );
      if (isDuplicate) {
        setSubmitMessage("❌ This name is already in the list.");
        setIsSubmitting(false);
        return;
      }

      // Submit to Firestore
      await addDoc(collection(db, "wedding_rsvp_guests"), {
        id: guestId,
        firstName,
        middleName,
        lastName,
        attendance: formData.attendance,
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
      });

      // Success
      setSubmitMessage("✅ Thank you! Your response has been recorded.");
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        attendance: "",
        message: "",
      });
      setGuestId((prev) => prev + 1);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setSubmitMessage("❌ An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminAccess = () => {
    if (adminPassword === "brillmoiattendance") {
      setShowAdmin(true);
      setAdminPassword("");
    } else {
      alert("❌ Incorrect password. Access denied.");
    }
  };

  const handleDeleteGuest = async (guestDocId) => {
    if (window.confirm("Are you sure you want to delete this guest entry?")) {
      try {
        await deleteDoc(doc(db, "wedding_rsvp_guests", guestDocId));
      } catch (error) {
        console.error("Error deleting guest:", error);
        alert("Error deleting guest entry.");
      }
    }
  };

  return (
    <div className="rsvp-page">
      <div className="rsvp-container">
        <h1 className="rsvp-title font-display">RSVP</h1>
        <p className="rsvp-subtitle font-serif">
          Please let us know if you'll be joining us for our special day
        </p>

        {/* Guest Registration Form */}
        <div className="form-section">
          <div className="guest-id-display">
            <span className="guest-id-label">Guest ID:</span>
            <span className="guest-id-value">{guestId}</span>
          </div>

          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="middleName" className="form-label">
                Middle Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Leave blank for 'N/A'"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Will you attend? <span className="required">*</span>
              </label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="attendance"
                    value="Yes"
                    checked={formData.attendance === "Yes"}
                    onChange={handleInputChange}
                    className="radio-input"
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-text">Yes</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="attendance"
                    value="No"
                    checked={formData.attendance === "No"}
                    onChange={handleInputChange}
                    className="radio-input"
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-text">No</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Leave us a message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows="4"
                placeholder="Share your thoughts or well wishes..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? "Submitting..." : "Submit Response"}
            </button>

            {submitMessage && (
              <div
                className={`submit-message ${
                  submitMessage.includes("✅") ? "success" : "error"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>

        {/* Divider */}
        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text font-serif">Organizer Access</span>
          <div className="divider-line"></div>
        </div>

        {/* Admin Access */}
        <div className="admin-section">
          {!showAdmin ? (
            <div className="admin-login">
              <h3 className="admin-title font-serif">Organizer Dashboard</h3>
              <div className="password-input-group">
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter password"
                  className="password-input"
                />
                <button onClick={handleAdminAccess} className="admin-btn">
                  Access Dashboard
                </button>
              </div>
            </div>
          ) : (
            <div className="admin-dashboard">
              <div className="dashboard-header">
                <h3 className="dashboard-title font-display">
                  Guest Dashboard
                </h3>
                <button
                  onClick={() => setShowAdmin(false)}
                  className="logout-btn"
                >
                  Logout
                </button>
              </div>

              {/* Statistics Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">{stats.total}</div>
                  <div className="stat-label">Total Responses</div>
                </div>
                <div className="stat-card attending">
                  <div className="stat-number">{stats.attending}</div>
                  <div className="stat-label">Attending</div>
                </div>
                <div className="stat-card not-attending">
                  <div className="stat-number">{stats.notAttending}</div>
                  <div className="stat-label">Not Attending</div>
                </div>
                <div className="stat-card messages">
                  <div className="stat-number">{stats.withMessages}</div>
                  <div className="stat-label">With Messages</div>
                </div>
              </div>

              {/* Guests Table */}
              <div className="guests-table-container">
                <table className="guests-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Middle Name</th>
                      <th>Last Name</th>
                      <th>Attendance</th>
                      <th>Message</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.map((guest) => (
                      <tr key={guest.id}>
                        <td>{guest.id}</td>
                        <td>{guest.firstName}</td>
                        <td>{guest.middleName}</td>
                        <td>{guest.lastName}</td>
                        <td>
                          <span
                            className={`attendance-badge ${guest.attendance.toLowerCase()}`}
                          >
                            {guest.attendance}
                          </span>
                        </td>
                        <td className="message-cell">
                          {guest.message ? (
                            <span
                              className="message-text"
                              title={guest.message}
                            >
                              {guest.message.length > 50
                                ? `${guest.message.substring(0, 50)}...`
                                : guest.message}
                            </span>
                          ) : (
                            <span className="no-message">-</span>
                          )}
                        </td>
                        <td>
                          <button
                            onClick={() => handleDeleteGuest(guest.id)}
                            className="delete-btn"
                            title="Delete guest"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RSVPPage;
