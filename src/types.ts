export type Schedule = {
    dayOfMonth: number,
    dayOfWeek: number,
    description: string,
    endDate: string,
    endPoint: string,
    id: number,
    intervalType: string,
    isRetired: boolean,
    name: string,
    startDate: string,
    startPoint: string,
    tasksCount: number,
    timePeriod: number,
}

export type Log = {
    id: number,
    scheduleId: number,
    status: string,
    endTime: string,
    startTime: string,
    serverName: string,
}