import React from "react";
import Card from "./Card";
import Plant from "../types/plant";
import { Link } from "react-router";

const planty: Plant = {
  id: 1,
  name: "Monstera Deliciosa",
  species: "Monstera",
  wateringFrequency: 7,
  lastWatered: new Date("2024-06-01"),
  dateCreated: new Date("2022-05-01"),
};

const List = () => {
  return (
    <>
      <div className="flex flex-col pl-2">
        <div className="flex gap-2 items-center">
        <h1 className="text-2xl text-white rounded-xl h-full p-4 bg-black w-fit text-center font-bold tracking-wide">
          List of your plants
        </h1>
        <Link
          to="/add"
          className="p-4 w-fit h-fit bg-black hover:bg-green-100 hover:text-black text-white font-bold rounded-xl "
        >
          +
        </Link>
        </div>
        <div className="cursor-pointer space-y-4 mt-4 ">
          {" "}
          <Card plant={planty} />
          <Card plant={planty} />
          <Card plant={planty} />
        </div>
      </div>
    </>
  );
};

export default List;
