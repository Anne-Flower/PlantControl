import Plant from "../types/plant";
import { Link } from "react-router";

const Card = ({ plant }: { plant: Plant }) => {
  return (
    <>
      <section className="border border border-green-300 rounded-xl p-2 md:p-6 w-fit bg-green-50 hover:bg-green-100">
        <Link to={`/plants/${plant.id}`}>
          <div>{plant.name} </div>
          <div>{plant.dateCreated?.toLocaleDateString()}</div>
        </Link>
      </section>
    </>
  );
};

export default Card;
