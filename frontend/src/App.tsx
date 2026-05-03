import React from "react";
import Header from "./components/Header";
// import AddPlant from "./components/AddPlant";
import Footer from "./components/Footer";
// import Home from "./HomePage";
import List from "./components/List";


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen font-sans">
        <header className="fixed top-0 left-0 z-10 w-full">
          <Header></Header>
        </header>

        <div className="flex-1 pt-48 bg-[url('./assets/images/plant.jpg')] bg-cover bg-center">
          <List></List>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
