import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error occured!";
  let message = "Something went wrong";

  if (error.status === 500) {
    //console.log("useRouteError react hook uses");
    //console.log(error);
    console.log(error.data);
    //message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  if (error.status === 404) {
    //console.log("useRouteError react hook uses");
    //message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  return (
    <div>
        <MainNavigation />
      <h1>{title}</h1>
      <h2>{message}</h2>
    </div>
  );
};

export default ErrorPage;
