import { useState } from "react";

import DatePicker from "react-datepicker";

import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";

import "./filterSidebar.css";

function FilterSidebar({

  profile,
  setProfile,

  location,
  setLocation,

  duration,
  setDuration,

  stipend,
  setStipend,

  workFromHome,
  setWorkFromHome,

  partTime,
  setPartTime,

  jobOffer,
  setJobOffer,

  fastResponse,
  setFastResponse,

  earlyApplicant,
  setEarlyApplicant,

  womenInternship,
  setWomenInternship,

  startDate,
  setStartDate,

  clearFilters,

}) {

  const [showMoreFilters, setShowMoreFilters] =
    useState(false);

  const durationOptions = [

    {
      value: "1 month",
      label: "1 month",
    },

    {
      value: "2 months",
      label: "2 months",
    },

    {
      value: "3 months",
      label: "3 months",
    },

    {
      value: "4 months",
      label: "4 months",
    },

    {
      value: "6 months",
      label: "6 months",
    },

    {
      value: "12 months",
      label: "12 months",
    },

    {
      value: "24 months",
      label: "24 months",
    },

    {
      value: "36 months",
      label: "36 months",
    },

  ];

  return (
    <div>

      <div className="filter-sidebar">

        <div className="filter-header">

          <h3>
            🧷 Filters
          </h3>

        </div>

        <div className="checkbox-group">

          <input type="checkbox" />

          <span>

            As per my

            <span className="blue-text">
              {" "}preferences
            </span>

          </span>

        </div>

        <div className="filter-group">

          <label>
            Profile
          </label>

          <input
            type="text"
            placeholder="e.g. Marketing"
            value={profile}
            onChange={(e) =>
              setProfile(e.target.value)
            }
          />

        </div>

        <div className="filter-group">

          <label>
            Location
          </label>

          <input
            type="text"
            placeholder="e.g. Delhi"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
          />

        </div>

        <div className="checkbox-group">

          <input
            type="checkbox"
            checked={workFromHome}
            onChange={(e) =>
              setWorkFromHome(
                e.target.checked
              )
            }
          />

          <span>
            Work from home
          </span>

        </div>

        <div className="checkbox-group">

          <input
            type="checkbox"
            checked={partTime}
            onChange={(e) =>
              setPartTime(
                e.target.checked
              )
            }
          />

          <span>
            Part-time
          </span>

        </div>

        <div className="filter-group">

          <label>
            Duration
          </label>

          <input
            type="text"
            placeholder="e.g. 3 Months"
            value={duration}
            onChange={(e) =>
              setDuration(e.target.value)
            }
          />

        </div>

        <div className="filter-group">

          <label>
            Desired minimum monthly stipend (₹)
          </label>

          <input
            type="range"
            min="0"
            max="10000"
            step="2000"
            value={stipend}
            onChange={(e) =>
              setStipend(
                Number(e.target.value)
              )
            }
          />

          <div className="stipend-values">

            <span>0</span>

            <span>2K</span>

            <span>4K</span>

            <span>6K</span>

            <span>8K</span>

            <span>10K</span>

          </div>

        </div>

        <p
          className="view-more"
          onClick={() =>
            setShowMoreFilters(
              !showMoreFilters
            )
          }
        >

          {
            showMoreFilters
              ? "View less filters ˄"
              : "View more filters ˅"
          }

        </p>

        {
          showMoreFilters && (

            <div className="extra-filters">

              <div className="filter-group">

                <label>
                  Starting from (or after)
                </label>

                <DatePicker
                  selected={startDate}
                  onChange={(date) =>
                    setStartDate(date)
                  }
                  minDate={new Date()}
                  placeholderText="Choose date"
                  className="date-picker-input"
                  dateFormat="dd/MM/yyyy"
                />

              </div>

              <div className="filter-group">

                <label>
                  Max. duration (months)
                </label>

                <Select

                  options={durationOptions}

                  placeholder="Choose duration"

                  isSearchable={false}

                  onChange={(selectedOption) =>
                    setDuration(
                      selectedOption.value
                    )
                  }

                  className="duration-select"

                />

              </div>

              <div className="checkbox-group">

                <input
                  type="checkbox"
                  checked={jobOffer}
                  onChange={(e) =>
                    setJobOffer(
                      e.target.checked
                    )
                  }
                />

                <span>
                  Internships with job offer ⓘ
                </span>

              </div>

              <div className="checkbox-group">

                <input
                  type="checkbox"
                  checked={fastResponse}
                  onChange={(e) =>
                    setFastResponse(
                      e.target.checked
                    )
                  }
                />

                <span>
                  Fast response ⓘ
                </span>

              </div>

              <div className="checkbox-group">

                <input
                  type="checkbox"
                  checked={earlyApplicant}
                  onChange={(e) =>
                    setEarlyApplicant(
                      e.target.checked
                    )
                  }
                />

                <span>
                  Early applicant ⓘ
                </span>

              </div>

              <div className="checkbox-group">

                <input
                  type="checkbox"
                  checked={womenInternship}
                  onChange={(e) =>
                    setWomenInternship(
                      e.target.checked
                    )
                  }
                />

                <span>
                  Internships for women ⓘ
                </span>

              </div>

            </div>

          )
        }

        <p
          className="clear-all"
          onClick={clearFilters}
        >
          Clear all
        </p>

      </div>

      <div className="keyword-box">

        <h3>
          Keyword Search
        </h3>

        <div className="keyword-input">

          <input
            type="text"
            placeholder="e.g. Design, Mumbai, Infosys"
          />

          <button>
            🔍
          </button>

        </div>

      </div>

    </div>
  );
}

export default FilterSidebar;