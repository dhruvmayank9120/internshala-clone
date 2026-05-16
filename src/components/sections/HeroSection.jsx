import "./heroSection.css";

function HeroSection({ total }) {

  return (

    <div className="hero-section">

      <h1>

        {total} Total Internships

      </h1>

      <p>

        Latest summer internships in India

      </p>

    </div>

  );

}

export default HeroSection;