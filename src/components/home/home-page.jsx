import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }) => {
  return (
    <div className="home-body">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
          <div className="image">
            <Image src={ev.image} alt={ev.title} height={200} width={300} />
          </div>
          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
