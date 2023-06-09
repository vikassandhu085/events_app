import EventsPageComponent from '@/components/events/events-page';

const EventsPage = ({data}) => {
  return (
  <EventsPageComponent data={data} />
  )
}

export default EventsPage;

export async function getStaticProps () {
  const {events_categories} = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    }
  }
}