import React from "react";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
} from "../features/user/userSlice";
import { signOut } from "firebase/auth";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
  
    const handleAuth = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    };


  return (
    <div className="bg-white mt-10 rounded-lg px-8 py-5 hidden lg:block">
      <div className="flex justify-between items-baseline">
        <img className="rounded-full w-12" src={userPhoto}  alt={userName} />
        <div className=" xl:block hidden cursor-pointer flex-col items-end ">
          <div className="hover:opacity-100">
            <FiSettings />
            <IoIosArrowDown />
          </div>
          <div className="min-h-fit rounded-md absolute -mr-6 -ml-6 pt-6 -mt-7  opacity-0 hover:opacity-100 ">
          <button 
          onClick={handleAuth}
          className=" bg-black hover:opacity-75 text-white text-[16px] p-1 rounded-md">
            Sign out
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
