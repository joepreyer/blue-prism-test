import { render, fireEvent } from "@testing-library/react";
import ScheduleBox from "../schedule-box";
import { Schedule } from "../../../types";

describe("ScheduleBox", () => {
    const schedule: Schedule = {
        name: "Test Schedule",
        description: "This is a test schedule",
        startDate: "2021-10-01",
        startPoint: "2021-10-01",
        endDate: "2021-11-01",
        endPoint: "2021-11-01",
        timePeriod: 6,
        tasksCount: 10,
        isRetired: false,
        dayOfWeek: 1,
        dayOfMonth: 1,
        id: 0,
        intervalType: ""
    };

    it("should render schedule information correctly", () => {
        const { getByText } = render(
            <ScheduleBox
                schedule={schedule}
                retire={() => { }}
                unRetire={() => { }}
                deleteSchedule={() => { }}
                onClick={() => { }}
            />
        );

        expect(getByText(schedule.name)).toBeInTheDocument();
        expect(getByText(`${schedule.description}`)).toBeInTheDocument();
        expect(getByText(`${schedule.timePeriod}`)).toBeInTheDocument();
        expect(getByText(`${schedule.tasksCount}`)).toBeInTheDocument();
        expect(getByText(`${schedule.isRetired ? "True" : "False"}`)).toBeInTheDocument();
    });

    it("should call deleteSchedule when delete button is clicked", () => {
        const deleteSchedule = jest.fn();
        const { getByText } = render(
            <ScheduleBox
                schedule={schedule}
                retire={() => { }}
                unRetire={() => { }}
                deleteSchedule={deleteSchedule}
                onClick={() => { }}
            />
        );

        fireEvent.click(getByText("x"));
        expect(deleteSchedule).toHaveBeenCalled();
    });

    it("should call retire when Retire button is clicked", () => {
        const retire = jest.fn();
        const { getByText } = render(
            <ScheduleBox
                schedule={schedule}
                retire={retire}
                unRetire={() => { }}
                deleteSchedule={() => { }}
                onClick={() => { }}
            />
        );

        fireEvent.click(getByText("Retire"));
        expect(retire).toHaveBeenCalled();
    });

    it("should call unRetire when Unretire button is clicked", () => {
        const unRetire = jest.fn();
        const { getByText } = render(
            <ScheduleBox
                schedule={{ ...schedule, isRetired: true }}
                retire={() => { }}
                unRetire={unRetire}
                deleteSchedule={() => { }}
                onClick={() => { }}
            />
        );

        fireEvent.click(getByText("Unretire"));
        expect(unRetire).toHaveBeenCalled();
    });
});
