const Publication = () => {
  return (
    <div className="banner-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-innar-content">
              <h1 className="title">PUBLICATION &amp; INDEXING 2024</h1>
              <div className="content">
                <div className="publication">
                  <br />
                  <h1 style={{ color: "black", fontWeight: "lighter" }}>
                    PUBLICATION - PROCEEDINGS
                  </h1>
                  <br />
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <p>
                        All ICSCPS-2024 presented papers will be published in
                        conference proceedings by Springer{" "}
                        <a
                          href="https://www.springer.com/series/8767"
                          target="_blank"
                        >
                          ‘Smart Innovation,Systems and Technologies’
                        </a>{" "}
                        ISSN: 2190-3018, Book Series. ISSN: 2190-3018
                      </p>
                    </div>
                    <div className="col-lg-5">
                      <img
                        src="images\springer.png"
                        alt="Springer Logo"
                        style={{ width: 300 }}
                      />
                    </div>
                  </div>
                  <br /> <br />
                  <h1 style={{ color: "black", fontWeight: "lighter" }}>
                    INDEXING
                  </h1>
                  <p>
                    Indexed by SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH,
                    SCImago. All books published in the series are submitted for
                    consideration in the Web of Science.
                  </p>
                  <br />
                  <div
                    className="publication-container"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      className="publication-div"
                      style={{
                        flex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 10,
                      }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src="images\publication\img01.png"
                        alt="Scopus"
                      />
                    </div>
                    <div
                      className="publication-div"
                      style={{
                        flex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 10,
                      }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src="images\publication\img02.png"
                        alt="SpringerLink"
                      />
                    </div>
                    <div
                      className="publication-div"
                      style={{
                        flex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 10,
                      }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src="images\publication\img03.png"
                        alt="Google Scholar"
                      />
                    </div>
                    <div
                      className="publication-div"
                      style={{
                        flex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 10,
                      }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src="images\publication\img04.png"
                        alt="zbMATH Open"
                      />
                    </div>
                    <div
                      className="publication-div"
                      style={{
                        flex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 10,
                      }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src="images\publication\img05.png"
                        alt="SJR"
                      />
                    </div>
                    <div
                      className="publication-div"
                      style={{
                        flex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 10,
                      }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src="images\publication\img06.png"
                        alt="WTI Frankfurt eG"
                      />
                    </div>
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

export default Publication;
