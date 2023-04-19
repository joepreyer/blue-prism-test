import { Log } from "../../types";
import { formatDateString } from "../../utils";
import PropertyItem from "./property-item";

const LogBox = ({ log }: { log: Log }) => {
    const { id, endTime, scheduleId, serverName, startTime, status } = log;
    return (
        <div className="border border-1 border-grey rounded-lg p-2 shadow-md">
            <h4 className="font-bold border-b pb-2">ID: {id}</h4>
            <div className="text-sm mt-2">
                <PropertyItem name="Start time" value={formatDateString(startTime)} />
                <PropertyItem name="End time" value={formatDateString(endTime)} />
                <PropertyItem name="Schedule id" value={scheduleId} />
                <PropertyItem name="Server name" value={serverName} />
                <PropertyItem name="Status" value={status} />
            </div>
        </div>
    );
};

export default LogBox;
