// import { useState } from 'react'
//import {goGoHome} from "react-icons/go";
import {CgProfile} from "react-icons/cg";
import {FaUser} from "react-icons/fa";
import {BiCalendarAlt} from "react-icons/bi";
import {GoHome} from "react-icons/go";
import {IoIosPeople} from "react-icons/io";
import {PiCalendarCheck} from "react-icons/pi";
import {PiShareNetworkDuotone} from "react-icons/pi";
import {FaRegFileAlt} from "react-icons/fa";
import {BiDockLeft} from "react-icons/bi";
import {IoIosHeartEmpty} from "react-icons/io";
import {BiChevronLeft} from "react-icons/bi";
import {LuSettings} from "react-icons/lu";
import {CgWorkAlt} from "react-icons/cg";
import Image from "./assets/Image.png";



function App() {
  return (
    
      <div>
        <div className="flex">
          <div className="w-[4vw] bg-white">
            <div className="bg-slate-200 rounded-full w-[2.5vw] h-[5vh] mt-3 ml-3"></div>
            <div>
              <GoHome className="text-black w-[4vw] h-[4vh] mt-12 " />
              <IoIosPeople className="text-black w-[4vw] h-[4vh] mt-12 " />
              <PiCalendarCheck className="text-black w-[4vw] h-[4vh] mt-12 " />
              <main className="bg-slate-300 w-[3.5vw] h-[6vh] ml-1 rounded-xl mt-12">
                  <PiShareNetworkDuotone className="text-blue-900 -mb-6 w-[3vw] h-[4vh] ml-2"/>
              </main>
              <FaRegFileAlt className="text-black w-[4vw] h-[4vh] mt-12 " />
              <BiDockLeft className="text-black w-[4vw] h-[4vh] mt-12 " />
              <IoIosHeartEmpty className="text-black w-[4vw] h-[4vh] mt-12 " />
              <BiChevronLeft className="text-black w-[4vw] h-[4vh] mt-12 " />
              <LuSettings className="text-black w-[4vw] h-[4vh] mt-16" />
              <div className="w-[2vw] h-[4vh] bg-slate-300 text-blue-700 rounded-[100%] text-md text-center font-bold mt-8 ml-3">
                      AS
                </div>
            </div>

          </div>
          <div className="w-[96vw]  bg-[#F5F5F5] flex">
            <section className="w-[30vw]">
              <div className="w-[30vw] h-[4vh] bg-[#FFFF] rounded-md mt-4 ml-4">
                <div className="flex ml-5 space-x-12">
                  <span className=" w-[2vw] h-[3vh] bg-slate-400 rounded-[100%] text-black text-[12px] text-center mt-1 font-semibold"> 
                    SIP
                  </span>
                  <p className="text-black font-medium text-sm pt-1">Opportunity Browsing</p>
                  <p className="text-black font-medium text-sm pt-1">2325</p>  
                </div> 
              </div>
              <div className="flex">
                   <div className="ml-5 mt-1">
                      <input type="text" placeholder="search by name, edu, exp or #tag" className=" bg-white w-[25vw] h-[4vh] text-slate-500 rounded-md outline-0 font-normal pl-5 text-sm" />
                 </div>

                   <div className="mt-1 ml-2 w-[4vw] h-[4vh] bg-white rounded-md">
                     <p>lorem</p>
                   </div>
              </div> 
              <div>
              <div className="flex bg-white w-[30vw] h-[4vh] ml-5 mt-1 rounded-t-md">
                  <div className="">
                      <div className="w-[12px] h-[12px] border border-black rounded-sm ml-5 mt-3">

                      </div>
                 </div>
                  <div className="text-blue-900 font-medium text-sm">
                     <p className="pl-8 pt-1">Qualified</p>
                   </div>
                   <div className=" w-[2vw]  bg-slate-400 text-blue-900 text-[12px] md:text-center font-medium rounded-[100%] ml-5 pt-1">
                    247
                   </div>
                   <div className="text-black font-medium text-sm">
                     <p className="pl-5 pt-1">Task</p>
                   </div>
                   <div className=" w-[2vw]  bg-slate-400 text-black text-[12px] md:text-center font-medium rounded-[100%] ml-5 pt-1">
                    25
                   </div>
                   <div className="text-black font-medium text-sm">
                     <p className="pl-5 pt-1">Disqualified</p>
                   </div>
                   <div className=" w-[2vw]  bg-slate-400 text-black text-[12px] md:text-center font-medium rounded-[100%] ml-5 pt-1">
                    78
                   </div>
              </div> 
              </div>

              <div className="bg-white mt-3 w-[30vw] ml-5">
                 <div className="flex ">
                  <main>
                    <div className="w-[12px] h-[12px] border border-black rounded-sm ml-5 mt-12">

                    </div>
                  </main>

                  <main className="ml-5 mt-10">
                    <div className="w-[3vw] h-[5vh] bg-slate-400 text-blue-700 rounded-[100%] text-xl text-center font-bold">
                      FR
                    </div>
                  </main>

                  <main className="mt-1 ml-3">
                    <p className="text-black font-bold ">Frances R. Kostka</p>
                    <p className="text-black font-semibold">Saudi Arabia</p>
                    <p className="text-black font-medium text-[12px]">Bachelor of Information Technology on..(2023-2023)</p>
                    <p className="text-slate-400 text-sm font-normal py-2">#top_candidate  #top_candidate</p>

                     <div className="flex space-x-6">
                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">New York</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">Marketing</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">London</p>
                       </div>
                    </div>
                  </main>

                 

                 </div>

                 <div className="flex mt-2">
                  <main>
                    <div className="w-[12px] h-[12px] border border-black rounded-sm ml-5 mt-12">

                    </div>
                  </main>
        
              
                <div className="flex bg-slate-300 rounded-lg w-[25vw] ml-1">
                  <main className="ml-5 mt-10">
                    <div className="w-[3vw] h-[5vh] bg-[#fff] text-blue-700 rounded-[100%] text-xl text-center font-bold">
                      AS
                    </div>
                  </main>

                  <main className="mt-1 ml-3">
                    <p className="text-black font-bold ">Aaliyah Sanderson</p>
                    <p className="text-black font-semibold">Saudi Arabia</p>
                    <p className="text-black font-medium text-sm">Bachelor in Marketing(2023-2023)</p>
                    <p className="text-slate-400 text-sm font-normal py-2">#top_candidate  #top_candidate</p>

                     <div className="flex space-x-6">
                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">New York</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">Marketing</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">London</p>
                       </div>
                    </div>
                  </main>
                  </div>
                </div>
              

              <div className=" mt-3 w-[30vw] ml-2">
              <div className="flex">
                  <main>
                    <div className="w-[12px] h-[12px] border border-black rounded-sm ml-5 mt-12">

                    </div>
                  </main>

                  <main className="ml-5 mt-10">
                    <div className="w-[3vw] h-[5vh] bg-slate-400 text-blue-700 rounded-[100%] text-xl text-center font-bold">
                      MM
                    </div>
                  </main>

                  <main className="mt-1 ml-3">
                    <p className="text-black font-bold ">Michael D. McKee</p>
                    <p className="text-black font-semibold">Saudi Arabia</p>
                    <p className="text-black font-medium text-sm">Bachelor in Fianance(2023-2023)</p>
                    <p className="text-slate-400 text-sm font-normal py-2">#top_candidate  #top_candidate</p>

                     <div className="flex space-x-6">
                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">New York</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">Marketing</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">London</p>
                       </div>
                    </div>
                  </main>
                 </div>
                <hr className="text-slate-500 w-[20rem] ml-10 mt-2" />

                 <div className=" mt-3 w-[30vw] ml-2">
                 <div className="flex ">
                  <main>
                    <div className="w-[12px] h-[12px] border border-black rounded-sm ml-5 mt-12">

                    </div>
                  </main>

                  <main className="ml-5 mt-10">
                    <div className="w-[3vw] h-[5vh] bg-slate-400 text-blue-700 rounded-[100%] text-xl text-center font-bold">
                      CS
                    </div>
                  </main>

                  <main className="mt-1 ml-3">
                    <p className="text-black font-bold ">Christel R. Sclafani</p>
                    <p className="text-black font-semibold">Saudi Arabia</p>
                    <p className="text-black font-medium text-[12px]">Bachelor in  Bio-chemical Engineering (2023-2023)</p>
                    <p className="text-slate-400 text-sm font-normal py-2">#top_candidate  #top_candidate</p>

                     <div className="flex space-x-6">
                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">New York</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">Marketing</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">London</p>
                       </div>
                    </div>
                  </main>
                 </div>
               </div>
               <hr className="text-slate-500 w-[20rem] ml-10 mt-2" />
                 <div className=" mt-3 w-[30vw] ml-5">
                 <div className="flex ">
                  <main>
                    <div className="w-[12px] h-[12px] border border-black rounded-sm ml-5 mt-12">

                    </div>
                  </main>

                  <main className="ml-5 mt-10">
                    <div className="w-[3vw] h-[5vh] bg-slate-400 text-blue-700 rounded-[100%] text-xl text-center font-bold">
                      JP
                    </div>
                  </main>

                  <main className="mt-1 ml-3">
                    <p className="text-black font-bold ">Jerry S. Pollock</p>
                    <p className="text-black font-semibold">Saudi Arabia</p>
                    <p className="text-black font-medium text-sm">Bachelor in Marketing (2023-2023)</p>
                    <p className="text-slate-400 text-sm font-normal py-2">#top_candidate  #top_candidate</p>

                     <div className="flex space-x-6">
                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">New York</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">Marketing</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">London</p>
                       </div>
                    </div>
                  </main>

                 

                 </div>
                 </div>
                 <hr className="text-slate-500 w-[20rem] ml-10 mt-3" />
              </div>
              </div>
            </section>
      
            <section className="mt-3 ml-8">
            <div>
              <div className="flex">
                <div className=" bg-white w-[62vw] h-[13vh] rounded-lg">
                  <div className="ml-5 mt-2">
                    <img src={Image} alt="" className="w-[5vw]" />
                  </div>
                  
                  <div className="flex space-x-6 -mt-16 ml-24">
                    <p className=" text-black text-md font-bold">Aaliyah Sanderson</p>
                      <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">New York</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">Marketing</p>
                       </div>

                       <div className="w-[5vw] h-[2.5vh] rounded-md bg-slate-300">
                         <p className="text-black text-[10px] text-center font-semibold">London</p>
                       </div>

                         <div className="flex">
                          <p className="text-black font-medium pl-36">Overall Score</p>
                        <div className="w-[2vw] h-[4vh] bg-slate-400 rounded-full text-black text-center ml-5">7</div>
                       </div>

                  </div>

                  <div className="flex ml-24">
                    <div className="flex gap-2">
                      <p className="text-black text-md font-normal">Saudi Arabia</p>
                      <span className="text-black">|</span>
                      <p className="text-black text-md font-normal">aaliyahs@gmail.com</p>
                      <span className="text-black">|</span>
                      <p className="text-black text-md font-normal">+00 000 000 0000</p>
                    </div>
                  </div>

                  <div>
                      <div className="flex text-sm text-slate-400 ml-24 space-x-6">
                        <p>#top_candidate  x</p>
                        <p>#marketing_june  x</p>
                        <p>Add tag</p>

                        <div className="text-slate-400 text-[12px]">
                        <p className=" font-normal pl-60">Applied on 12 June 2023</p>
                        </div >
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <nav className="flex space-x-20 font-bold mt-3 ml-8">
                <a href="#" className="text-decoration-line: underline">Profile</a>
                <a href="#" className="text-black">Video</a>
                <a href="#" className="text-black">Evaluation</a>
                <a href="#" className="text-black">Placement</a>
                <a href="#" className="text-black">Compliance</a>
                <a href="#" className="text-black">Notes</a>
              </nav>
            </div>

            <div className="mt-2">
              <div className="flex bg-white w-[62vw] h-[23vh] rounded-lg">
                <div className="mt-2">
                
                <p className="text-black text-md font-semibold pl-3">Personal Information</p>

                <div className="flex">
                  <div className="mt-5 ml-5">
                  <div className="border-2 border-slate-100 w-[2.5vw] h-[5vh] rounded-lg">
                    <CgProfile  className="text-black mt-2  ml-2"/> 
                </div>
                 </div>
                 <div className="pt-12">
                  <p className="text-black text-sm pl-12 -mt-8">Nationality</p>
                  <p className="text-black text-sm font-semibold pl-12">Sri Lankan</p>
                  </div>
                  </div>

                  <div className="flex">
                  <div className="mt-5 ml-5">
                  <div className="border-2 border-slate-100 w-[2.5vw] h-[5vh] rounded-lg">
                    <FaUser  className="text-black mt-2  ml-2"/> 
                </div>
                 </div>
                 <div className="">
                 <p className="text-black text-sm pl-12 pt-5">Gender</p>
                 <p className="text-black text-sm font-semibold pl-12">Female</p>

                   </div>
                 </div>
               </div>
                
                <div className="ml-56 mt-12">
                  <div className="flex gap-6">
                    <main className="border-2 border-slate-100 w-[2.5vw] h-[5vh] -ml-2 rounded-lg">
                      <FaUser className="text-black mt-2 ml-2"/>
                    </main>
                  <span>
                    <p className="text-semibold text-black text-sm">National ID</p>
                   <p className="text-black font-semibold text-sm">0000000000</p>
                  </span>
                  </div>

                  <div className="flex gap-6 mt-4">
                    <main className="border-2 border-slate-100 w-[2.5vw] h-[5vh] -ml-2 rounded-lg">
                      <BiCalendarAlt className="text-black mt-2 ml-2"/>
                    </main>
                  <span>
                    <p className="text-semibold text-black text-sm">Date of Birth</p>
                   <p className="text-black font-semibold text-sm">00-00-0000</p>
                  </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
               <div className="flex bg-white w-[62vw] h-[23vh] rounded-lg">
                <div className="mt-2">
                <p className="text-black text-md font-semibold pl-3">Education</p>
                  <p className="text-black text-sm pl-12 pt-3 font-bold">Bachelor of Biochemistry</p>

                  <div className='flex space-x-3'>
                  <p className="text-black text-md pl-12">King Saud University</p>
                  <span className="text-slate-400">|</span>
                  <p className="text-slate-400">Saudi Arabia</p>
                  <span className="text-slate-400">|</span>
                  <p className="text-slate-400">Jan 2022-Jan2023</p>
                  </div>

                 
                </div>
                
      
              </div>
            </div>

            <div className="mt-3">
               <div className="flex bg-white w-[62vw] h-[23vh] rounded-lg">
                <div className="mt-2">
                <p className="text-black text-md font-semibold pl-3">Work Experience</p>
                  <p className="text-black text-sm pl-12 pt-3 font-bold">Bachelor of Biochemistry</p>

                  <div className='flex space-x-3'>
                  <div className="flex">
                      <main className="border-2 border-slate-100 w-[3vw] h-[5vh] rounded-lg ml-5 mt-3">
                        <CgWorkAlt  className="text-black w-[3vw] h-[3vh] mt-1"/>
                      </main>
                   <p className="text-black text-md pl-8 mt-4">Cyber Security Intern</p>
                   </div>
                
                  </div>
                 
                  <div className='flex space-x-3 mt-5'>
                    
                   <p className="text-black text-md pl-24 mb-2">Cyber Security Intern</p>
                  
                  <span className="text-slate-400">|</span>
                  <p className="text-slate-400">Saudi Arabia</p>
                  <span className="text-slate-400">|</span>
                  <p className="text-slate-400">Jan 2022-Jan2023</p>
                  </div>
                 
                </div>
                
      
               </div>
            </div>


            <div className="mt-3">
               <div className="flex bg-white w-[62vw] h-[23vh] rounded-lg">
                <div className="mt-2">
                <p className="text-black text-md font-semibold pl-3">Resume</p>
                

                  
                 
                </div>
                
      
               </div>
            </div>

            </section>
          </div>
        </div>
       
      </div>
      
    
  )
}

export default App
