import { useState } from "react";

import zwilt from "../../assets/zwilt-tba-1-01 2.svg";
import union from "../../assets/Union.png";
import vector1 from "../../assets/Vector1.png";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";
import shopify from "../../assets/shopify.png";
import magneto from "../../assets/magneto.png";
import data from "../../assets/data.png";
import webflow from "../../assets/webflow.png";
import dotnet from "../../assets/dotnet.png";
import next from "../../assets/next.png";
import ux from "../../assets/ux.png";
import graphics from "../../assets/graphics.png";
import illustration from "../../assets/illustration.png";
import unreal from "../../assets/unreal.png";
import cinemma from "../../assets/cinema.png";
import exploreBtn from "../../assets/exploreBtn.png";
import commas from "../../assets/commas.png";
import person2 from "../../assets/person2.png";
import groovehq from "../../assets/groovehq.png";
import arrowback from "../../assets/arrowback.png";
import arrowfwd from "../../assets/arrowfwd.png";
import groove2 from "../../assets/groove2.png";
import media from "../../assets/media.png";
import media2 from "../../assets/media2.png";
import one from "../../assets/one.png";
import ruby from "../../assets/ruby.png";
import system from "../../assets/system.png";
import maskG1 from "../../assets/maskG1.png";
import maskG2 from "../../assets/maskG2.png";
import two from "../../assets/two.png";


