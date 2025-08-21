import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
    const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
    const setAvailableTimes = jest.fn();
    const onSubmit = jest.fn();

    it("renders the form fields correctly", () => {
        render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} onSubmit={onSubmit}/>);

        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/# of people/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Please check this box if you need a child seat/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Contact Information/i)).toBeInTheDocument();
        expect(screen.getByText(/Reserve/i)).toBeInTheDocument();
    });

    it("calls setAvailableTimes when the date changes", () => {
        render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} onSubmit={onSubmit}/>);

        const dateInput = screen.getByLabelText(/Date/i);
        fireEvent.change(dateInput, { target: { value: "2025-08-25" } });

        expect(setAvailableTimes).toHaveBeenCalledWith("2025-08-25");
    });

    it("displays validation errors for required fields", async () => {
        render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} onSubmit={onSubmit}/>);

        const form = screen.getByTestId("booking-form");
        const submitButton = screen.getByRole("button", { name: /Reserve/i });
        fireEvent.click(submitButton);

        expect(form.checkValidity()).toBe(false);
    });

    it("submits the form with valid data", () => {
        render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} onSubmit={onSubmit}/>);

        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
        fireEvent.change(screen.getByLabelText(/# of people/i), { target: { value: "4" } });
        fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2025-08-25" } });
        fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: "12:00 PM" } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "birthday" } });
        fireEvent.change(screen.getByLabelText(/Contact Information/i), { target: { value: "1234567890" } });

        const submitButton = screen.getByRole("button", { name: /Reserve/i });
        fireEvent.click(submitButton);

        expect(screen.queryByText(/First Name is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Last Name is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Number of people is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Date is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Time is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Occasion is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Mobile number is required/i)).not.toBeInTheDocument();
    });
});
