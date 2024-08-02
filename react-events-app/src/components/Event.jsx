import { Link } from "react-router-dom";
import classes from "./Event.module.css";

const Event = ({ event }) => {
  
  function startDeleteHandler() {
    // ...
  }

  console.log("Single Event Details...");
  console.log(event);

  return (
    <article className={classes.event}>
      <img src={event.imageUrl} alt={event.eventName} />
      <h1>{event.eventName}</h1>
      <time>{event.date}</time>
      <p>{event.eventDescription}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default Event;
