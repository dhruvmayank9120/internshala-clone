import { useEffect, useState } from "react";

import Navbar from "../components/navbar/Navbar";

import HeroSection from "../components/sections/HeroSection";

import FilterSidebar from "../components/filters/FilterSidebar";

import InternshipList from "../components/internships/InternshipList";

import Footer from "../components/footer/Footer";

import { fetchInternships } from "../services/api";

import "../styles/home.css";

function Home() {
  const [internships, setInternships] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filterLoading, setFilterLoading] = useState(false);

  const [profile, setProfile] = useState("");

  const [location, setLocation] = useState("");

  const [duration, setDuration] = useState("");

  const [stipend, setStipend] = useState(0);

  const [workFromHome, setWorkFromHome] = useState(false);

  const [partTime, setPartTime] = useState(false);

  const [jobOffer, setJobOffer] = useState(false);

  const [fastResponse, setFastResponse] = useState(false);

  const [earlyApplicant, setEarlyApplicant] = useState(false);

  const [womenInternship, setWomenInternship] = useState(false);

  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchInternships();

        setInternships(Object.values(data.internships_meta || {}));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });

    const startLoading = setTimeout(() => {
      setFilterLoading(true);
    }, 0);

    const stopLoading = setTimeout(() => {
      setFilterLoading(false);
    }, 400);

    return () => {
      clearTimeout(startLoading);

      clearTimeout(stopLoading);
    };
  }, [
    profile,

    location,

    duration,

    stipend,

    workFromHome,

    partTime,

    jobOffer,

    fastResponse,

    womenInternship,

    startDate,
  ]);

  const filteredInternships = internships.filter((internship) => {
    const title = internship.title || "";

    const locationNames = internship.location_names || [];

    const isWorkFromHome = internship.work_from_home;

    const locationText = isWorkFromHome
      ? "Work From Home"
      : locationNames.join(" ");

    const internshipDuration = internship.duration || "";

    const internshipStipend = internship.stipend?.salaryValue1 || 0;

    const isPartTime = internship.part_time;

    const hasJobOffer = internship.ppo_label_value;

    const postedRecently = internship.posted_by_label;

    const isWomenInternship = internship.is_internship_for_women;

    return (
      title.toLowerCase().includes(profile.toLowerCase()) &&
      locationText.toLowerCase().includes(location.toLowerCase()) &&
      internshipDuration.toLowerCase().includes(duration.toLowerCase()) &&
      internshipStipend >= stipend &&
      (!workFromHome || isWorkFromHome) &&
      (!partTime || isPartTime) &&
      (!jobOffer || hasJobOffer) &&
      (!fastResponse || postedRecently) &&
      (!womenInternship || isWomenInternship)
    );
  });

  const clearFilters = () => {
    setProfile("");

    setLocation("");

    setDuration("");

    setStipend(0);

    setWorkFromHome(false);

    setPartTime(false);

    setJobOffer(false);

    setFastResponse(false);

    setEarlyApplicant(false);

    setWomenInternship(false);

    setStartDate(null);
  };

  return (
    <div>
      <Navbar />

      <HeroSection total={filteredInternships.length} />

      <div className="main-layout">
        <div className="left-section">
          <FilterSidebar
            internships={internships}
            profile={profile}
            setProfile={setProfile}
            location={location}
            setLocation={setLocation}
            duration={duration}
            setDuration={setDuration}
            stipend={stipend}
            setStipend={setStipend}
            workFromHome={workFromHome}
            setWorkFromHome={setWorkFromHome}
            partTime={partTime}
            setPartTime={setPartTime}
            jobOffer={jobOffer}
            setJobOffer={setJobOffer}
            fastResponse={fastResponse}
            setFastResponse={setFastResponse}
            earlyApplicant={earlyApplicant}
            setEarlyApplicant={setEarlyApplicant}
            womenInternship={womenInternship}
            setWomenInternship={setWomenInternship}
            startDate={startDate}
            setStartDate={setStartDate}
            clearFilters={clearFilters}
          />
        </div>

        <div className="right-section">
          <InternshipList
            internships={filteredInternships}
            loading={loading || filterLoading}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
