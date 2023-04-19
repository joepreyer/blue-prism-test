import { Schedule } from "../../types"
import { formatDateString } from "../../utils"
import Button from "../atoms/button"
import PropertyItem from "./property-item"

type ScheduleBoxProps = {
    schedule: Schedule
    retire: () => void
    unRetire: () => void
    deleteSchedule: () => void
    onClick: () => void
    selected?: boolean
}

const ScheduleBox = ({ schedule, retire, unRetire, deleteSchedule, onClick, selected }: ScheduleBoxProps) => {
    const { name, description, startDate, startPoint, endDate, endPoint, timePeriod, tasksCount, isRetired } = schedule

    return (
        <div onClick={onClick} className={`border border-1 border-grey rounded-lg cursor-pointer p-2 shadow-md hover:shadow-lg ${selected && "bg-blue-200"}`}>
            <div className="font-bold flex flex-row items-center border-b pb-2"><Button className="mr-2 h-fit w-fit text-sm" variant="outlined" onClick={deleteSchedule}>x</Button> <h4 className="text-sm truncate">{name}</h4></div>
            <div className="text-sm mt-2 flex flex-col">
                <PropertyItem name="Description" value={description} />
                <PropertyItem name="Start date" value={formatDateString(startDate)} />
                <PropertyItem name="Start point" value={formatDateString(startPoint)} />
                <PropertyItem name="End date" value={formatDateString(endDate)} />
                <PropertyItem name="End point" value={formatDateString(endPoint)} />
                <PropertyItem name="Time period" value={timePeriod} />
                <PropertyItem name="Tasks count" value={tasksCount} />
                <PropertyItem name="Retired" value={isRetired ? "True" : "False"} />
                <Button className="mt-2 self-end" variant={isRetired ? "outlined" : "filled"} onClick={isRetired ? unRetire : retire}>{isRetired ? "Unretire" : "Retire"}</Button>
            </div>
        </div>
    )
}

export default ScheduleBox