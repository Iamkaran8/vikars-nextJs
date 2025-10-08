// import { Link } from 'react-router-dom'
// import logo from '../assets/logofooter.png'
// import { Socials } from '../../datas/socials'
// import Image from 'next/image'

// const Footermenus = [
//   { menu: "Home", path: "/" },
//   { menu: "Solution", path: "/#solutions" },
//   { menu: "What We Do", path: "/#what-we-do" },
//   { menu: "Contact", path: "/#contact" }
// ]

// export const Footer = () => {
//   return (
//     <footer className="px-4 sm:px-6 md:px-10 py-6 md:py-8 lg:py-10 cont text-14 sm:text-16 lg:text-20">

//       {/* footer details section */}
//       <div className="bg-cream w-full rounded-[10px] lg:rounded-[35px] py-8 sm:py-10 md:py-12 lg:py-20 px-5 sm:px-8 md:px-12 lg:px-28 
//                       flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-start gap-8 sm:gap-10">

//         {/* Logo */}
//         <div className="flex justify-center md:justify-start w-full md:w-[40%] lg:w-1/5">
//           <Image src={logo} className="" alt="Vikars academy" fill />
//         </div>

//         {/* Contact Info */}
//         <div className="w-full md:w-[60%] lg:w-2/5 text-center md:text-left space-y-2 sm:space-y-3">
//           <h5 className="font-bold">Registered Office</h5>
//           <p>1050 Northgate Dr, Suite #120 San Rafael, California 94903, USA</p>
//           <p><b>Email :</b> contact@hekma.ai</p>
//           <p><b>Phone no :</b> +1 415 382 8040</p>
//         </div>

//         {/* Quick Links */}
//         <div className="w-full md:w-[30%] lg:w-1/5 text-center md:text-left">
//           <h5 className="font-bold mb-2 sm:mb-3">About</h5>
//           <div className="flex flex-col space-y-2 sm:space-y-3">
//             {Footermenus.map((item) => (
//               <Link key={item.path} to={item.path}>
//                 {item.menu}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* copyright section */}
//       <div className="flex flex-col md:flex-row text-gray text-14 sm:text-16 font-medium w-full justify-center md:justify-center  items-center pt-5 md:pt-6 lg:pt-8 gap-4 md:gap-8">
//         <p className="text-center md:text-left">
//           Copyright © 2024 Vikars. All Rights Reserved
//         </p>
//         <div className="flex space-x-6 sm:space-x-8 lg:space-x-10">
//           {Socials.map((social) => (
//             <a
//               key={social.name}
//               href={social.url}
//               target="_blank"
//               className="hover:scale-110 transition"
//             >
//               <social.icon size={22} />
//             </a>
//           ))}
//         </div>
//       </div>

//     </footer>
//   )
// }

// export default Footer


"use client";

import Link from 'next/link';
import Image from 'next/image';
// Note: Using direct path to public image
// import logo from '/logofooter.png';
import { Socials } from '../../datas/socials';

const Footermenus = [
  { menu: "Home", path: "/" },
  { menu: "Solution", path: "/#solutions" },
  { menu: "What We Do", path: "/#what-we-do" },
  { menu: "Contact", path: "/#contact" }
];

export const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-10 py-6 md:py-8 lg:py-10 cont text-14 sm:text-16 lg:text-20">

      {/* footer details section */}
      <div className="bg-cream w-full rounded-[10px] lg:rounded-[35px] py-8 sm:py-10 md:py-12 lg:py-20 px-5 sm:px-8 md:px-12 lg:px-28 
                      flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-start gap-8 sm:gap-10">

        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-[40%] lg:w-1/5">
          <Image src="/logofooter.png" alt="Vikars academy" width={120} height={40} />
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-[60%] lg:w-2/5 text-center md:text-left space-y-2 sm:space-y-3">
          <h5 className="font-bold">Registered Office</h5>
          <p>1050 Northgate Dr, Suite #120 San Rafael, California 94903, USA</p>
          <p><b>Email :</b> contact@hekma.ai</p>
          <p><b>Phone no :</b> +1 415 382 8040</p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-[30%] lg:w-1/5 text-center md:text-left">
          <h5 className="font-bold mb-2 sm:mb-3">About</h5>
          <div className="flex flex-col space-y-2 sm:space-y-3">
            {Footermenus.map((item) => (
              <Link key={item.path} href={item.path}>
                {item.menu}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* copyright section */}
      <div className="flex flex-col md:flex-row text-gray text-14 sm:text-16 font-medium w-full justify-center md:justify-center  items-center pt-5 md:pt-6 lg:pt-8 gap-4 md:gap-8">
        <p className="text-center md:text-left">
          Copyright © 2024 Vikars. All Rights Reserved
        </p>
        <div className="flex space-x-6 sm:space-x-8 lg:space-x-10">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
