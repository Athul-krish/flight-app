import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'


const AddFlight = () => {

    const [input, changeInput] = useState({
        flight_number: "",
        airline: "",
        origin: "",
        destination: "",
        departure_date: "",
        departure_time: "",
        arrival_time: "",
        fare: "",
        total_seats: "",
        available_seats: "",
        status: "Scheduled"
    })

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {


        if (input.origin === input.destination) {
            alert("Origin and Destination must be different")
            return
        }

        if (Number(input.available_seats) > Number(input.total_seats)) {
            alert("Available seats cannot exceed total seats")
            return
        }

        const formattedInput = {
            ...input,
            fare: Number(input.fare),
            total_seats: Number(input.total_seats),
            available_seats: Number(input.available_seats)
        }

        console.log(formattedInput)

        axios.post("https://host-demo-app.onrender.com/api/add-flight", formattedInput)
            .then((response) => {
                console.log(response.data)
                alert("Flight added successfully")

                changeInput({
                    flight_number: "",
                    airline: "",
                    origin: "",
                    destination: "",
                    departure_date: "",
                    departure_time: "",
                    arrival_time: "",
                    fare: "",
                    total_seats: "",
                    available_seats: "",
                    status: "Scheduled"
                })
            })
            .catch((error) => {
                console.log(error.response?.data)
                alert(error.response?.data?.message || "Something went wrong")
            })
    }

    return (
        <div>
            <Navbar/>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-5">

                        <div className="card p-3 shadow">
                            <h4 className="text-center mb-3">Add Flight</h4>

                            <div className="row g-3">

                                <div className="col-12">
                                    <label className="form-label">Flight Number</label>
                                    <input type="text" className="form-control"
                                        name="flight_number"
                                        value={input.flight_number}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Airline</label>
                                    <input type="text" className="form-control"
                                        name="airline"
                                        value={input.airline}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label">Origin</label>
                                    <input type="text" className="form-control"
                                        name="origin"
                                        value={input.origin}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label">Destination</label>
                                    <input type="text" className="form-control"
                                        name="destination"
                                        value={input.destination}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Departure Date</label>
                                    <input type="date" className="form-control"
                                        name="departure_date"
                                        value={input.departure_date}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label">Departure Time</label>
                                    <input type="time" className="form-control"
                                        name="departure_time"
                                        value={input.departure_time}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label">Arrival Time</label>
                                    <input type="time" className="form-control"
                                        name="arrival_time"
                                        value={input.arrival_time}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label">Fare (₹)</label>
                                    <input type="number" className="form-control"
                                        name="fare"
                                        value={input.fare}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label">Total Seats</label>
                                    <input type="number" className="form-control"
                                        name="total_seats"
                                        value={input.total_seats}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label">Available Seats</label>
                                    <input type="number" className="form-control"
                                        name="available_seats"
                                        value={input.available_seats}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-6">
                                    <label className="form-label">Status</label>
                                    <select className="form-control"
                                        name="status"
                                        value={input.status}
                                        onChange={inputHandler}
                                    >
                                        <option value="Scheduled">Scheduled</option>
                                        <option value="Delayed">Delayed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>

                                <div className="col-12 text-center">
                                    <button className="btn btn-primary w-100" onClick={readValue}>
                                        Add Flight
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFlight