import React, { useEffect, useState } from "react";
import "./InternshipPopup.css";
import { FaUserGraduate } from "react-icons/fa6";
import { Link } from "react-router-dom"; // ✅ Import Link

const InternshipPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  useEffect(() => {
    setIsPopupVisible(true); // Show popup on page load
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const openPopup = () => {
    setIsPopupVisible(true);
  };

return (
    <>
      {/* Floating 🎓 Button */}
      {!isPopupVisible && (
        <div
          id="internship-bot-button"
          onClick={openPopup}
          title="View Internship Opportunities"
        >
          🎓
        </div>
      )}

      {/* Popup Box */}
      {isPopupVisible && (
        <div id="internship-popup">
          <div className="popup-header">
            Internship Opportunities
            <span className="popup-close" onClick={closePopup}>
              &times;
            </span>
          </div>
          <div className="popup-body d-flex flex-column justify-content-center align-items-center text-center p-3">
            <div className="news-icon text-primary mb-2">
              <FaUserGraduate size={32} />
            </div>
            <p className="mb-2">
              🚀 We're Hiring Interns! Step into your future with us!
            </p>
            {/* ✅ Using Link instead of <a> */}
            <Link to="/internship" className="btn btn-danger mt-2">
              Explore Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default InternshipPopup;
