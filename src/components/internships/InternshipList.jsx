import {

  MdLocationOn,

  MdOutlineDateRange,

} from "react-icons/md";

import {

  HiOutlineCurrencyRupee,

} from "react-icons/hi";

import {

  BsPlayCircle,

} from "react-icons/bs";

import InternshipSkeleton from "../skeletons/InternshipSkeleton";

import "./internshipList.css";

function InternshipList({
  internships,
  loading,
}) {

  return (

    <div className="internship-list">

      {

        loading && (

          <>

            <InternshipSkeleton />

            <InternshipSkeleton />

            <InternshipSkeleton />

            <InternshipSkeleton />

          </>

        )

      }

      {

        !loading &&
        internships.length === 0 && (

          <div className="empty-state">

            <h2>
              No internships found
            </h2>

            <p>
              Try changing filters
            </p>

          </div>

        )

      }

      {

        !loading &&

        internships.map((internship, index) => {

          const logo =
            internship.company_logo;

          const isWorkFromHome =
            internship.work_from_home;

          return (

            <div
              className="internship-card"
              key={index}
            >

              <div className="actively-hiring">

                Actively hiring

              </div>

              <div className="card-top">

                <div>

                  <h3>

                    {internship.title}

                  </h3>

                  <p className="company-name">

                    {
                      internship.company_name
                    }

                  </p>

                </div>

                <img

                  src={
                    logo
                      ? logo
                      : "https://internshala.com/static/images/search/placeholder_logo.svg"
                  }

                  alt="company-logo"

                  className="company-logo"

                  onError={(e) => {

                    e.target.src =
                      "https://internshala.com/static/images/search/placeholder_logo.svg";

                  }}

                />

              </div>

              <div className="internship-meta">

                <div className="meta-item">

                  <MdLocationOn
                    className="meta-icon"
                  />

                  <p>

                    {
                      isWorkFromHome
                        ? "Work from home"
                        : internship.location_names?.join(", ")
                    }

                  </p>

                </div>

                <div className="meta-item">

                  <BsPlayCircle
                    className="meta-icon"
                  />

                  <p>

                    {
                      internship.start_date ||
                      "Immediately"
                    }

                  </p>

                </div>

                <div className="meta-item">

                  <MdOutlineDateRange
                    className="meta-icon"
                  />

                  <p>

                    {
                      internship.duration
                    }

                  </p>

                </div>

                <div className="meta-item">

                  <HiOutlineCurrencyRupee
                    className="meta-icon"
                  />

                  <p>

                    {
                      internship.stipend?.salary ||
                      "Not disclosed"
                    }

                  </p>

                </div>

              </div>

              <div className="tags-row">

                <span>
                  Internship
                </span>

                {

                  internship.part_time && (

                    <span>
                      Part time
                    </span>

                  )

                }

                {

                  internship.work_from_home && (

                    <span>
                      Work from home
                    </span>

                  )

                }

                {

                  internship.ppo_label_value && (

                    <span>
                      Job offer
                    </span>

                  )

                }

              </div>

              <div className="card-footer">

                <div className="footer-left">

                  <p className="posted-text">

                    {

                      internship.posted_by_label
                      || "Posted recently"

                    }

                  </p>

                  <p className="applicants-text">

                    {

                      internship.applications_count
                        ? `${internship.applications_count} applicants`
                        : "Be an early applicant"

                    }

                  </p>

                </div>

                <button>

                  View details

                </button>

              </div>

            </div>

          );

        })

      }

    </div>

  );

}

export default InternshipList;