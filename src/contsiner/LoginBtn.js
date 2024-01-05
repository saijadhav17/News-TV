import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../Firebase/firebase.config";
import { setUserLoginDetails } from "../features/user/userSlice";

const LoginBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const GoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user.displayName);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage.message);
      });
  };

  const FbAuth = () => {};

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div>
      <div className="py-8 flex flex-col gap-5">
        <a
          onClick={GoogleAuth}
          className="cursor-pointer relative text-sm font-light inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden text-black transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-white group"
        >
          <span className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-150 ease-in-out bg-[#ff758f] group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <FcGoogle />
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <FcGoogle />
          </span>
          <span className="relative w-full px-8 text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Sign in with Google
          </span>
        </a>

        <a
          onClick={FbAuth}
          className="cursor-pointer relative text-sm font-light inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden text-black transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-white group"
        >
          <span className="absolute bottom-0 left-0 w-full h-[1.5px] transition-all duration-150 ease-in-out bg-[#ff758f] group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <img className="w-5" src="/images/facebook.svg" alt="" />
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <img className="w-5" src="/images/facebook.svg" alt="" />
          </span>
          <span className="relative w-full px-8 text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Sign in with Facebook
          </span>
        </a>
      </div>
    </div>
  );
};

export default LoginBtn;
