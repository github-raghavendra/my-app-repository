import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetailsPage = () => {

  const params = useParams();

return (
    <div>
      <h2>EventDetailsPage</h2>
      <p>Event Id: {params.eventId}</p>
    </div>
  )
}

export default EventDetailsPage