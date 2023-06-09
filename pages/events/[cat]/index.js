import CatEvent from '@/components/events/catEvent';

const EventsPerCityPage = ({data, id}) => <CatEvent data={data} id={id} />

export default EventsPerCityPage;

export async function getStaticPaths() {
    const {events_categories} = await import('../../../data/data.json');
    const allPaths = events_categories.map((ev) => {
        return {
            params: {
                cat: ev.id.toString(),   
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps (context) {
    const id = context?.params?.cat;
    const {allEvents} = await import('/data/data.json');
    const data = allEvents.filter((ev) => ev.city === id)
    console.log(data, 'filtered data')
    return {
        props:{
            data,
            id
        }
    }
}