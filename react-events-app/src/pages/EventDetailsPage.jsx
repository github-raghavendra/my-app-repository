import { json, useLoaderData } from "react-router-dom";
import Event from "../components/Event";

const EventDetailsPage = () => {
  const event = useLoaderData();

  console.log("useloader from EventDetailsPage");
  console.log(event);

  return (
    <Event  />
  );
};
export default EventDetailsPage;

export async function loader({request, params}){
  const url = request.url;
  console.log(url);
  const eventPRN = params.eventId;
  const response = await fetch("http://localhost:8080/api/events/" + eventPRN);
  console.log("this is the single response from backend server");
  console.log(response);
  if(!response.ok){
    throw json({message: "Could not fetch details for the selected event."}, {status: 500});
  }else{
    const resData = await response.json();
    console.log("resData value is =========>>>");
    console.log(resData);
    return resData;
  }
}


/*
import React from "react";
import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const params = useParams();

  return (
    <div>
      <h2>EventDetailsPage</h2>
      <p>Event Id: {params.eventId}</p>
    </div>
  );
};

export default EventDetailsPage;
*/