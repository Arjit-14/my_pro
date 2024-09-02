import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    "/images/banner/1.png",
    "/images/banner/2.png",
    "/images/banner/3.png",
    "/images/banner/4.png",
    "/images/banner/5.png",
  ];

  useEffect(() => {
    // Display the popup when the page loads
    document.getElementById("popup").style.display = "block";

    function closePopup() {
      // Hide the popup
      document.getElementById("popup").style.display = "none";
    }

    // Close the popup when clicking outside the popup content
    window.onclick = function (event) {
      var popup = document.getElementById("popup");
      if (event.target === popup) {
        closePopup();
      }
    };

    // Cleanup event listener on component unmount
    return () => {
      window.onclick = null;
    };
  }, []);

  const closePopup = () => {
    document.getElementById("popup").style.display = "none";
  };

  return (
    <div className="banner-main py-3">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-lg-3 p-0">
            <div className="three-innar">
              <h4
                className="m-0"
                style={{ textTransform: "uppercase", fontWeight: 600 }}
              >
                News <sup className="badge bg-danger blinking-text">LATEST</sup>
              </h4>
              <hr />
              <div className="scrolling-text">
                <p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <b>Publication:</b> All ICSCPS-2024 presented papers will be
                  published in conference proceedings by Springer{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://www.springer.com/series/8767"
                    target="_blank"
                  >
                    ‘Smart Innovation,Systems and Technologies’
                  </a>{" "}
                  ISSN: 2190-3018, Book Series.
                  <br />
                  <br />
                  <b>Indexing:</b> Indexed by SCOPUS, INSPEC, WTI Frankfurt eG,
                  zbMATH, SCImago. All books published in the series are
                  submitted for consideration in the Web of Science.
                  <br />
                  <br />
                  <b>
                    Special Issue of Journals, keep checking for more updates...
                  </b>
                </p>
              </div>
            </div>
            {/* Popup container */}
            <div id="popup" className="popup">
              <div className="popup-content">
                <span className="close-btn" onClick={closePopup}>
                  ×
                </span>
                <img
                  src="images/flyer.jpg"
                  className="img-fluid"
                  alt="Flyer Image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="carouselExample" className="carousel slide">
              <Slider {...settings}>
                {images.map((src, index) => (
                  <div key={index} className="carousel-item">
                    <img
                      src={src}
                      className="d-block w-100"
                      style={{ width: "100% !important" }}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-lg-3 p-0">
            <div className="three-innar-2">
              <h2
                className="mb-3"
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                IMPORTANT DATES{" "}
                <sup className="badge bg-danger blinking-text">NEW </sup>
              </h2>
              <div
                className="important-dates"
                style={{ textAlign: "left", backgroundColor: "white" }}
              >
                <div
                  className="call p-0 m-0"
                  style={{ fontSize: 13, fontWeight: "bold" }}
                >
                  Call for Paper:{" "}
                  <span className="red-text">
                    20<sup>th</sup> January, 2024
                  </span>
                  <br />
                  <hr className="p-0 my-2" />
                  Last date (Paper Submission):{" "}
                  <del>
                    <span className="red-text">
                      30<sup>th</sup> May, 2024
                    </span>
                  </del>{" "}
                  <span className="red-text">
                    15<sup>th</sup> July, 2024
                  </span>
                  <br />
                  <hr className="p-0 my-2" />
                  Acceptance Notification:{" "}
                  <span className="red-text">
                    30<sup>th</sup> July, 2024
                  </span>
                  <br />
                  <hr className="p-0 my-2" />
                  Late Date for Camera Ready:{" "}
                  <span className="red-text">
                    14<sup>th</sup> August, 2024
                  </span>
                  <br />
                  <hr className="p-0 my-2" />
                  Last date of registration:{" "}
                  <span className="red-text">
                    14<sup>th</sup> August, 2024
                  </span>
                  <br />
                  <hr className="p-0 my-2" />
                  Conference Dates:{" "}
                  <span className="red-text">13-14 September, 2024</span>
                  <br />
                  <hr className="p-0 my-2" />
                </div>
              </div>
              <br />
              <h2
                style={{
                  textAlign: "center",
                  color: "#686868",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                PAPER SUBMISSION
              </h2>
              <div className=" three-content">
                <p style={{ textAlign: "center" }}>
                  <span style={{ color: "#FFFFFF" }}>
                    Paper submission will be through CMT using the following
                    link
                  </span>
                  <br />
                  <br />
                  <strong>
                    <span style={{ color: "null" }}>
                      <span style={{ backgroundColor: "#ffffcc" }}>
                        <a
                          href="https://cmt3.research.microsoft.com/ICSCPS2024"
                          target="_blank"
                        >
                          <font color="#ce0000">Paper Submission Link</font>
                        </a>
                      </span>
                    </span>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container about">
          <h3>About Conference</h3>
          <div className="">
            <p style={{ textAlign: "justify" }}>
              The aim of the International Conference on Smart Cyber Physical
              Systems (ICSCPS-2024) is to bring together the academicians,
              researchers, and industrial professionals to discuss and exchange
              their knowledge, innovative ideas, latest issues, advanced
              technologies, and advancements in the area of Sustainable
              Development Goals, Cyber physical systems, and related
              applications that will be presented in the conference.
              Cyber-physical systems (CPS) are societal-scale engineered systems
              that are built from and depend upon the seamless, correct and safe
              integration of physical processes, computation components, and, in
              most cases the human supervisors. As a multi-disciplinary
              discipline, CPS engineering requires theoretical analysis,
              advanced heuristics, artificial intelligence, security
              methodologies and big data to work seamlessly together. The
              deployment of CPS is profoundly transforming how we interact with
              the physical world, just as the world wide web transformed how we
              interact with one another. The impact of CPS science is visible
              across a number of challenging domains, including autonomous
              systems, agriculture, aeronautics, building design, civil
              infrastructure, energy, environmental quality, healthcare and
              personalized medicine, manufacturing, and transportation. Further
              integration and innovations in CPS will continue to have an
              enormous societal and economic impact.
              <br />
              <br />
              The International Conference on Smart Cyber Physical Systems
              (ICSCPS-2024) will act as an International platform to share and
              demonstrate novel approaches, development, technology improvement
              and research among interested researchers, students, developers,
              and practitioners. The conference invites and encourages the
              submissions in terms of concepts, surveys, state-of-art original
              and unpublished research, running implementation, applications,
              industrial case studies and in-progress research that can be
              categorized among regular and poster papers. The conference will
              be having many plenary and invited keynote talks by the
              international reputed speakers covering the latest topic of a wide
              range of interested researchers.
              <br />
              <br />
            </p>
          </div>
          <br />
          <h3>About University</h3>
          <div className="description-one">
            <p style={{ textAlign: "justify" }}>
              CHRIST (Deemed to be University) was born out of the educational
              vision of St Kuriakose Elias Chavara, an educationalist and social
              reformer of the nineteenth century in South India. He founded the
              first Catholic indigenous congregation, Carmelites of Mary
              Immaculate (CMI), in 1831, which administers CHRIST (Deemed to be
              University). CHRIST was established on 15 July 1969 as an
              affiliated college, with the Vision of 'Excellence and Service'.
              It became a preferred educational institution in Bangalore,
              Delhi-NCR and Lavasa within the short period of inception. One of
              the first institutions in India to be accredited in 1998 by the
              NAAC, and subsequently in 2004 and 2016, CHRIST (Deemed to be
              University) has the top grade ‘A’ in the 4-point scale.
              <br />
              Today, the University offers many Undergraduate, Postgraduate and
              PhD Programmes in Humanities, Social Sciences, Science, Commerce,
              Management, Engineering, Education, Law, and Architecture to over
              24000 students from all the states of India and about 60 different
              countries. In 2019, CHRIST (Deemed to be University) completed 50
              glorious years of its existence and sterling contribution to the
              cause of higher education in India.
            </p>
          </div>
          <br />
          <h3>About Department of Computer Science</h3>
          <div className="description-one">
            <p style={{ textAlign: "justify" }}>
              Department of Computer Science at CHRIST (Deemed to be University)
              Delhi- NCR has created a niche in the realm of higher education in
              India through its programmes. Currently, the department of
              computational sciences offers a wide array of undergraduate
              courses with multiple specializations. It offers undergraduate and
              doctoral programmes.&nbsp;
              {/* in the disciplines of Computer Science, Statistics &amp; Mathematics.  */}
              A dedicated research block with all the latest research facilities
              boosts the morale of the faculty and research scholars alike. This
              is an ideal place for students with a research bent of mind to
              explore his/her passion. Apart from academics, students are
              moulded holistically through various co-curricular and
              extracurricular activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
