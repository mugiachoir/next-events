import EventItem from "../event-item/event-item.component";

import classes from "./event-list.module.css";

const EventList = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
