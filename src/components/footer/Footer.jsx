import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-column">

          <h4>Internships by places</h4>

          <p>Internship in India</p>
          <p>Internship in Delhi</p>
          <p>Internship in Bangalore</p>
          <p>Internship in Hyderabad</p>

        </div>

        <div className="footer-column">

          <h4>Jobs by places</h4>

          <p>Jobs in Delhi</p>
          <p>Jobs in Mumbai</p>
          <p>Jobs in Pune</p>
          <p>Jobs in Chennai</p>

        </div>

        <div className="footer-column">

          <h4>Explore</h4>

          <p>About us</p>
          <p>Contact us</p>
          <p>Privacy policy</p>
          <p>Terms & conditions</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © Copyright 2025 Internshala Clone
        </p>

      </div>

    </footer>
  );
}

export default Footer;