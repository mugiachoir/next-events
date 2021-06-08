import { getFeaturedEvents } from "../helpers/api-util";

import EventList from "../components/event/event-list/event-list.component";

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
