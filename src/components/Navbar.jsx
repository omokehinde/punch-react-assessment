import { useState } from "react";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#525AA0] shadow-lg rounded-2xl p-1 m-8">
        <div className="flex flex-wrap justify-between 
         items-center max-w-7xl mx-auto px-4">
            <a href="#" className="flex items-center text-white text-lg font-bold">
                <span className="text-yellow-400 flex items-center mr-1 h-12">
                <svg width="72" height="26" viewBox="0 0 72 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 24.6698V21.354L4.8675 15.3855H0.376839V10.0801H13.0323V13.396L8.16483 19.3645H13.4092V24.6698H0Z" fill="white"/>
                    <path d="M18.7276 24.6698L13.3262 10.0801H20.9886L22.6216 16.4797L24.8512 10.0801H27.7089L29.9385 16.4797L31.5715 10.0801H39.2339L33.8325 24.6698H27.8973L26.2958 20.1934L24.6628 24.6698H18.7276Z" fill="white"/>
                    <path d="M46.4255 6.06798C45.7137 6.70904 44.803 7.02957 43.6934 7.02957C42.5838 7.02957 41.6731 6.70904 40.9613 6.06798C40.2495 5.40481 39.8936 4.55375 39.8936 3.51479C39.8936 2.47582 40.2495 1.63581 40.9613 0.99475C41.6731 0.331583 42.5838 0 43.6934 0C44.803 0 45.7137 0.331583 46.4255 0.99475C47.1373 1.63581 47.4932 2.47582 47.4932 3.51479C47.4932 4.55375 47.1373 5.40481 46.4255 6.06798ZM40.1762 24.6698V10.0801H47.242V24.6698H40.1762Z" fill="white"/>
                    <path d="M55.6789 24.6698C53.69 24.6698 52.1198 24.0619 50.9684 22.8461C49.8379 21.6303 49.2726 19.9613 49.2726 17.8392V0.132634H56.3383V17.6403C56.3383 18.215 56.4535 18.6682 56.6838 18.9997C56.935 19.3092 57.2595 19.464 57.6573 19.464H58.2539L57.8143 24.6698H55.6789Z" fill="white"/>
                    <path d="M70.4379 19.4308L71.7254 23.6419C70.3227 24.703 68.8363 25.2335 67.2662 25.2335C65.0261 25.2335 63.257 24.5814 61.959 23.2772C60.682 21.9729 60.0434 20.1824 60.0434 17.9055V15.3855H58.2848V10.0801H60.6087L60.8599 4.97375H67.1091V10.0801H70.6577V15.3855H67.1091V17.9055C67.1091 18.5466 67.2348 19.055 67.486 19.4308C67.7581 19.7845 68.1245 19.9613 68.5851 19.9613C69.0875 19.9613 69.7051 19.7845 70.4379 19.4308Z" fill="white"/>
                </svg>

                </span>
                <span>
                    <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0933 11.671C19.0933 16.7077 15.007 20.7908 9.96633 20.7908C4.92564 20.7908 0.839355 16.7077 0.839355 11.671C0.839355 6.63425 4.92564 2.55119 9.96633 2.55119C15.007 2.55119 19.0933 6.63425 19.0933 11.671Z" fill="#FFBE2E"/>
                        <path d="M16.7464 22.3542V0.987793L35.0003 11.671L16.7464 22.3542Z" fill="#FFBE2E"/>
                    </svg>
                </span>

            </a>
            <button
            className="text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                ></path>
                </svg>
            </button>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} justify-between 
            items-center w-full lg:flex lg:w-auto lg:order-1`}>
                <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" className="text-white hover:text-yellow-400">
                            Find Work
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-yellow-400">
                            Find Talent
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-yellow-400">
                            Articles
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-yellow-400">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-yellow-400">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
            <div className="hidden lg:flex items-center space-x-4 lg:order-2">
                <a href="#" className="text-white hover:text-yellow-400">
                    Log In
                </a>
                <a href="#" className="bg-white text-blue-700 py-2 px-4 
                rounded-full hover:bg-gray-100">
                    Join Now
                </a>
            </div>
        </div>
        {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center mt-4">
          <a href="#" className="text-white hover:text-yellow-400 py-2">
            Log In
          </a>
          <a href="#" className="bg-white text-[#525AA0] py-2 px-4 rounded-full hover:bg-gray-100">
            Join Now
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar;


// import React, { useState } from 'react';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-blue-700 shadow-lg rounded-2xl p-1">
//       <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
//         <a href="#" className="flex items-center text-white text-lg font-bold">
//           <span className="text-yellow-400 flex items-center mr-3 h-12">
//             zwilt
//           </span>
//         </a>
//         <button
//           className="text-white lg:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//         <div
//           className={`${
//             isMenuOpen ? 'block' : 'hidden'
//           } w-full lg:flex lg:w-auto`}
//         >
//           <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
//             <li>
//               <a href="#" className="text-white hover:text-yellow-400 block  py-1 lg:px-4">
//                 Find Work
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-white hover:text-yellow-400 block  py-1 lg:px-4">
//                 Find Talent
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-white hover:text-yellow-400 block  py-1 lg:px-4">
//                 Articles
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-white hover:text-yellow-400 block  py-1 lg:px-4">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-white hover:text-yellow-400 block  py-1 lg:px-4">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="hidden lg:flex items-center space-x-4 lg:order-2">
//           <a href="#" className="text-white hover:text-yellow-400">
//             Log In
//           </a>
//           <a href="#" className="bg-white text-blue-700 py-2 px-4 rounded-full hover:bg-gray-100">
//             Join Now
//           </a>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="lg:hidden flex flex-col items-center mt-4">
//           <a href="#" className="text-white hover:text-yellow-400 py-2">
//             Log In
//           </a>
//           <a href="#" className="bg-white text-blue-700 py-2 rounded-full hover:bg-gray-100">
//             Join Now
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
