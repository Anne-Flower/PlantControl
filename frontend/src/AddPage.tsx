import React from "react";
import AddPlant from "./components/AddPlant";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useID } from "./hooks/zustand";
import { User } from "./types/user";

const AddPage = () => {
  function useId() {
    const iddd = useID((user: any) => user.id);
    return <div>here is the id : {iddd}</div>;
  }
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans">
        <Header></Header>
        <div className="pt-48 flex-1 bg-[url('./assets/images/plant-add.jpg')] bg-cover bg-center">
        <div>{useId()}</div>
          <AddPlant></AddPlant>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AddPage;
