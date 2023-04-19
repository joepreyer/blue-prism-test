import { render, fireEvent } from '@testing-library/react';
import ScheduleList from '../schedule-list';
import { Schedule } from '../../../types';

const mockSchedules: Schedule[] = [
    {
        id: 1,
        name: 'Schedule 1',
        isRetired: true,
        startDate: '2021-10-01',
        endDate: '2021-11-01',
        timePeriod: 6,
        tasksCount: 10,
        intervalType: 'Daily',
        description: 'This is a test schedule',
        dayOfMonth: 1,
        dayOfWeek: 1,
        startPoint: '2021-10-01',
        endPoint: '2021-11-01',
    },
];

describe('ScheduleList', () => {
    it('renders a list of schedules', () => {
        const { getByText } = render(
            <ScheduleList
                schedules={mockSchedules}
                onScheduleSelect={() => { }}
                onRetireSchedule={() => { }}
                onUnRetireSchedule={() => { }}
                onDeleteSchedule={() => { }}
            />
        );

        expect(getByText('Schedule 1')).toBeInTheDocument();
    });

    it('calls the onScheduleSelect function when a schedule is clicked', () => {
        const handleSelect = jest.fn();
        const { getByText } = render(
            <ScheduleList
                schedules={mockSchedules}
                onScheduleSelect={handleSelect}
                onRetireSchedule={() => { }}
                onUnRetireSchedule={() => { }}
                onDeleteSchedule={() => { }}
            />
        );

        fireEvent.click(getByText('Schedule 1'));

        expect(handleSelect).toHaveBeenCalledTimes(1);
        expect(handleSelect).toHaveBeenCalledWith(mockSchedules[0]);
    });

    it('calls the onUnRetireSchedule function when the unretire button is clicked', () => {
        const handleUnRetire = jest.fn();
        const { getByText } = render(
            <ScheduleList
                schedules={mockSchedules}
                onScheduleSelect={() => { }}
                onRetireSchedule={() => { }}
                onUnRetireSchedule={handleUnRetire}
                onDeleteSchedule={() => { }}
            />
        );

        fireEvent.click(getByText('Unretire'));

        expect(handleUnRetire).toHaveBeenCalledTimes(1);
        expect(handleUnRetire).toHaveBeenCalledWith(mockSchedules[0].id);
    });

    it('calls the onDeleteSchedule function when the delete button is clicked', () => {
        const handleDelete = jest.fn();
        const { getByText } = render(
            <ScheduleList
                schedules={mockSchedules}
                onScheduleSelect={() => { }}
                onRetireSchedule={() => { }}
                onUnRetireSchedule={() => { }}
                onDeleteSchedule={handleDelete}
            />
        );

        fireEvent.click(getByText('x'));

        expect(handleDelete).toHaveBeenCalledTimes(1);
        expect(handleDelete).toHaveBeenCalledWith(mockSchedules[0].id);
    });
});
