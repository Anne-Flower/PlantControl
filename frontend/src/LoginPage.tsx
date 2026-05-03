import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import { useID } from "./hooks/zustand";


const user = {
  uid: "123",
  email: "user@example.com"
};
const LoginPage = () => {
  function useId() {
    const iddd = useID((state: any) => state.id);
    return <div>here is the id : {iddd}</div>;
  }

  function ControlID() {
    const setId = useID((state: any) => state.setID);
    return <button onClick={() => setId(user)}>click me</button>;
  }
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans">
        <Header></Header>
        <div className="pt-48 flex-1 bg-[url('./assets/images/plant-add.jpg')] bg-cover bg-center">
          <div>{useId()}</div>
          <div>{ControlID()}</div>
          <Login />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default LoginPage;
