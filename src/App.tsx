import { useEffect, useState } from 'react';
import { Log, Schedule } from './types';
import LogBox from './components/molecules/log-box';
import ScheduleList from './components/organisms/schedule-list';
import { deleteSchedule, retireSchedule, unRetireSchedule } from './api/schedule-api';
import Button from './components/atoms/button';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [schedules, setSchedules] = useState<Array<Schedule>>([]);
  const [allLogs, setAllLogs] = useState<Array<Log>>([]);
  const [filteredLogs, setFilteredLogs] = useState<Array<Log>>([]);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const schedulesResponse = await fetch('http://localhost:3000/schedules')
        const schedulesJson = await schedulesResponse.json()
        setSchedules(schedulesJson)

        const logsResponse = await fetch('http://localhost:3000/scheduleLogs')
        const logsJson = await logsResponse.json()
        setAllLogs(logsJson)
      }
      catch (error) {
        console.error("Error fetching data\n", error)
        setLoading(false)
      }
    }

    fetchData().then(() => setLoading(false))
  }, []);

  const onRetireSchedule = async (id: number) => {
    const retiredSchedule = await retireSchedule(id)
    const updatedSchedules = schedules.map(schedule => {
      if (schedule.id === retiredSchedule.id) {
        return { ...schedule, isRetired: true }
      }
      return schedule
    }
    )
    setSchedules(updatedSchedules)
  }

  const onUnRetireSchedule = async (id: number) => {
    const unRetiredSchedule = await unRetireSchedule(id)
    const updatedSchedules = schedules.map(schedule => {
      if (schedule.id === unRetiredSchedule.id) {
        return { ...schedule, isRetired: false }
      }
      return schedule
    }
    )
    setSchedules(updatedSchedules)
  }

  const onDeleteSchedule = async (id: number) => {
    const response = await deleteSchedule(id)
    if (response?.ok) {
      const updatedSchedules = schedules.filter(schedule => schedule.id !== id)
      setSchedules(updatedSchedules)
    }
  }

  const onScheduleSelect = async (schedule: Schedule) => {
    if (selectedSchedule?.id === schedule.id) {
      setSelectedSchedule(null)
      setFilteredLogs([])
    }
    else {
      setSelectedSchedule(schedule)
      const filteredLogs = allLogs.filter(log => log.scheduleId === schedule.id)
      setFilteredLogs(filteredLogs)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="h-screen w-full overflow-hidden px-4">
      <h1 className={`text-4xl font-bold my-4 sm:block ${!!selectedSchedule && 'hidden'}`}>Schedules</h1>
      {!!schedules.length ? <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] h-full w-full">
        <ScheduleList
          className={`flex sm:flex flex-col h-full overflow-y-scroll gap-4 mb-10 sm:pb-20 sm:mr-4 ${!!selectedSchedule && 'hidden'}`}
          schedules={schedules}
          selectedScheduleId={selectedSchedule?.id}
          onScheduleSelect={onScheduleSelect}
          onRetireSchedule={onRetireSchedule}
          onUnRetireSchedule={onUnRetireSchedule}
          onDeleteSchedule={onDeleteSchedule}
        />
        {!!selectedSchedule && <div className="flex flex-col h-full w-full pt-2 sm:pt-0 overflow-hidden pb-4">
          <div className="sm:hidden">
            <Button className="mr-2 h-fit w-fit text-sm" variant="outlined" onClick={() => setSelectedSchedule(null)}>Show all schedules</Button>
            <h2 className=" font-bold my-4">Logs for schedule: {selectedSchedule?.name} </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full overflow-scroll sm:pb-20">
            {filteredLogs.map(log => <LogBox key={log.id} log={log} />)}
          </div>
        </div>}
      </div> : <div>No schedules found. Check the console and make sure you are connecting to the correct API</div>}
    </div>
  );
}

export default App;
