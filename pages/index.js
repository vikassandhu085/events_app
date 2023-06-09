import { HomePage } from "@/components/home/home-page";
import Head from "next/head";

export default function Home ({data}) {
    return (
        <div className="container">
            <Head>
                <title>Events App</title>
            </Head>
           <HomePage data={data}/>
        </div>
    )
}

export async function getServerSideProps() {
    const { events_categories } = await import('/data/data.json');
    return {
      props:{
        data: events_categories,
      }
    }
  }