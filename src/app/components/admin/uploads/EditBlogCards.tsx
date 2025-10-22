// import Image from "next/image"

// export const EditBlogCards = () => {
//     return (
//         <>
//             <div className="flex flex-col p-4  lg:w-[30%] md:w-[45%] w-[100%] rounded-[20px] shadow hover:shadow-xl duration-300 ease-in hover:-translate-y-4 ">
//                 <div>
//                     <Image src='/blog_2.png' className="w-[100%] h-[100%] rounded-[20xp]" width={100} height={100} alt="Blog Image" />
//                 </div>
//                 <div className="flex justify-between mt-4">
//                     <button className="rounded-full leading-[20px] bg-forest text-white px-6 py-2 text-12 flex items-center justify-center gap-2" ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>Edit</button>
//                     <button className="rounded-full leading-[20px] bg-[#FF0000] text-white px-6 py-2 text-12 flex items-center justify-center gap-2" ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>Delete</button>
//                 </div>
//             </div>
//         </>
//     )
// }


'use client'

import Image from "next/image";

interface EditBlogCardProps {
  blog: {
    _id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    category?: string;
  };
}

export const EditBlogCards = ({ blog }: EditBlogCardProps) => {
  return (
    <div className="flex flex-col p-4 lg:w-[30%] md:w-[45%] w-[100%] rounded-[20px] shadow hover:shadow-xl duration-300 ease-in hover:-translate-y-4">
      <div className="w-full h-[200px] relative">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="rounded-[20px] object-cover"
        />
      </div>
      <h2 className="text-[18px] font-bold mt-4 mb-2">{blog.title}</h2>
      <p className="text-gray-700 line-clamp-3">{blog.description}</p>

      <div className="flex justify-between mt-4">
        <button className="rounded-full leading-[20px] bg-forest text-white px-6 py-2 text-12 flex items-center justify-center gap-2">
          Edit
        </button>
        <button className="rounded-full leading-[20px] bg-red-600 text-white px-6 py-2 text-12 flex items-center justify-center gap-2">
          Delete
        </button>
      </div>
    </div>
  );
};
