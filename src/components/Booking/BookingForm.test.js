import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
    const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
    let setAvailableTimes;
    let onSubmit;

    beforeEach(() => {
        setAvailableTimes = jest.fn();
        onSubmit = jest.fn();
    });

    it("renders all form fields and options", () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                onSubmit={onSubmit}
            />
        );
        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/# of people/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Please check this box if you need a child seat/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Contact Information/i)).toBeInTheDocument();
        expect(screen.getByText(/Reserve/i)).toBeInTheDocument();
        // Check time options
        availableTimes.forEach((time) => {
            expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
        });
        // Check occasion options
        expect(screen.getByRole("option", { name: /Birthday/i })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: /Engagement/i })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: /Anniversary/i })).toBeInTheDocument();
    });

    it("calls setAvailableTimes when the date changes", () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                onSubmit={onSubmit}
            />
        );
        const dateInput = screen.getByLabelText(/Date/i);
        fireEvent.change(dateInput, { target: { value: "2025-08-25" } });
        expect(setAvailableTimes).toHaveBeenCalledWith("2025-08-25");
    });

    it("displays validation errors for required fields and invalid input", async () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                onSubmit={onSubmit}
            />
        );
        const submitButton = screen.getByRole("button", { name: /Reserve/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Number of people is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Mobile number is required/i)).toBeInTheDocument();
        });

        // Test invalid number of people
        fireEvent.change(screen.getByLabelText(/# of people/i), { target: { value: "0" } });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(screen.getByText(/At least 1 person/i)).toBeInTheDocument();
        });

        fireEvent.change(screen.getByLabelText(/# of people/i), { target: { value: "11" } });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(screen.getByText(/Maximum 10 people/i)).toBeInTheDocument();
        });

        // Test invalid mobile number
        fireEvent.change(screen.getByLabelText(/Contact Information/i), { target: { value: "123" } });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(screen.getByText(/Mobile number must be 10 digits/i)).toBeInTheDocument();
        });
    });

    it("submits the form with valid data", async () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                onSubmit={onSubmit}
            />
        );
        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
        fireEvent.change(screen.getByLabelText(/# of people/i), { target: { value: "4" } });
        fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2025-08-25" } });
        fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: "12:00 PM" } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "birthday" } });
        fireEvent.change(screen.getByLabelText(/Contact Information/i), { target: { value: "1234567890" } });
        fireEvent.click(screen.getByLabelText(/Please check this box if you need a child seat/i));

        const submitButton = screen.getByRole("button", { name: /Reserve/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalled();
            expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/must be 10 digits/i)).not.toBeInTheDocument();
        });
    });

    it("mobile number input only allows digits and max 10 characters", () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                onSubmit={onSubmit}
            />
        );
        const mobileInput = screen.getByLabelText(/Contact Information/i);
        fireEvent.change(mobileInput, { target: { value: "abc1234567890xyz" } });
        expect(mobileInput.value).toBe("1234567890");
        fireEvent.change(mobileInput, { target: { value: "123456789012345" } });
        expect(mobileInput.value).toBe("1234567890");
    });

    it("renders with empty availableTimes", () => {
        render(
            <BookingForm
                availableTimes={[]}
                setAvailableTimes={setAvailableTimes}
                onSubmit={onSubmit}
            />
        );
        expect(screen.getByRole("option", { name: /Select a time/i })).toBeInTheDocument();
    });

    it("does not call setAvailableTimes if not provided", () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                onSubmit={onSubmit}
            />
        );
        const dateInput = screen.getByLabelText(/Date/i);
        fireEvent.change(dateInput, { target: { value: "2025-08-25" } });
        // No error thrown, no setAvailableTimes called
        // (no assertion needed, just ensure no crash)
    });
});
