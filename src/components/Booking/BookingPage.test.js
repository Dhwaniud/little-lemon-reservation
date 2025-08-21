import { initializeTimes, updateTimes } from "./BookingPage";

describe("BookingPage", () => {
    beforeEach(() => {
        // Mock the fetchAPI function
        window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
    });

    it("should call fetchAPI with today's date when initializeTimes is dispatched", () => {
        initializeTimes();

        expect(window.fetchAPI).toHaveBeenCalledWith(new Date());
    });

    it("should return the updated times from fetchAPI when initializeTimes is dispatched", () => {
        const updatedTimes = initializeTimes();

        expect(updatedTimes).toEqual(["17:00", "18:00", "19:00"]);
    });

    it("should call fetchAPI with the correct date when updateTimes is dispatched", () => {
        const testDate = "2023-12-25";
        updateTimes(undefined, testDate);

        expect(window.fetchAPI).toHaveBeenCalledWith(new Date(testDate));
    });

    it("should return the updated times from fetchAPI", () => {
        const testDate = "2023-12-25";
        const updatedTimes = updateTimes(null, testDate);

        expect(updatedTimes).toEqual(["17:00", "18:00", "19:00"]);
    });
});
