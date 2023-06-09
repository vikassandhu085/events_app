import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventsPageComponent = ({data}) => {
  return (
    <div className='events-page'>
      {
        data.map((ev) => (
          <Link className='card' key={ev.id} href={`/events/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} height={400} width={400} />
            <h2>{ev.title}</h2>
          </Link>
        ))
      }
   </div>
  )
}

export default EventsPageComponent