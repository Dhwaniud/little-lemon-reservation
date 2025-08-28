import React, { useState, useEffect } from "react";

const getDate = (monthsToAdd = 0) => {
    const date = new Date();
    date.setMonth(date.getMonth() + monthsToAdd);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

function BookingForm({ availableTimes, setAvailableTimes, onSubmit }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        numberOfPeople: "",
        childSeat: false,
        date: getDate(),
        time: "",
        occasion: "",
        mobileNumber: "",
    });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const errors = {};
        if (!formData.firstName) errors.firstName = "First name is required";
        if (!formData.lastName) errors.lastName = "Last name is required";
        if (!formData.numberOfPeople)
            errors.numberOfPeople = "Number of people is required";
        if (!formData.date) errors.date = "Date is required";
        if (!formData.time) errors.time = "Time is required";
        if (!formData.mobileNumber)
            errors.mobileNumber = "Mobile number is required";
        else if (formData.mobileNumber.length !== 10)
            errors.mobileNumber = "Mobile number must be 10 digits";
        setFormErrors(errors);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // On date change, get new list of available times
        if (name === "date") {
            setAvailableTimes(value);
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formErrors).length === 0) {
            onSubmit(formData);
        }
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
        <form data-testid="booking-form" onSubmit={handleSubmit}>
            <label>
                <span>First Name</span>
                <input
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {formErrors.firstName && (
                    <span className="error">{formErrors.firstName}</span>
                )}
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
                <span>Please check this box if you need a child seat</span>
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
                <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                <span>Occasion</span>
                <select
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
                            .slice(-10);
                        setFormData((prevData) => ({
                            ...prevData,
                            mobileNumber: digitsOnly,
                        }));
                    }}
                    //placeholder="1234567890"
                    pattern="\d{10}"
                    required
                />
            </label>
            <button className="btn btn-submit" type="submit">
                Reserve
            </button>
        </form>
    );
}

export default BookingForm;