function Home() {
    const [activeTab, setActiveTab] = useState('IT & Development');

  return (
    <div className="bg-white py-20 max-lg:50">
        {/* First section of the landing page starts here */}
      <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">
          Finding the right fit 
          <img src={zwilt} alt="person" className="inline-block w-12 h-12" /> has <br /> 
          never been easier.
      </h1>
        <p className="text-lg mb-8 text-gray-700">
          With our rigorous pre-vetting process, you'll never have to 
          <br /> worry about finding the ideal candidate ever again.
        </p>
        <div className="relative w-full max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder={`Looking for design |`}
            className="w-full py-3 pl-4 pr-12 rounded-xl border border-gray-300 
            focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="absolute right-0 mt-0 mr-0 -translate-x-0 h-full bg-yellow-400 
          text-white p-2 rounded-xl">
            {/* <svg
              className="w-8 h-7"
              fill="none"
              viewBox="0 0 74 74"
              xmlns="http://www.w3.org/2000/svg"
            >
                <rect  className="w-20 h-20 " fill="#FFBE2E"/>
                <path d="M38.3588 36.5C38.3588 40.036 35.3683 42.9024 31.6794 42.9024C27.9905 42.9024 25 40.036 25 36.5C25 32.964 27.9905 30.0976 31.6794 30.0976C35.3683 30.0976 38.3588 32.964 38.3588 36.5Z" fill="#202229"/>
                <path d="M36.6412 44L36.6412 29L50 36.5L36.6412 44Z" fill="#202229"/>
            </svg> */}
            <svg
              width="34" 
              height="34" 
              viewBox="0 0 74 74" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="74" height="74" rx="15"/>
              <path d="M38.3588 36.5C38.3588 40.036 35.3683 42.9024 31.6794 42.9024C27.9905 42.9024 25 40.036 25 36.5C25 32.964 27.9905 30.0976 31.6794 30.0976C35.3683 30.0976 38.3588 32.964 38.3588 36.5Z" fill="#202229"/>
              <path d="M36.6412 44L36.6412 29L50 36.5L36.6412 44Z" fill="#202229"/>
            </svg>
          </button>
        </div>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'IT & Development' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setActiveTab('IT & Development')}
          >
            IT & Development
          </button>
          <button
            className={`ml-4 px-4 py-2 rounded-full ${
              activeTab === 'Design and Creative' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setActiveTab('Design and Creative')}
          >
            Design and Creative
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          {activeTab === 'IT & Development' && (
            <div className="grid grid-cols-2 gap-4">
              <div>Python Developer</div>
              <div>Data Scientist</div>
              <div>Shopify Developer</div>
              <div>Front End Developer</div>
              <div>MERN Stack Developer</div>
              <div>Shopify Developer</div>
              <div>Full Stack Developer</div>
              <div>Python Developer</div>
              <div>Explore More</div>
            </div>
          )}
          {activeTab === 'Design and Creative' && (
            <div className="grid grid-cols-2 gap-4">
              <div>Graphic Designer</div>
              <div>UX/UI Designer</div>
              <div>Art Director</div>
              <div>Creative Director</div>
              <div>Brand Designer</div>
              <div>Motion Designer</div>
              <div>Illustrator</div>
              <div>Product Designer</div>
              <div>Explore More</div>
            </div>
          )}
        </div>
      </div>
      {/* Image banner divider between section one and two */}
      <div className="w-full mt-11">
        <img 
          src={union} 
          alt="Home Page Banner" 
          className="w-full object-cover"
        />
      </div> 
{/* Second section of the landing page starts here */}
    <div className="top-0 left-0 w-full bg-[#EDEFFF] transform -skew-y-2">

        <div className="mx-6 py-10 px-6 transform skew-y-2">
            <h1 className="text-4xl font-bold mt-20 text-center mb-8">
                Your one-stop marketplace for finding <br /> the talent your business needs.
            </h1>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                    <h3 className="text-3xl font-semibold mb-2">Find Dev and IT professionals to <br /> 
                    scale your business.
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <img src={vector1} />
                            <span className="text-[#202229] ml-2">989 Skills</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <img src={vector2} />
                            <span className="text-[#202229] ml-2">45 Sub-Categories</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <img src={vector3} />
                            <span className="text-[#202229] ml-2">1011 Profiles</span>
                        </div>
                    </div>
                </div>
                <div>
                
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <p className="mb-4 font-medium">IT & Development</p>
                        <div className="lg:flex flex-row grid md:grid-cols-3">
                            <div className="flex flex-col items-center m-2">
                                <img src={shopify} alt="Shopify Developer" />
                                <p className="text-center font-bold">Shopify Developer</p>
                            </div>
                            <div className="flex flex-col items-center mb-2">
                                <img src={magneto} alt="Magento Developer" />
                                <p className="text-center font-bold mt-1">Magento Developer</p>
                            </div>
                            <div className="flex flex-col items-center mb-2">
                                <img src={data} alt="Data Scientist" />
                                <p className="text-center font-bold mt-5">Data Scientist</p>
                            </div>
                            <div className="flex flex-col items-center mb-2">
                                <img src={webflow} alt="Webflow Developer" />
                                <p className="text-center font-bold">Webflow Developer</p>
                            </div>
                            <div className="flex flex-col items-center mb-2">
                                <img src={dotnet} alt=".NET Developer" />
                                <p className="text-center font-bold mt-3">.NET Developer</p>
                            </div>
                            <div className="flex flex-col items-center mb-2">
                                <img src={next} alt="next" />
                            </div>
                        </div>

                    </div>
                
                </div>
            </div>

        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <h3 className="text-3xl font-semibold mb-2">Explore Creative individuals with a 
                <br /> keen eye for detail.</h3>
                <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                    <img src={vector1} />
                    <span className="text-[#202229] ml-2">989 Skills</span>
                </div>
                <div className="flex items-center mb-2">
                    <img src={vector2} />
                    <span className="text-[#202229] ml-2">45 Sub-Categories</span>
                </div>
                <div className="flex items-center mb-2">
                    <img src={vector3} />
                    <span className="text-[#202229] ml-2">1011 Profiles</span>
                </div>
                </div>
            </div>
            <div>
            
            <div className="bg-white p-4 shadow-lg rounded-lg">
                <p className="mb-4 font-medium">Design & Creative</p>
                <div className="lg:flex flex-row grid md:grid-cols-3">
                    <div className="flex flex-col items-center mt-7">
                        <img src={next} alt="next" />
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <img src={ux} alt="UX Designer" />
                        <p className="text-center font-bold mt-5">UX Designer</p>
                    </div>
                    <div className="flex flex-col items-center mb-2">
                        <img src={graphics} alt="Graphics Designer" />
                        <p className="text-center font-bold">Graphics Designer</p>
                    </div>
                    <div className="flex flex-col items-center mb-2">
                        <img src={illustration} alt="Illustration Artist" />
                        <p className="text-center font-bold">Illustration Artist</p>
                    </div>
                    <div className="flex flex-col items-center mb-2">
                        <img src={unreal} alt="Webflow Developer" />
                        <p className="text-center font-bold">Unreal Engine</p>
                    </div>
                    <div className="flex flex-col items-center mb-2">
                        <img src={cinemma} alt="Cinema 4D" />
                        <p className="text-center font-bold mt-2">Cinema 4D</p>
                    </div>
                </div>

            </div>
            
            
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-5 mb-16">
            <div className="flex">
                <img src={exploreBtn} alt="Explore" />
                <p className="ml-2 mt-5 font-semibold text-2xl">Explore More</p>
            </div>
            <div>
                <p className="mt-7"><b>30 more</b> to explore</p>
            </div>
        </div>

        </div>

    </div>

{/* Third section of the landing page starts here */}
        <div className="top-0 left-0 w-full bg-[#202229] transform -skew-y-2">
            <div className="mx-6 py-10 px-6 transform skew-y-2">
                <div className="relative flex justify-end">
                    <img src={commas} className="mt-0 h-20"  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-white">
                            How it worked <br /> for Jason 
                            <img src={person2} alt="person" className="inline-block w-12 h-12 ml-2" /> at
                        </h1>
                        <img src={groovehq} alt="groovehq" />
                        <p className="text-white mt-5">
                            Zwilt enabled us to deliver on time and they’ve <br /> been heavy hitters in our corner since.
                        </p>
                        <div className="flex mt-5">
                            <img src={arrowback} />
                            <img src={arrowfwd} className="ml-1"/>
                        </div>
                    </div>
                    <div className="mt-11">
                        <div className="flex">
                            <img src={groove2} className="mr-2" alt="" />
                            <div>
                                <h4 className="text-white font-bold text-xl mt-1">
                                    Jason Makki
                                </h4>
                                <small className="text-white">
                                    Engineer at GROOVE
                                </small> <br />
                                <small className="text-white">San Francisco</small>
                            </div>
                        </div>
                        <p className="text-white mt-8">
                        Zwilt enabled us to deliver on time and they’ve <br />
                        been heavy hitters in our corner since. Zwilt <br /> enabled us to deliver on time and they’ve been <br /> heavy hitters in our corner since.Zwilt enabled us <br /> to deliver on time and they’ve been heavy hitters.
                        </p>
                    </div>
                </div>

            </div>
        </div>

        {/* Forth section of landing page starts here */}
        <div className="mt-32 ml-10">
            <h1 className="text-4xl font-bold">
                How we ensure you’re <br /> in good hands.
            </h1>
            <p className="mt-5 text-xl">
                With our comprehensive screening process, we hand-pick highly <br /> skilled candidates so you can onboard them in a matter of days.
            </p>
            <div className="flex mt-5 md:w-1/2 border rounded-lg">
                <img src={media} className="m-2" />
                <p className="mt-6 font-medium"> <b>Step 1: </b> Resume Screening</p>
            </div>
            
            <div className="mt-1 md:w-1/2 border shadow-xl rounded-lg">
                <div className="flex">
                    <img src={media2} className="m-2" />
                    <p className="mt-6 font-medium"> <b>Step 2: </b> Video Interview</p>
                </div>
                <p className="m-3">
                    Candidates are assessed through skill based questions in a virtual setting. <br /> Allowing you to gauge personality and cultural fit.
                </p>
            </div>
            
            <div className="flex mt-1 md:w-1/2 border  rounded-lg">
                <img src={media} className="m-2" />
                <p className="mt-6 font-medium"> <b>Step 3: </b> Technical Evaluation</p>
            </div>
            <div className="flex mt-1 md:w-1/2 border rounded-lg">
                <img src={media} className="m-2" />
                <p className="mt-6 font-medium"> <b>Step 4: </b>  Application Review</p>
            </div>
            <div className="flex mt-1 md:w-1/2 border rounded-lg">
                <img src={media} className="m-2" />
                <p className="mt-6 font-medium"> <b>Step 5: </b> Lets get to work</p>
            </div>
        </div>

        {/* Fifth section of screen starts here */}
        <div className="mx-10 mt-36">
            <h1 className="text-center text-4xl font-bold">Start your journey today.</h1>
            <div className="top-0 left-0 w-full mt-10 bg-[#EDEFFF] transform -skew-y-2">
                <div className="mx-6 px-6 transform skew-y-2">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <div className="flex mt-16">
                                <img src={one} />
                                <div>
                                    <h3 className="text-3xl font-medium ml-1">
                                        Find your next star <br /> performer.
                                    </h3>
                                </div>
                            </div>
                            <div className="ml-14 mt-3">
                                <p>
                                    Explore the vast Zwilt marketplace to find the candidate <br /> that meets your needs.
                                </p>
                                <div className="flex mt-5">
                                    <img src={exploreBtn} alt="Explore" />
                                    <p className="ml-2 mt-5 font-semibold text-2xl">
                                        Join Now
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <div className="bg-white rounded-b-xl">
                                <img src={ruby} 
                                className="bg-pink-200 w-full h-1/2 rounded-b-xl"
                                alt="Ruby Developer" />
                                <p className="text-center mt-3 text-lg">
                                    Ruby Developer
                                </p>
                                <p className="text-center mt-6 text-sm">
                                    Redwood City, California 7 <br /> years experience
                                </p>
                            </div>
                            <div className="bg-white ml-5 rounded-xl h-56">
                                <img src={system} 
                                    className="bg-pink-200 w-full h-1/2 rounded-b-xl"
                                    alt="System ops engineer" />
                                    <p className="text-center mt-3 text-lg">
                                        System ops engineer
                                    </p>
                                    <p className="text-center mt-3 text-sm">
                                        Abu Dhabi, UAE 5 years  <br /> experience
                                    </p>
                            </div>
                            <div className="mt-5">
                                <img src={maskG1} 
                                    className="bg-purple-200 w-full rounded-t-xl"/>
                            </div>
                            <div className="ml-5">
                                <img src={maskG2} 
                                    className="bg-yellow-200 w-full rounded-t-xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mx-10 mt-3">
            <div className="top-0 left-0 w-full mt-10 bg-pink-100 transform -skew-y-2">
                <div className="mx-6 px-6 transform skew-y-2">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <div className="flex mt-16">
                                <img src={two} />
                                <div>
                                    <h3 className="text-3xl font-medium ml-2">
                                        Evaluate to your <br /> heart’s content.
                                    </h3>
                                </div>
                            </div>
                            <div className="ml-14 mt-3">
                                <p>
                                    Assess the candidate through work history, transparent <br /> tests and video interviews.
                                </p>
                                <div className="flex mt-5">
                                    <img src={exploreBtn} alt="Explore" />
                                    <p className="ml-2 mt-5 font-semibold text-2xl">
                                        Browse More
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home;