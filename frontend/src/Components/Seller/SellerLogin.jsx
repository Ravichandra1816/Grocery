import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Context/AppContext";

const SellerLogin = () => {
  const { navigate, isSeller, setIsSeller } = useAppContext();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSeller(true);
  };
  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          <p className="text-2xl font-medium m-auto">
            Seller <span className="text-primary">Login</span>{" "}
          </p>
          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="example@gmail.com"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary "
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Edx@456"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>
          <button className="bg-primary text-white w-full py-2 rounded-md cursor-pointer">
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
