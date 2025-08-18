import React, { useState } from "react";

function Reservations() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        numberOfPeople: "",
        childSeat: false,
        date: "",
        time: "",
        occasion: "",
        mobileNumber: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <section className="reservations">
            <div className="container column">
                <h1>Reserve a table</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>First Name:</span>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Last Name:</span>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Number of People:</span>
                        <input
                            type="number"
                            name="numberOfPeople"
                            value={formData.numberOfPeople}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Please check this box if you need a child seat:</span>
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.childSeat}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Date:</span>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Time:</span>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Occasion:</span>
                        <input
                            name="occasion"
                            value={formData.occasion}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Contact Information:</span>
                        <input
                            type="tel"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                        />
                    </label>
                    <button className="btn btn-primary" type="submit">Reserve</button>
                </form>
            </div>
        </section>
    );
}

export default Reservations;
