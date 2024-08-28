const Visa = () => {
  return (
    <div className="banner-main">
      <div className="container mt-3 ">
        <div className="about-innar-content committees">
          <h1>VISA</h1>
          <hr />
          <p>
            For the visa information, please visit{" "}
            <a href="https://www.mha.gov.in/MHA1/TourVisa.html" target="_blank">
              {" "}
              Visitor Supporting Documents,
            </a>{" "}
            Ministry of Home Affairs, Government of India. Please email for
            support{" "}
            <a href="mailto:icscps.ncr@christuniversity.in">
              icscps.ncr@christuniversity.in
            </a>{" "}
            to request a visa invitation letter so that you can print and use in
            obtaining a visa. Obtaining a Visa Support Letter from ICSCPS-2024
            Conference will not guarantee that your India visa application will
            be approved. The letter is merely supplementary information that
            explains a visa applicant's intended purpose of travel to India.
            <br />
            <strong>
              For security purposes, the conference has policy for issuing
              official Visa Support Letters as follows:
            </strong>
          </p>
          <ul
            className="mt-1"
            style={{
              listStyleType: "circle",
              listStyle: "square outside none",
            }}
          >
            <li>
              Visa Support Letters will be issued only after you have
              successfully registered and paid for your conference.
            </li>
            <li>
              Visa Support Letters can only be issued for the person registered
              to attend the conference in form of participant, author, chair and
              speaker.
            </li>
            <li>
              Unfortunately we cannot issue visa Support Letters for guests of
              participants.
            </li>
          </ul>
          <p />
        </div>
      </div>
    </div>
  );
};

export default Visa;
