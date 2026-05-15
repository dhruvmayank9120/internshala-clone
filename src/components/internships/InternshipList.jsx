import "./internshipList.css";

function InternshipList({
  internships,
  loading,
}) {

  return (
    <div className="internship-list">

      {loading && (
        <div className="loading-state">

          <h2>Loading internships...</h2>

        </div>
      )}

      {!loading && internships.length === 0 && (
        <div className="empty-state">

          <h2>No internships found</h2>

          <p>
            Try changing your filters
          </p>

        </div>
      )}

      {!loading && internships.map((internship, index) => (

        <div
          className="internship-card"
          key={index}
        >

          <div className="card-header">

            <div className="actively-hiring">
              Actively hiring
            </div>

            <div className="bookmark-btn">
              ♡
            </div>

          </div>

          <div className="card-top">

            <div>

              <h3>
                {internship.title}
              </h3>

              <p className="company-name">
                {internship.company_name}
              </p>

            </div>

            <img
              src="https://internshala.com/static/images/search/placeholder_logo.svg"
              alt="company-logo"
              className="company-logo"
            />

          </div>

          <div className="internship-details">

            <div className="detail-item">

              <span>📍</span>

              <p>
                {
                  internship.location_names?.[0]
                  || "Work from home"
                }
              </p>

            </div>

            <div className="detail-item">

              <span>💰</span>

              <p>
                {
                  internship.stipend?.salary
                  || "Not disclosed"
                }
              </p>

            </div>

            <div className="detail-item">

              <span>🗓</span>

              <p>
                {
                  internship.duration
                  || "N/A"
                }
              </p>

            </div>

          </div>

          <p className="internship-description">

            Support international business development,
            communication, operations, research and
            collaborative team activities.

          </p>

          <div className="skills-row">

            <span>
              English Proficiency
            </span>

            <span>
              Communication
            </span>

            <span>
              Marketing
            </span>

          </div>

          <div className="card-footer">

            <div className="footer-left">

              <div className="posted-badge">
                🟢 Posted recently
              </div>

              <div className="ppo-badge">
                💼 Job offer
              </div>

            </div>

            <button>
              View details
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default InternshipList;