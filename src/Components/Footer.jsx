const Footer = () => {
  return (
    <footer className="p-4" style={{ backgroundColor: "#052658" }}>
      <div className="container foot text-light" style={{ width: "80%" }}>
        <div className="row">
          <div className="col-12 col-md-4">
            <h4 className="m-0" style={{ fontSize: 24, fontWeight: 900 }}>
              CHRIST
            </h4>
            <p>(Deemed to be University)</p>
            <div className="container p-0">
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-geo-alt" />
                  <span style={{ fontSize: 14 }}>
                    Mariam Nagar, Meerut Road, Delhi NCR
                    <br />
                    Ghaziabad - 201003
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone h5 text-primary" />
                  <span style={{ fontSize: 14 }}>Telephone: 01206666100</span>
                </li>
                <li>
                  <i className="bi bi-telephone h5 text-primary" />
                  <span style={{ fontSize: 14 }}>Tel: 1800-123-3212</span>
                </li>
                <li>
                  <i className="bi bi-envelope h5 text-primary" />
                  <span style={{ fontSize: 14 }}>
                    Email:{" "}
                    <a
                      href="mailto:icscps.ncr@christuniversity.in"
                      style={{ color: "#00f0fc" }}
                    >
                      icscps.ncr@christuniversity.in
                    </a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-globe h5\ text-primary" />
                  <a href="http://www.ncr.christuniversity.in" target="_blank">
                    <span style={{ fontSize: 14, color: "#00f0fc" }}>
                      {" "}
                      http://www.ncr.christuniversity.in
                    </span>
                  </a>
                </li>
              </ul>
              <br />
              <p style={{ fontSize: "13px", color: "white" }}>
                Copyright © CHRIST (Deemed to be University)
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h5 style={{ fontSize: 24, fontWeight: 900 }}>Vision</h5>
            <p style={{ fontSize: 16 }}>EXCELLENCE AND SERVICE</p>
            <h5 style={{ fontSize: 24, fontWeight: 900 }}>Mission</h5>
            <p style={{ fontSize: 16 }}>
              CHRIST (Deemed to be University) is a nurturing ground for an
              individual's holistic development to make effective contribution
              to the society in a dynamic environment.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h5 style={{ fontSize: 24, fontWeight: 900 }}>Locate Us</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2144862561236!2d77.4073790755145!3d28.683229881776494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf059aeaf695d%3A0xdc407fcde59a0d0f!2sCHRIST%20(Deemed%20to%20be%20University)%20Delhi%20NCR!5e0!3m2!1sen!2sus!4v1694661695167!5m2!1sen!2sus"
              height={200}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <button className="my-2 btn btn-primary">
              <a
                href="https://ncr.christuniversity.in/how-to-reach-ncr-campus"
                style={{ color: "white" }}
                target="_blank"
              >
                How to reach Venue
              </a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
