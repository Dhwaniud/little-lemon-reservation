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
    expect(screen.getByLabelText(/First Name input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of people input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Need a child seat checkbox/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time select/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion select/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mobile number input/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit reservation form button/i })).toBeInTheDocument();
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
    const dateInput = screen.getByLabelText(/Date input/i);
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
    const submitButton = screen.getByRole("button", { name: /submit reservation form button/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Number of people is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Mobile number is required/i)).toBeInTheDocument();
        });

        // Test invalid number of people
    fireEvent.change(screen.getByLabelText(/Number of people input/i), { target: { value: "0" } });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(screen.getByText(/At least 1 person/i)).toBeInTheDocument();
        });

    fireEvent.change(screen.getByLabelText(/Number of people input/i), { target: { value: "11" } });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(screen.getByText(/Maximum 10 people/i)).toBeInTheDocument();
        });

        // Test invalid mobile number
    fireEvent.change(screen.getByLabelText(/Mobile number input/i), { target: { value: "123" } });
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
    fireEvent.change(screen.getByLabelText(/First Name input/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Last Name input/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/Number of people input/i), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/Date input/i), { target: { value: "2025-08-25" } });
    fireEvent.change(screen.getByLabelText(/Time select/i), { target: { value: "12:00 PM" } });
    fireEvent.change(screen.getByLabelText(/Occasion select/i), { target: { value: "birthday" } });
    fireEvent.change(screen.getByLabelText(/Mobile number input/i), { target: { value: "1234567890" } });
    fireEvent.click(screen.getByLabelText(/Need a child seat checkbox/i));

    const submitButton = screen.getByRole("button", { name: /submit reservation form button/i });
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
    const mobileInput = screen.getByLabelText(/Mobile number input/i);
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
    const dateInput = screen.getByLabelText(/Date input/i);
        fireEvent.change(dateInput, { target: { value: "2025-08-25" } });
        // No error thrown, no setAvailableTimes called
        // (no assertion needed, just ensure no crash)
    });
});
