import React, { useEffect, useState } from "react";
import axios from "axios";


const ViewFlights = () => {
  const [data, changeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    axios
      .get("https://host-demo-app.onrender.com/api/flights")
      .then((response) => {
        changeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
     

      <div className="container mt-4">
        <h2 className="text-center mb-4">View All Flights</h2>

        {loading ? (
          <h4 className="text-center text-primary">Loading...</h4>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Flight No.</th>
                  <th>Airline</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Departure Date</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Fare (₹)</th>
                  <th>Total Seats</th>
                  <th>Available Seats</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {data.map((value) => (
                  <tr key={value.id}>
                    <td>{value.flight_number}</td>
                    <td>{value.airline}</td>
                    <td>{value.origin}</td>
                    <td>{value.destination}</td>
                    <td>{value.departure_date}</td>
                    <td>{value.departure_time}</td>
                    <td>{value.arrival_time}</td>
                    <td>₹{value.fare}</td>
                    <td>{value.total_seats}</td>
                    <td>{value.available_seats}</td>
                    <td>{value.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewFlights;