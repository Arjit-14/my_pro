const Contact_Us = () => {
  return (
    <div className="banner-main">
      <div className="container">
        <div className="row">
          <div className="about-innar">
            <div className="col-lg-12">
              <div className="about-innar-content">
                <h1 style={{ fontSize: 35 }}>Contact Us</h1>
                <hr />
                <div className="row p-3 ">
                  <div className="col-md-5">
                    <div className="container" style={{ lineHeight: 2 }}>
                      <span style={{ fontSize: 18 }}>
                        Thank you for your interest in the ICSCPS conference.
                        Please provide the following information about your
                        needs to help us serve you better. This information will
                        enable us to route your request to the appropriate
                        person. You should receive a response within 48 hours.
                      </span>
                      <br />
                      <span style={{ fontSize: 18 }}>
                        For any query or details Please Contact :{" "}
                        <a href="mailto:icscps.ncr@christuniversity.in">
                          icscps.ncr@christuniversity.in
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-7 p-3 border">
                    <form action="submit_form.php" method="POST">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              Name <sup className="required">*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              required
                              onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="affiliation" className="form-label">
                              Affiliation <sup className="required">*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="affiliation"
                              name="affiliation"
                              required
                              onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email ID <sup className="required">*</sup>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              name="phone"
                              maxLength="10"
                              onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="text" className="form-label">
                          Country <sup className="required">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          name="country"
                          required
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label">
                          Subject <sup className="required">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          Message <sup className="required">*</sup>
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={4}
                          required
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
