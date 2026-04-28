import React from "react";
import AddPlant from "./components/AddPlant";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AddPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans">
        <Header></Header>
        <div className="pt-48 flex-1 bg-[url('./assets/images/plant-add.jpg')] bg-cover bg-center">
          <AddPlant></AddPlant>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AddPage;
