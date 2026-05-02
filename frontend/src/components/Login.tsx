import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../services/firebase";
import { useState } from "react";
// TODO Zustand

const Login = () => {
  const [loginResult, setLoginResult] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // @ts-ignore
        setLoginResult(user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setLoginResult(error);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="border border border-green-300 rounded-xl p-2 md:p-6 w-fit bg-green-100 grid gap-4 mx-auto">
      <label className="text-xl" htmlFor="email">
        Email :
      </label>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        name="email"
        required
        minLength={4}
        maxLength={20}
        size={20}
        style={{ border: "solid 1px", padding: "5px", borderRadius: "4px" }}
      />
      <label className="text-xl pt-4" htmlFor="password">
        Password :
      </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minLength={4}
        maxLength={20}
        size={20}
        style={{ border: "solid 1px", padding: "5px", borderRadius: "4px" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-fit text-center "
      >
        Login
      </button>

      <div>{JSON.stringify(loginResult) }</div>
    </section>
  );
};

export default Login;
