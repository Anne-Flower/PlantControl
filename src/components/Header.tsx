import React from "react";
import { Link } from "react-router";

const header = () => {
  return (
    <section className="bg-green-200 py-6 md:py-8 flex justify-center ">
      <h1 className="text-4xl text-black text-center font-bold tracking-wide ">PLANT CONTROL</h1>
      {/* <Link to="/add" className="p-2 w-fit h-fit bg-black hover:bg-[url('./assets/images/plant.jpg')] text-white font-bold rounded ">
        Add Plant
      </Link> */}
    </section>
  );
};

export default header;
