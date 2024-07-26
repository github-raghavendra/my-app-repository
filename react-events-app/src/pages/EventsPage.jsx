import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

export async function loader() {
  const response = await fetch("http://localhost:8080/api/events");

  if (!response.ok) {
    console.log("There was an error occurred during data fetch!");
    return null;
  } else {
    const resData = await response.json();
    console.log(resData.events);
    return resData.events;
  }
}

function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}
export default EventsPage;


/*
import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
             <Link to={event.id}>{event.title}</Link>  }
             // OR
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;

*/
