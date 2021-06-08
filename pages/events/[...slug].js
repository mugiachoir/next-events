import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";

import EventList from "../../components/event/event-list/event-list.component";
import ResultTitle from "../../components/event/results-title/results-title.component";
import Button from "../../components/ui/button/button.component";
import ErrorAlert from "../../components/ui/error-alert/error-alert.component";

const FilteredEventsPage = ({ hasError, filteredEvents, date }) => {
  const router = useRouter();

  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>Invalid filter, Please adjust your value</ErrorAlert>;
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>No events found</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const viewDate = new Date(date.year, date.month - 1);

  return (
    <Fragment>
      <ResultTitle date={viewDate} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents: filteredEvents,
      date: { year: numYear, month: numMonth },
    },
  };
}

export default FilteredEventsPage;
