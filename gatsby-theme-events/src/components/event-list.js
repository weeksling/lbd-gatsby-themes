import React from "react";
import { Link } from "gatsby";

const EventsList = ({ events }) => (
  <>
    <h2>Upcoming Events</h2>
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <strong>
            <Link to={event.slug}>{event.name}</Link>
          </strong>
          <br />
          {new Date(event.startDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}{" "}
          in {event.location}
        </li>
      ))}
    </ul>
  </>
);

export default EventsList;
