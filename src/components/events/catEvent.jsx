import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const CatEvent = ({data, id}) => {
  return (
    <div className='cat-events'>
    <h1>Events in {id}</h1>
    <div className='content'>
      {data.map((ev) => (
        <Link className='card' key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
            <Image src={ev.image} alt={ev.id} height={200} width={300}/>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
        </Link>
      ))}
    </div>
</div>
  )
}

export default CatEvent