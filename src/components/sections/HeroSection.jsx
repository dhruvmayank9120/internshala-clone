import "./heroSection.css";

function HeroSection({ total }) {

  return (
    <div className="hero-wrapper">

      <div className="hero-section">

        <div className="breadcrumb">
          Home / Internships
        </div>

        <h1 className="hero-title">
          {total} Total Internships
        </h1>

        <p className="hero-subtitle">
          Latest internships in India
        </p>

      </div>

      <div className="search-results-bar">

        <div>

          <h3>
            Search results
          </h3>

          <p>
            matching your preferences
          </p>

        </div>

        <div className="sort-box">

          <span>
            Sort by:
          </span>

          <select>

            <option>
              Relevance
            </option>

            <option>
              Latest
            </option>

            <option>
              Stipend
            </option>

          </select>

        </div>

      </div>

    </div>
  );
}

export default HeroSection;