import React from "react";
import { GrView } from "react-icons/gr";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscSaveAs } from "react-icons/vsc";

const Main = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl font-sans px-3 sm:px-0">Politics</h1>
      <div className="bg-white rounded-lg px-2 py-2 mt-4">
        <div className="flex justify-center items-center">
          <img
            className="object-cover rounded-md h-72 w-full"
            src="https://www.unhcr.org/thumb1/58ca90ff4.jpg"
            alt=""
          />
        </div>
        <div className="px-8 py-5">
          <div className="flex justify-between items-center">
            <button className="bg-red-100 px-3 py-1 text-[#dc2f02] font-sans font-medium rounded-full text-[12px]">
              CONGRESS
            </button>
            <div className="font-medium  flex gap-4">
              <a className="flex justify-center items-center gap-2 cursor-pointer">
                <GrView />
                <span>2.5m</span>
              </a>
              <a className="flex justify-center items-center gap-2 cursor-pointer">
                <FiMessageSquare />
                <span>15k</span>
              </a>
              <a className="flex justify-center items-center gap-2 cursor-pointer">
                <AiOutlineShareAlt />
                <span>39k</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4 items-end pt-4">
            <h1 className="col-start-1 col-end-4 font-bold font-sans ">
              For a complete list of all available state modifiers, check out
              the Hover, Focus, Other States documentation.
            </h1>
            <a
              className=" flex text-sm py-1 justify-center items-center gap-2 border-2 rounded-full"
              href="/"
            >
              <VscSaveAs />
              <span className="hidden lg:block">Save to pocket</span>
            </a>
            <span className="col-start-1 col-end-4 text-[10px] font-sans pt-4">
              By{" "}
              <span className="font-medium">MELANIE ZANONA, KYLE CHENEY</span>{" "}
              and <span className="font-medium">HEATHER CAYGLE</span> <br />
              11/30/2022 08:33 PM EST
            </span>
            <a
              className=" flex text-sm py-[5px] justify-center items-center gap-2  rounded-full bg-blue-50 text-blue-500"
              href="/"
            >
              <AiOutlineShareAlt />
              <span className="hidden lg:block">Share on media</span>
            </a>
          </div>
        </div>
      </div>
      <div className="px-8 py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere
        officia optio tenetur? Ullam similique, placeat voluptatibus inventore,
        minima possimus vitae id odit numquam dolores blanditiis quae nulla
        laudantium excepturi saepe, quos dignissimos pariatur est alias nobis
        mollitia ipsam nam. Quia adipisci quos debitis illum cumque corporis
        laudantium sed vero quis tenetur, nemo eos? Doloribus distinctio
        delectus dolore ex incidunt itaque quas nostrum tempora, libero
        repudiandae accusamus non magni totam sed eveniet facilis veniam aut!
        Error cupiditate aut rerum quod commodi architecto dolorum, nisi vel ea
        esse obcaecati, eius aspernatur quam dolore porro ab enim, at veniam?
        Amet, sunt hic. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere
        officia optio tenetur? Ullam similique, placeat voluptatibus inventore,
        minima possimus vitae id odit numquam dolores blanditiis quae nulla
        laudantium excepturi saepe, quos dignissimos pariatur est alias nobis
        mollitia ipsam nam. Quia adipisci quos debitis illum cumque corporis
        laudantium sed vero quis tenetur, nemo eos? Doloribus distinctio
        delectus dolore ex incidunt itaque quas nostrum tempora, libero
        repudiandae accusamus non magni totam sed eveniet facilis veniam aut!
        Error cupiditate aut rerum quod commodi architecto dolorum, nisi vel ea
        esse obcaecati, eius aspernatur quam dolore porro ab enim, at veniam?
        Amet, sunt hic. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere
        officia optio tenetur? Ullam similique, placeat voluptatibus inventore,
        minima possimus vitae id odit numquam dolores blanditiis quae nulla
        laudantium excepturi saepe, quos dignissimos pariatur est alias nobis
        mollitia ipsam nam. Quia adipisci quos debitis illum cumque corporis
        laudantium sed vero quis tenetur, nemo eos? Doloribus distinctio
        delectus dolore ex incidunt itaque quas nostrum tempora, libero
        repudiandae accusamus non magni totam sed eveniet facilis veniam aut!
        Error cupiditate aut rerum quod commodi architecto dolorum, nisi vel ea
        esse obcaecati, eius aspernatur quam dolore porro ab enim, at veniam?
        Amet, sunt hic.
      </div>
      
    </div>
  );
};

export default Main;
