import "./navbar.css";

function Navbar() {

  return (

    <div>

      <div className="top-navbar-strip">

        <p>
          Get job ready in Full Stack
          Development with 100%
          classroom training & career support.
        </p>

        <span>
          Know more
        </span>

      </div>

      <nav className="main-navbar">

        <div className="navbar-left-section">

          <img
            src="https://internshala.com/static/images/common/new_internshala_logo.svg"
            alt="internshala-logo"
            className="internshala-logo"
          />

        </div>

        <div className="navbar-right-section">

          <div className="navbar-item active-nav">

            Internships

            <span className="dropdown-icon">
              ▼
            </span>

          </div>

          <div className="navbar-item">

            Courses

            <span className="offer-badge">
              OFFER
            </span>

            <span className="dropdown-icon">
              ▼
            </span>

          </div>

          <div className="navbar-item">

            Jobs

            <span className="dropdown-icon">
              ▼
            </span>

          </div>

          <div className="navbar-item">

            IS PRO

          </div>

          <div className="chat-icon">

            💬

          </div>

          <div className="profile-circle">

            D

          </div>

          <div className="dropdown-icon profile-dropdown">

            ▼

          </div>

        </div>

      </nav>

    </div>

  );

}

export default Navbar;