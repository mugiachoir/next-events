const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhere",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Design is not painting pictures",
    description:
      "A lot of people doesn't appreciate good design enough, they think it's easy, something that come without much consideration, to tackle that mindset, we build this event",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/design-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Will wars ever stopped?",
    description:
      "Many of you probably sick already hearing about this war and that war, it seems like every country can't keep their nose from another country and that's how it usually start a war",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/war-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  console.log(id);
  return DUMMY_EVENTS.find((event) => event.id === id);
}
