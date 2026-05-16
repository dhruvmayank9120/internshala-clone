import { useState } from "react";

import DatePicker from "react-datepicker";

import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";

import "./FilterSidebar.css";

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
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const profileOptions = [
    {
      value: "",
      label: "All Profiles",
    },

    {
      value: ".NET Development",
      label: ".NET Development",
    },

    {
      value: "3D Printing",
      label: "3D Printing",
    },

    {
      value: "AI Agent Development",
      label: "AI Agent Development",
    },

    {
      value: "Accounts",
      label: "Accounts",
    },

    {
      value: "Acting",
      label: "Acting",
    },

    {
      value: "Aerospace Engineering",
      label: "Aerospace Engineering",
    },

    {
      value: "Agriculture & Food Engineering",
      label: "Agriculture & Food Engineering",
    },

    {
      value: "Administration",
      label: "Administration",
    },

    {
      value: "Android App Development",
      label: "Android App Development",
    },

    {
      value: "Brand Management",
      label: "Brand Management",
    },

    {
      value: "Business Analytics",
      label: "Business Analytics",
    },

    {
      value: "Data Science",
      label: "Data Science",
    },

    {
      value: "Marketing",
      label: "Marketing",
    },

    {
      value: "Product Management",
      label: "Product Management",
    },
  ];

  const durationOptions = [
    {
      value: "1 Month",
      label: "1 Month",
    },

    {
      value: "2 Months",
      label: "2 Months",
    },

    {
      value: "3 Months",
      label: "3 Months",
    },

    {
      value: "4 Months",
      label: "4 Months",
    },

    {
      value: "6 Months",
      label: "6 Months",
    },

    {
      value: "12 Months",
      label: "12 Months",
    },

    {
      value: "24 Months",
      label: "24 Months",
    },

    {
      value: "36 Months",
      label: "36 Months",
    },
  ];

  const locationOptions = [
    {
      value: "Delhi",
      label: "Delhi",
    },

    {
      value: "Lucknow",
      label: "Lucknow",
    },

    {
      value: "Gurgaon",
      label: "Gurgaon",
    },

    {
      value: "Munnar",
      label: "Munnar",
    },

    {
      value: "Parbhani",
      label: "Parbhani",
    },

    {
      value: "Kera",
      label: "Kera",
    },

    {
      value: "Tarn Taran",
      label: "Tarn Taran",
    },

    {
      value: "Banga",
      label: "Banga",
    },

    {
      value: "Work From Home",
      label: "Work From Home",
    },
  ];

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" />

        <span>
          As per my
          <span className="blue-text"> preferences</span>
        </span>
      </div>

      <div className="filter-group">
        <label>Profile</label>

        <Select
          options={profileOptions}
          placeholder="e.g. Marketing"
          isSearchable={true}
          value={
            profile
              ? {
                  value: profile,
                  label: profile,
                }
              : null
          }
          onChange={(selectedOption) =>
            setProfile(selectedOption ? selectedOption.value : "")
          }
          className="custom-select"
        />
      </div>

      <div className="filter-group">
        <label>Location</label>

        <Select
          options={locationOptions}
          placeholder="Choose city"
          isSearchable={true}
          value={
            location
              ? {
                  value: location,
                  label: location,
                }
              : null
          }
          onChange={(selectedOption) =>
            setLocation(selectedOption ? selectedOption.value : "")
          }
          className="duration-select"
        />
      </div>

      <div className="checkbox-group">
        <input
          type="checkbox"
          checked={workFromHome}
          onChange={(e) => setWorkFromHome(e.target.checked)}
        />

        <span>Work from home</span>
      </div>

      <div className="checkbox-group">
        <input
          type="checkbox"
          checked={partTime}
          onChange={(e) => setPartTime(e.target.checked)}
        />

        <span>Part-time</span>
      </div>

      <div className="filter-group">
        <label>Desired minimum monthly stipend (₹)</label>

        <input
          type="range"
          min="0"
          max="10000"
          step="2000"
          value={stipend}
          onChange={(e) => setStipend(Number(e.target.value))}
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
        onClick={() => setShowMoreFilters(!showMoreFilters)}
      >
        {showMoreFilters ? "View less filters ˄" : "View more filters ˅"}
      </p>

      {showMoreFilters && (
        <div className="extra-filters">
          <div className="filter-group">
            <label>Starting from (or after)</label>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              placeholderText="Choose date"
              className="date-picker-input"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="filter-group">
            <label>Max. duration (months)</label>

            <Select
              options={durationOptions}
              placeholder="Choose duration"
              isSearchable={false}
              value={
                duration
                  ? {
                      value: duration,
                      label: duration,
                    }
                  : null
              }
              onChange={(selectedOption) =>
                setDuration(selectedOption ? selectedOption.value : "")
              }
              className="duration-select"
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={jobOffer}
              onChange={(e) => setJobOffer(e.target.checked)}
            />

            <span>Internships with job offer ⓘ</span>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={fastResponse}
              onChange={(e) => setFastResponse(e.target.checked)}
            />

            <span>Fast response ⓘ</span>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={earlyApplicant}
              onChange={(e) => setEarlyApplicant(e.target.checked)}
            />

            <span>Early applicant ⓘ</span>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={womenInternship}
              onChange={(e) => setWomenInternship(e.target.checked)}
            />

            <span>Internships for women ⓘ</span>
          </div>
        </div>
      )}

      <p className="clear-all" onClick={clearFilters}>
        Clear all
      </p>
    </div>
  );
}

export default FilterSidebar;
