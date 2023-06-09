import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const EventCard = ({ data }) => {
  const emailInput = useRef();
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = emailInput?.current?.value;
    const eventId = router?.query?.id;
    if (email.length > 0) {
      try {
        const response = await fetch("/api/event-registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            eventId,
          }),
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        if(response.status === 200 || 201) alert(data.message);
        console.log(data, response.status, "POST");
      } catch (error) {
        alert(error);
        console.log(error, "Error");
      }
    }
    else {
      alert('Please type your email for registration');
    }
  };
  return (
    <div className="single-event-page">
      <Image src={data.image} width={1000} height={700} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email-registration">
        <label>Get Registered for this event!</label>
        <input ref={emailInput} id="email" placeholder="Please enter your email here..." type="email" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default EventCard;
