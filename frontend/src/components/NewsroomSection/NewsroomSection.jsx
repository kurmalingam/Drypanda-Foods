import React from "react";
import "./NewsroomSection.css";
import { Link } from "react-router-dom";
import { FaUserPlus, FaUserGraduate, FaBuilding } from "react-icons/fa"; 

const cardData = [
  {
    id: 1,
    icon: <FaUserPlus size={40} />, 
    title: "We're Hiring Full-time and Part-time Employees",
    badge: "💥 Coming Soon 💥",
    badgeClass: "bg-success",
    description: "Exciting career opportunities will be available shortly",
    colorClass: "text-success",
    btn: null,
  },
  {
    id: 2,
    icon: <FaUserGraduate size={40} />,
    title: "We're Hiring Interns!",
    badge: "Multiple Roles",
    badgeClass: "bg-primary",
    description: "Gain valuable experience with our internship program",
    colorClass: "text-primary",
    btn: { text: "Explore Now", link: "/internship" },
  },
  {
    id: 3,
    icon: <FaBuilding size={40} />,
    title: "New Office",
    badge: "Coming Soon",
    badgeClass: "bg-warning",
    description: "We're excited to open our new workspace",
    colorClass: "text-warning",
    btn: null,
  },
];

const NewsroomSection = () => {
  return (
    <section className="newsroom-section" id="newsroom-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="section-title mb-3 my-4">News Room</h2>
          <p className="section-subtitle text-muted mb-0">
            Stay updated with our latest announcements, hiring updates, and career opportunities.
          </p>
        </div>

        {/* Career Heading */}
        <h4 className="text-center text-primary mb-4" id="careers">
          CAREER AT DRYPANDA FOODS
        </h4>

        {/* Marquee */}
        <div className="mb-4" style={{textAlign:"center"}}>
          <span>Exciting Careers Await at Dry Panda Foods 💼 – Apply Now!</span>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {cardData.map((card) => (
            <div key={card.id} className="col-md-6 col-lg-4">
              <div className={`news-card ${card.colorClass}`}>
                <div className="news-icon">{card.icon}</div>
                <h3 className="news-title">{card.title}</h3>
                <div className={`news-badge ${card.badgeClass}`}>{card.badge}</div>
                <p className="news-desc">{card.description}</p>
                {card.btn && (
                  <Link to={card.btn.link} className="news-btn btn-primary">
                    {card.btn.text} <span style={{ marginLeft: "6px" }}>→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsroomSection;
