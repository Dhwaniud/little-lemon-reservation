import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const getDate = (monthsToAdd = 0) => {
    const date = new Date();
    date.setMonth(date.getMonth() + monthsToAdd);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

const BookingSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    numberOfPeople: Yup.number()
        .required("Number of people is required")
        .min(1, "At least 1 person")
        .max(10, "Maximum 10 people"),
    childSeat: Yup.boolean(),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    occasion: Yup.string(),
    mobileNumber: Yup.string()
        .required("Mobile number is required")
        .matches(/^\d{10}$/, "Mobile number must be 10 digits"),
});

function BookingForm({ availableTimes, setAvailableTimes, onSubmit }) {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                numberOfPeople: "",
                childSeat: false,
                date: getDate(),
                time: "",
                occasion: "",
                mobileNumber: "",
            }}
            validationSchema={BookingSchema}
            onSubmit={onSubmit}
        >
            {({ setFieldValue, values }) => (
                <Form data-testid="booking-form">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                    />
                    <ErrorMessage
                        name="firstName"
                        component="span"
                        className="error"
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" type="text" required />
                    <ErrorMessage
                        name="lastName"
                        component="span"
                        className="error"
                    />

                    <label htmlFor="numberOfPeople"># of people</label>
                    <div className="no-of-people">
                        <Field
                            id="numberOfPeople"
                            name="numberOfPeople"
                            type="number"
                            min={1}
                            max={10}
                            required
                        />
                        <span>Maximum - 10</span>
                    </div>
                    <ErrorMessage
                        name="numberOfPeople"
                        component="span"
                        className="error"
                    />

                    <label htmlFor="childSeat">
                        Please check this box if you need a child seat
                    </label>
                    <Field id="childSeat" name="childSeat" type="checkbox" />

                    <label htmlFor="date">Date</label>
                    <Field
                        id="date"
                        name="date"
                        type="date"
                        min={getDate()}
                        max={getDate(6)}
                        required
                        onChange={(e) => {
                            setFieldValue("date", e.target.value);
                            setAvailableTimes &&
                                setAvailableTimes(e.target.value);
                        }}
                    />
                    <ErrorMessage
                        name="date"
                        component="span"
                        className="error"
                    />

                    <label htmlFor="time">Time</label>
                    <Field id="time" as="select" name="time" required>
                        <option value="">Select a time</option>
                        {availableTimes &&
                            availableTimes.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                    </Field>
                    <ErrorMessage
                        name="time"
                        component="span"
                        className="error"
                    />

                    <label htmlFor="occasion">Occasion</label>
                    <Field id="occasion" as="select" name="occasion">
                        <option value="">Select an occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </Field>

                    <label htmlFor="mobileNumber">Contact Information</label>
                    <Field
                        id="mobileNumber"
                        name="mobileNumber"
                        type="tel"
                        required
                        pattern="\d{10}"
                        placeholder="1234567890"
                        onChange={(e) => {
                            // Only allow digits, max 10
                            const digitsOnly = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 10);
                            setFieldValue("mobileNumber", digitsOnly);
                        }}
                    />
                    <ErrorMessage
                        name="mobileNumber"
                        component="span"
                        className="error"
                    />

                    <button className="btn btn-submit" type="submit">
                        Reserve
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default BookingForm;
