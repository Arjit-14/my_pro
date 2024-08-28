const Important_dates = () => {
  return (
    <div className="banner-main">
      <div className="container mt-3 ">
        <div className="about-innar-content committees">
          <h1>Important Dates</h1>
          <hr />
          <div className="container-date" style={{ width: "50%" }}>
            <table className="table table-bordered d-table">
              <tbody>
                <tr>
                  <th scope="row" className="col-auto text-start">
                    Call for Paper:
                  </th>
                  <td className="text-start">20 January 2024</td>
                </tr>
                <tr>
                  <th scope="row" className="col-auto text-start">
                    Last date for Paper Submission:
                  </th>
                  <td className="text-start">
                    <del>30 May 2024 </del>
                    <br /> 15 July 2024
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="col-auto text-start">
                    Acceptance Notification:
                  </th>
                  <td className="text-start">30 July 2024</td>
                </tr>
                <tr>
                  <th scope="row" className="col-auto text-start">
                    Late Date for Camera Ready Paper:
                  </th>
                  <td className="text-start">14 August 2024</td>
                </tr>
                <tr>
                  <th scope="row" className="col-auto text-start">
                    Last date of registration:
                  </th>
                  <td className="text-start">14 August 2024</td>
                </tr>
                <tr>
                  <th scope="row" className="col-auto text-start">
                    Conference Dates:
                  </th>
                  <td className="text-start">13-14 September 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Important_dates;
