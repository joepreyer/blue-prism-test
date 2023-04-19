export const retireSchedule = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:3000/schedules/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isRetired: true })
    })
    //if the response is ok, update the specific schedule in the schedules array
    if (response.ok) {
      return await response.json()
    }
    //catch and log the error from the response
    else {
      console.error("Error retiring schedule", response)
    }
  }
  catch (error) {
    console.error("Error retiring schedule", error)
  }
}

export const unRetireSchedule = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:3000/schedules/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isRetired: false })
    })
    //if the response is ok, update the specific schedule in the schedules array
    if (response.ok) {
      return await response.json()
    }
    //catch and log the error from the response
    else {
      console.error("Error unretiring schedule", response)
    }
  }
  catch (error) {
    console.error("Error unretiring schedule", error)
  }
}

export const deleteSchedule = async (id: number) => {
  //show an alert dialogue that confirms if the user wants to delete the schedule, then delete the schedule
  if (window.confirm("Are you sure you want to delete this schedule?")) {
    try {
      const response = await fetch(`http://localhost:3000/schedules/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      //if the response is ok, update the schedules array
      if (response.ok) {
        return response
      }
      //catch and log the error from the response
      else {
        console.error("Error deleting schedule", response)
      }
    }
    catch (error) {
      console.error("Error deleting schedule", error)
    }
  }
}