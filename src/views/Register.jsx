import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import signup from "../assets/images/signup.png";
import Proceed from "../components/Proceed";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const { setCurrentUser, currentUser } = UserAuth();
  const [validateBvn, setValidateBvn] = useState(false);
  const [check, setCheck] = useState(false);
  const [phonenumber, setPhonenumber] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [bvn, setBvn] = useState("");
  const [fullname, setFullname] = useState("");
  const [validateMsg, setValidateMsg] = useState(false);

  const navigate = useNavigate();
  // let res;
  // const tester = async (e) => {
  //   try {
  //     res = await axios.post(
  //       "http://127.0.0.1:8000/api/validatebvn/",
  //       { phone_number: phonenumber },
  //       {
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     );
  //     setBvn(res.data.bvn);
  //     setFullname(res.data.full_name);
  //     setPhone_number(res.data.bvn_phone_number);
  //     setValidateBvn(true);
  //     setCurrentUser(res.data);

  //     // console.log(res.data);
  //     console.log(currentUser);
  //   } catch (error) {
  //     setTimeout(() => {
  //       setValidateMsg(false);
  //       setPhonenumber("");
  //     }, 3000);
  //     setValidateMsg(true);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/otp");
    console.log("Submitted");
  };
  const handleValidate = (e) => {
    e.preventDefault();
    // tester();
    console.log("Validated");
  };

  return (
    <div className="overflow-hidden ">
      {!validateBvn ? (
        <>
          <div className="absolute bg-modal modal z-10 h-[100vh] w-[100vw] flex justify-center items-center">
            <div className=" w-[80vw] sm:w-[600px] absolute z-20 bg-white h-96 shadow-md rounded-2xl p-4 sm:p-5 md:p-10">
              <form
                onSubmit={handleValidate}
                className=" flex flex-col justify-center items-center "
              >
                <div className="my-2 text-center ">
                  <p className="sm:text-2xl text-primary my-4">
                    Enter Phonenumber linked to your BVN.
                  </p>
                  <input
                    className="w-[100%] sm:w-[450px] py-4 pl-5 sm:text-xl my-3 placeholder:text-primary placeholder:opacity-60 text-primary  rounded-xl border border-primary bg-white"
                    required
                    type="tel"
                    name="phonenumber"
                    placeholder="PhoneNumber"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
                <Proceed text={"Validate"} width={"w-[100%] sm:w-[450px]"} />
                {validateMsg ? (
                  <p className="text-xl text-center text-gray-500">
                    The provided phone number is not linked to an existing BVN
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </>
      ) : null}
      <Navbar />
      <div className="mx-8">
        <div className="flex gap-10 justify-center">
          <div className="left hidden md:block">
            <p className="md:text-3xl lg:text-4xl my-2 font-bold text-primary">
              Let's get started.
            </p>
            <img
              src={signup}
              className="h-[45vh] lg:h-[65vh] w-[40vw]"
              alt="signup_img"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="ml-4 right p-2 pt-10 flex items-center flex-col"
          >
            <p className="block md:hidden text-4xl my-2 font-bold text-primary">
              Let's get started.
            </p>
            <div className="my-2 flex flex-col ">
              <label
                htmlFor="fullname"
                className="text-primary md:text-xl capitalize block"
              >
                Fullname
              </label>
              <input
                className="w-[380px] lg:w-[450px] py-2 lg:py-4 pl-5 text-primary rounded-xl border border-primary bg-white"
                type="text"
                name="fullname"
                value={fullname}
                disabled={true}
              />
            </div>
            <div className="my-2 flex flex-col ">
              <label
                htmlFor="phonenumber"
                className="text-primary md:text-xl capitalize block"
              >
                Phone Number
              </label>
              <input
                className="w-[380px] lg:w-[450px] py-2 lg:py-4 pl-5 text-primary rounded-xl border border-primary bg-white"
                type="tel"
                name="phonenumber"
                disabled={true}
                value={phone_number}
              />
            </div>
            <div className="my-2 flex flex-col ">
              <label
                htmlFor="bvn"
                className="text-primary md:text-xl capitalize block"
              >
                BVN
              </label>
              <input
                className="w-[380px] lg:w-[450px] py-2 lg:py-4 pl-5 text-primary rounded-xl border border-primary bg-white"
                type="number"
                disabled={true}
                name="bvn"
                value={bvn}
              />
            </div>
            <Proceed text={"Proceed"} width={"w-[380px] lg:w-[450px]"} />

            <div className="flex my-6 justify-between items-center">
              <div>
                <input
                  required
                  type="checkbox"
                  name="checkbox"
                  value={check}
                  onChange={(e) => setCheck(!e)}
                />
                <label htmlFor="checkbox" className="pl-1">
                  I agree to the terms and conditions stipulated in this{" "}
                  <span className="text-primary">
                    <Link to={"https://www.google.com"}>Link.</Link>
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
