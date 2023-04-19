import React from 'react';
import ScheduleBox from '../molecules/schedule-box';
import { Schedule } from '../../types';

type ScheduleListProps = {
    schedules: Array<Schedule>,
    selectedScheduleId?: number,
    onScheduleSelect: (schedule: Schedule) => void,
    onRetireSchedule: (id: number) => void,
    onUnRetireSchedule: (id: number) => void,
    onDeleteSchedule: (id: number) => void
    className?: string
}

const ScheduleList: React.FC<ScheduleListProps> = ({
    schedules,
    selectedScheduleId,
    onScheduleSelect,
    onRetireSchedule,
    onUnRetireSchedule,
    onDeleteSchedule,
    className
}) => {

    return (
        <div className={className}>
            {schedules.map((schedule) => {
                const { id } = schedule;
                return (
                    <ScheduleBox
                        key={id}
                        schedule={schedule}
                        selected={id === selectedScheduleId}
                        onClick={() => onScheduleSelect(schedule)}
                        retire={() => onRetireSchedule(id)}
                        unRetire={() => onUnRetireSchedule(id)}
                        deleteSchedule={() => onDeleteSchedule(id)}
                    />
                )
            })}
        </div>
    );
}

export default ScheduleList;
