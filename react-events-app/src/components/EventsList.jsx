// import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import classes from './EventsList.module.css';

function EventsList({events}) {
  // const events = useLoaderData();

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.eventPRN} className={classes.item}>
            <Link to={event.eventPRN}>
              <img src={event.image} alt={event.eventName} />
              <div className={classes.content}>
                <h2>{event.eventName}</h2>
                <time>{event.eventDescription}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;