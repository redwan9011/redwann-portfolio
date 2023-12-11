import {  FaReact } from "react-icons/fa";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss,SiFirebase, SiExpress, SiMongoosedotws  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiBootstrap, DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import logo from '../../assets/download (1).png'
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
    return (
        <div className="max-w-6xl mx-auto mt-10 mb-10">
           <div className="text-center">
           <h1 className="text-xl md:md:text-2xl lg:text-4xl font-bold font-serif">SKILLS</h1>
            <p className="text-slate-600 mt-2 font-semibold text-xs md:text-sm lg:text-base">Here are some of my skills on which <br /> I have been working on for the past 6 months.</p>
           </div>
         <div className="flex flex-col lg:flex-row gap-10 mt-8">
         <div className="flex-1 border-2 border-black px-8 py-6 rounded-xl">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-5 font-serif">Frontend </h1>

          <div className="flex flex-wrap justify-center gap-5">

          <div className="flex gap-2 items-center border border-black w-fit px-4 py-2  rounded-lg ">
                <FaHtml5 className="text-orange-700 md:md:text-2xl"/>
                <span className="text-xs md:text-base">HTML</span>
                </div>

                <div className="flex gap-2 items-center border border-black w-fit px-5 py-3 rounded-lg">
                <FaCss3 className="text-blue-700 md:text-2xl"/>
                <span className="text-xs md:text-base">CSS</span>
                </div>
                <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                <SiTailwindcss className="text-blue-700 md:text-2xl"/>
                <span className="text-xs md:text-base">Tailwind CSS</span>
                </div>
                <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                < IoLogoJavascript className="text-yellow-600 md:text-2xl"/>
                <span className="text-xs md:text-base">JavaScript</span>
                </div>

                <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                <FaReact className="text-blue-700 md:text-2xl"/>
                <span className="text-xs md:text-base">React js</span>
                </div>
          </div>

            </div>
            <div className="flex-1 border-2 border-black px-8 py-6 rounded-xl">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-5 font-serif">Backend </h1>

              <div className="flex flex-wrap justify-center gap-5">

              <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                <DiMongodb className="text-green-700 md:text-2xl"/>
                <span className="text-xs md:text-base">MongoDB</span>
                </div>
                <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                <SiFirebase  className="text-yellow-400 md:text-2xl"/>
                <span className="text-xs md:text-base">React js</span>
                </div>

                <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                <SiExpress  className="text-black md:text-2xl"/>
                <span className="text-xs md:text-base">Express js</span>
                </div>
                <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                <FaNodeJs  className="text-green-600 md:text-2xl"/>
                <span className="text-xs md:text-base">Node js</span>
                </div>
              </div>
            </div>
         </div>
        <div className="flex justify-center mt-5">
        <div className=" border-2 border-black px-8 py-6 rounded-xl w-full lg:w-1/2">
                <h1 className="text-xl md:text-3xl font-bold text-center mb-5 font-serif">Learning and Exploring </h1>

              <div className="flex flex-wrap justify-center gap-5">

              <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                <DiBootstrap className="text-red-600 md:text-2xl"/>
                <span className="text-xs md:text-base">Bootstrap</span>
                </div>
              <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                <TbBrandNextjs className="text-black md:text-2xl"/>
                <span className="text-xs md:text-base">Next Js</span>
                </div>
              <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                <SiMongoosedotws className="text-black md:text-2xl"/>
                <span className="text-xs md:text-base">Mongoose</span>
                </div>
                <div className="flex gap-2 items-center border border-black w-fit px-5 py-3  rounded-lg">
                <img src={logo} alt="" className="w-7" />
                <span className="text-xs md:text-base">Material Ui</span>
                </div>

              </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;