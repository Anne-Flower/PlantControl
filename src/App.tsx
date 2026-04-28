import React from "react";
import Header from "./components/Header";
import AddPlant from "./components/AddPlant";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans">
        <header className="fixed top-0 left-0 z-10 w-full">
          <Header></Header>
        </header>
        <div className="bg-[url('./assets/images/plant.jpg')] flex-1 bg-cover  pt-24 flex items-center justify-center">
          <AddPlant></AddPlant>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
