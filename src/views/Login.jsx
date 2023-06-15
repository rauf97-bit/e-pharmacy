import React, { useState } from "react";
import Navbar from "../components/Navbar";
import login from "../assets/images/login.png";
import Proceed from "../components/Proceed";
import { Link } from "react-router-dom";
const Login = () => {
  const [reset, setReset] = useState(false);
  const [validateMsg, setValidateMsg] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setValidateMsg(false);
      setResetEmail("");
    }, 3000);
    // setReset(false);
    console.log(reset);
    setValidateMsg(true);
    console.log(reset);
  };
  // setReset("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <div>
      {reset ? (
        <div className="absolute bg-modal modal z-10 h-[100vh] w-[100vw] flex justify-center items-center">
          <button
            onClick={() => setReset(false)}
            className="text-white font-bold text-3xl md:text-6xl absolute top-5 md:top-10 right-6"
          >
            X
          </button>
          <div className="w-[80vw] sm:w-[600px] absolute z-20 bg-white h-96 shadow-md rounded-2xl p-4 sm:p-5 md:p-10">
            <form
              onSubmit={handleReset}
              className=" flex flex-col justify-center items-center "
            >
              <div className="my-2 w-full text-center ">
                <p className="text-xl sm:text-2xl text-primary my-4">
                  Enter Registered email.
                </p>
                <input
                  required
                  className="w-[100%] sm:w-[450px] py-4 pl-5 text-xl my-3 placeholder:text-primary placeholder:opacity-60 text-primary  rounded-xl border border-primary bg-white"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>
              <Proceed text={"Reset"} width={"w-[100%] sm:w-[450px]"} />
              {validateMsg ? (
                <p className="text-2xl text-gray-500">
                  Check your email for password reset link
                </p>
              ) : null}
            </form>
          </div>
          {/* <span>ForgotPassword</span> */}
        </div>
      ) : null}
      <Navbar />
      <div className="mx-8">
        <div className="flex gap-10 justify-center md:justify-">
          <div className="left p-2 hidden md:block">
            <p className="text-3xl lg:text-4xl my-2 font-bold text-primary">
              Welcome Back,
            </p>
            <img src={login} alt="login_img" className="m min-h-[300px]" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="ml-4 right p-2 pt-10 flex flex-col"
          >
            <p className="block md:hidden text-4xl text-center my-2 font-bold text-primary">
              Welcome Back,
            </p>
            <div className="my-2 flex flex-col ">
              <label htmlFor="text-primary">Email</label>
              <input
                className="w-[380px] lg:w-[450px] py-4 pl-5 text-primary  rounded-xl border border-primary bg-white"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-2 flex flex-col ">
              <label htmlFor="text-primary">Password</label>
              <input
                className="w-[380px] lg:w-[450px] py-4 pl-5 text-primary  rounded-xl border border-primary bg-white"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex my-6 justify-between items-center">
              <div>
                <input
                  type="checkbox"
                  name="checkbox"
                  value={check}
                  onChange={(e) => setCheck(!e)}
                />
                <label htmlFor="checkbox" className="ml-1">
                  Remember
                </label>
              </div>
              <Link to={"/signup"} className="text-primary">
                Don't have an account ?{" "}
              </Link>
            </div>
            <Proceed text={"Login"} width={"w-[380px] lg:w-[450px]"} />
            <button
              onClick={(e) => setReset(true)}
              className="text-xl text-primary my-2 text-center"
            >
              Forgot password?
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
