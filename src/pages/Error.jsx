import React from "react";
import ErrorImage from "../assets/error-404.png";

const Error = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <img className="w-40" src={ErrorImage} alt="error-image" />
      <p>Ooops ....The page you are trying to load does not exist</p>
    </div>
  );
};

export default Error;
