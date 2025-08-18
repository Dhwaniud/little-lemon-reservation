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
        mobileNumber: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    const getDate = (monthsToAdd = 0) => {
        const date = new Date();
        date.setMonth(date.getMonth() + monthsToAdd);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const formatPhoneNumberForUI = (value) => {
        // Format the number as +1 123-456-7890 for display
        const formatted = value.replace(
            /^(\d{3})(\d{3})(\d{0,4})$/,
            "+1 $1-$2-$3"
        );

        return formatted.trim();
    };

    return (
        <section className="reservations">
            <div className="container column">
                <h1>Reserve a table</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>First Name</span>
                        <input
                            required
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Last Name</span>
                        <input
                            required
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span># of people</span>
                        <div className="no-of-people">
                            <input
                                required
                                type="number"
                                min={1}
                                max={10}
                                name="numberOfPeople"
                                value={formData.numberOfPeople}
                                onChange={handleChange}
                            />
                            <span>Maximum - 10</span>
                        </div>
                    </label>
                    <label>
                        <span>
                            Please check this box if you need a child seat
                        </span>
                        <input
                            type="checkbox"
                            name="childSeat"
                            checked={formData.childSeat}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Date</span>
                        <input
                            required
                            type="date"
                            name="date"
                            min={getDate()}
                            max={getDate(6)}
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Time</span>
                        <input
                            required
                            type="time"
                            name="time"
                            min="11:00"
                            max="22:00"
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <span>Occasion</span>
                        <select
                            required
                            name="occasion"
                            value={formData.occasion}
                            onChange={handleChange}
                        >
                            <option value="">Select an occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </label>
                    <label>
                        <span>Contact Information</span>
                        <input
                            type="tel"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={(e) => {
                                const digitsOnly = e.target.value
                                    .replace(/\D/g, "")
                                    .slice(-10); // Keep only the last 10 digits
                                setFormData((prevData) => ({
                                    ...prevData,
                                    mobileNumber: digitsOnly,
                                }));
                            }}
                            onFocus={(e) => {
                                e.target.value = formData.mobileNumber; // Remove formatting on focus
                            }}
                            onBlur={(e) => {
                                e.target.value = formatPhoneNumberForUI(
                                    formData.mobileNumber
                                ); // Apply formatting on blur
                            }}
                            placeholder="+1 123-456-7890"
                            pattern="\d{10}" /* Matches 10-digit numbers */
                            required
                        />
                    </label>
                    <button className="btn btn-primary" type="submit">
                        Reserve
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Reservations;
