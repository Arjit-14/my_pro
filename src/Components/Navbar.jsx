import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from "/images/logo.png";
import scopus from "/images/scopus.png";
import springer from "/images/springer_partner.png";
import ntnu from "/images/partners/ntnu.png";
import perdana_university from "/images/partners/perdana_university.png";

const Navbar = () => {
  const [isCommitteeDropdownOpen, setCommitteeDropdownOpen] = useState(false);
  const [isPaperSubmissionDropdownOpen, setPaperSubmissionDropdownOpen] =
    useState(false);
  const [isVenueDropdownOpen, setVenueDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Close all dropdowns when the route changes
    setCommitteeDropdownOpen(false);
    setPaperSubmissionDropdownOpen(false);
    setVenueDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const toggleCommitteeDropdown = (event) => {
    event.preventDefault();
    setCommitteeDropdownOpen(!isCommitteeDropdownOpen);
  };

  const togglePaperSubmissionDropdown = (event) => {
    event.preventDefault();
    setPaperSubmissionDropdownOpen(!isPaperSubmissionDropdownOpen);
  };

  const toggleVenueDropdown = (event) => {
    event.preventDefault();
    setVenueDropdownOpen(!isVenueDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header desktop">
      <div className="section-1">
        <div className="container p2">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 d-flex justify-content-center">
              <Link to="/">
                <img
                  className="logo"
                  src={logo}
                  style={{ width: 220 }}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* <div class="logo-main">
          <div class="container p-2 text-center">
              <h3 style="color:#1651a9"> <strong>International Conference on Smart Cyber Physical Systems (ICSCPS-2024)</strong></h3>
              <h5>Organized in In-person and Online (Hybrid Mode) by</h5>
              <h4 style="color:#1651a9">Department of Computer Science</h4>
              <h4 style="color:#1651a9">CHRIST (Deemed to be University) Delhi NCR, India</h4>
              <h5 class="date-container" style="font-weight:bold">September 13 - 14, 2024</h5>
          </div>
      </div> */}
        <div className="logo-main">
          <div className="p-2 text-center d-flex flex-column flex-md-row justify-content-md-between align-items-center">
            <div className="mobile-order-2">
              <div className="d-flex flex-column align-items-center justify-content-center mb-3 mb-md-0 order-2 order-md-1">
                <img src={scopus} alt="scopus_logo" style={{ width: 150 }} />
                <br />
                <img src={springer} alt="Left Image" style={{ width: 100 }} />
                <br />
                <p>
                  <b>PUBLICATION PARTNER</b>
                </p>
              </div>
            </div>
            <div className="text-center mb-3 mb-md-0">
              <h3 style={{ color: "#1651a9" }}>
                {" "}
                <strong>
                  International Conference on Smart Cyber Physical Systems
                  (ICSCPS-2024)
                </strong>
              </h3>
              <h5>Organized by</h5>
              <h4 style={{ color: "#1651a9" }}>
                Department of Computer Science
              </h4>
              <h4 style={{ color: "#1651a9" }}>
                CHRIST (Deemed to be University) Delhi NCR, India
              </h4>
              <h5 className="date-container" style={{ fontWeight: "bold" }}>
                September 13 - 14, 2024
              </h5>
              <hr />
              <h5>Sponsored by</h5>
              <h4 style={{ color: "#1651a9" }}>
                Department of Science &amp; Technology
              </h4>
              <h4 style={{ color: "#1651a9" }}>
                Science and Engineering Research Board
                (SERB),&nbsp;New&nbsp;Delhi
              </h4>
              <hr />
              <div className="d-flex justify-content-around align-items-center">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <div style={{ flex: 1, padding: "0 10px" }}>
                    <Link
                      to="https://unescochair-shpcher.nust.na/chair"
                      target="_blank"
                    >
                      <img
                        src="https://oerfoundation.org/wp-content/uploads/2021/06/UNESCO-OER-Chair-Logo-transparent.png"
                        alt="Right Image"
                        style={{ height: 80 }}
                      />
                    </Link>
                    <br />
                  </div>
                  <div style={{ flex: 1, padding: "0 10px" }}>
                    <Link
                      to="https://www.ntnu.edu/iir/cps#/view/about"
                      target="_blank"
                    >
                      <img
                        src={ntnu}
                        alt="Right Image"
                        style={{ height: 80 }}
                      />
                    </Link>
                    <br />
                  </div>
                  <div style={{ flex: 1, padding: "0 10px" }}>
                    <Link
                      to="https://www.perdanauniversity.edu.my/"
                      target="_blank"
                    >
                      <img
                        src={perdana_university}
                        alt="Right Image"
                        style={{ height: 80 }}
                      />
                    </Link>
                    <br />
                  </div>
                </div>
              </div>
              <br />
              <p style={{ textAlign: "center" }}>
                <b>ACADEMIC PARTNERS</b>
              </p>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <Link to="https://www.springer.com/series/8767" target="_blank">
                <img
                  src="https://media.springernature.com/w92/springer-static/cover/series/8767.jpg"
                  alt="Right Image"
                  style={{ width: 100 }}
                />
              </Link>
              <br />
              <p>
                <b>PROCEEDINGS PUBLICATION</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee">
          <Link
            to="https://www.springer.com/series/8767"
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
          >
            <span>
              <b>
                The after-conference proceeding of the ICSCPS-2024 will be
                published in SCOPUS Indexed Springer Book Series, ‘Smart
                Innovation, Systems and Technologies’, &nbsp;
              </b>
            </span>
          </Link>
          <span>
            <sup className="badge bg-danger blinking-text">NEW </sup>{" "}
            <b>
              Sponsored by Department of Science &amp; Technology, Science and
              Engineering Research Board (SERB), New Delhi&nbsp;
            </b>
          </span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-0">
        <div className="container">
          <h4>MENU</h4>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}            
            aria-controls="navbarNav"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav" style={{ width: "100%" }}>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>
              {/* <li class="nav-item">
                      <Link class="nav-link" to="?page=Committees">Committee</Link>
                  </li> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="committeedropdown"
                  role="button"
                  onClick={toggleCommitteeDropdown}
                  aria-haspopup="true"
                  aria-expanded={isCommitteeDropdownOpen}
                >
                  Committees
                </Link>
                <div
                  className={`dropdown-menu ${
                    isCommitteeDropdownOpen ? "show" : ""
                  }`}
                  aria-labelledby="committeedropdown"
                >
                  <Link className="dropdown-item" to="/committees">
                    Organising Committee
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/Committee_int_advisory"
                  >
                    International Advisory Committee
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/Committee_nat_advisory"
                  >
                    National Advisory Committee
                  </Link>
                  <Link className="dropdown-item" to="/Committee_technical">
                    Technical Committee
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/Committee_stu_volunteer"
                  >
                    Student Volunteers
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/speakers">
                  Keynote Speakers
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="paperSubmissionDropdown"
                  role="button"
                  onClick={togglePaperSubmissionDropdown}
                  aria-haspopup="true"
                  aria-expanded={isPaperSubmissionDropdownOpen}
                >
                  Paper Submission
                </Link>
                <div
                  className={`dropdown-menu ${
                    isPaperSubmissionDropdownOpen ? "show" : ""
                  }`}
                  aria-labelledby="paperSubmissionDropdown"
                >
                  <Link className="dropdown-item" to="/instruction">
                    Instruction for Authors
                  </Link>
                  <Link className="dropdown-item" to="/call_for_papers">
                    Call for Papers
                  </Link>
                  <Link className="dropdown-item" to="/important_dates">
                    Important Dates
                  </Link>
                  <Link className="dropdown-item" to="/Paper_Submission">
                    Submission Form
                  </Link>
                  <Link className="dropdown-item" to="/registration_fee">
                    Registration
                  </Link>
                  <Link className="dropdown-item" to="/publication">
                    Publication
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Call_for_sponsors">
                  Call for Sponsors
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="?page=venue"
                  id="paperSubmissionDropdown"
                  role="button"
                  onClick={toggleVenueDropdown}
                  aria-haspopup="true"
                  aria-expanded={isVenueDropdownOpen}
                >
                  Venue
                </Link>
                <div
                  className={`dropdown-menu ${
                    isVenueDropdownOpen ? "show" : ""
                  }`} 
                  aria-labelledby="paperSubmissionDropdown"
                >
                  <Link className="dropdown-item" to="/venue">
                    Conference Venue
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="https://ncr.christuniversity.in/how-to-reach-ncr-campus"
                    target="_blank"
                  >
                    Transportation
                  </Link>
                  <Link className="dropdown-item" to="/visa">
                    VISA
                  </Link>
                </div>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/Contact_Us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
