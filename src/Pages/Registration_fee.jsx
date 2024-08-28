const Registration_fee = () => {
  return (
    <div className="container p-3 ">
      <div className="about-innar">
        <div className="about-innar-content">
          <h1>Registration</h1>
          <hr />
          <div className="container mt-4">
            <table className="table table-bordered" style={{ width: "51%" }}>
              <thead style={{ backgroundColor: "grey" }}>
                <tr>
                  <th>Category</th>
                  <th>Indian Delegates</th>
                  <th>Foreign Delegates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Academician:</td>
                  <td>Rs. 8000/-</td>
                  <td>US$ 140/-</td>
                </tr>
                <tr>
                  <td>Industry person:</td>
                  <td>Rs. 9000/-</td>
                  <td>US$ 150/-</td>
                </tr>
                <tr>
                  <td>Student (Full time):</td>
                  <td>Rs. 6000/-</td>
                  <td>US$ 120/-</td>
                </tr>
                <tr>
                  <td>Attendees/Participating:</td>
                  <td>Rs. 3000/-</td>
                  <td>US$ 70/-</td>
                </tr>
              </tbody>
            </table>
            <p>Note: Registration fee inclusive of 18%&nbsp;GST.</p>
          </div>
          <hr />
          <h4>Payment Instructions:</h4>
          <p>
            <strong>For Indian Delegates:</strong> Payment can be made through
            NEFT/RTGS. Details will be provided soon. Please check back for
            updates.
          </p>
          <p>
            <strong>For Foreign Delegates:</strong> Payment can be made through
            SWIFT/Wire transfer. Details will be provided soon. Please check
            back for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration_fee;
