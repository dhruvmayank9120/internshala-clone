import "./navbar.css";

function Navbar() {

  return (
    <div>

      <div className="top-strip">

        Get job ready with Full Stack Development
        with guaranteed placement.

      </div>

      <nav className="navbar">

        <div className="navbar-left">

          <img
            src="https://internshala.com/static/images/common/new_internshala_logo.svg"
            alt="internshala-logo"
            className="logo"
          />

        </div>

        <div className="navbar-center">

          <p>
            Internships ▼
          </p>

          <p>
            Courses ▼
          </p>

          <p>
            Jobs ▼
          </p>

        </div>

        <div className="navbar-right">

          <button className="login-btn">
            Login
          </button>

          <button className="signup-btn">
            Candidate Sign-up
          </button>

        </div>

      </nav>

    </div>
  );
}

export default Navbar;