import "./internshipSkeleton.css";

function InternshipSkeleton() {

  return (

    <div className="skeleton-card">

      <div className="skeleton-top">

        <div className="skeleton-title"></div>

        <div className="skeleton-logo"></div>

      </div>

      <div className="skeleton-company"></div>

      <div className="skeleton-meta"></div>

      <div className="skeleton-meta short"></div>

      <div className="skeleton-tags">

        <span></span>

        <span></span>

      </div>

      <div className="skeleton-footer">

        <div className="skeleton-button"></div>

      </div>

    </div>

  );

}

export default InternshipSkeleton;