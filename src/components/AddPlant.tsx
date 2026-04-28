import React from "react";

const AddPlant = () => {
  return (
    <>
      <section className="flex flex-col items-center border border-green-300 rounded-xl p-6 md:p-12 w-fit mx-auto bg-green-200 ">
        <label className="text-xl" htmlFor="name">
          Name of the plant :
        </label>

        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={4}
          maxLength={8}
          size={20}
          style={{ border: "solid 1px", padding: "5px", borderRadius: "4px"}}
        />
        <label className="text-xl pt-4" htmlFor="species">
          Species :
        </label>
        <input
          type="text"
          id="species"
          name="species"
          required
          minLength={4}
          maxLength={20}
          size={20}
          style={{ border: "solid 1px", padding: "5px", borderRadius: "4px"}}
        />

        <select id="pet-select" className="p-2 border solid 1px mt-4 border-black rounded text-xl w-fit">
          <option value="">Choose your watering frequency</option>
          <option value="1">1 day</option>
          <option value="2">2 days</option>
          <option value="3">3 days</option>
          <option value="4">4 days</option>
          <option value="5">5 days</option>
          <option value="6">6 days</option>
          <option value="7">7 days</option>
          <option value="8">8 days</option>
          <option value="9">9 days</option>
          <option value="10">10 days</option>
        </select>

        <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-fit text-center ">
          Add Plant
        </button>
      </section>
    </>
  );
};

export default AddPlant;
