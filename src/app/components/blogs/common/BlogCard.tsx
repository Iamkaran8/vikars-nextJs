'use client'

import { FetchAllBlogs } from "@/app/utils/apis/blog/FetchAllBlogs"
import { useAppDispatch } from "@/store/hooks"
import Image from "next/image"
import { useEffect } from "react"


export const BlogCard = () => {



    return (
        <>
            <div className="flex flex-col p-4  lg:w-[30%] md:w-[45%] w-[100%] rounded-[20px] shadow hover:shadow-xl duration-300 ease-in hover:-translate-y-4 ">
                <div>
                    <Image src='/blog_2.png' className="w-[100%] h-[100%] rounded-[20xp]" width={100} height={100} alt="Blog Image" />
                </div>
                <h1 className="text-[25px] font-bold mt-[15px] mb-[10px]" >Doubt Solving & Practice Tests</h1>
                <p className="text-16 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, risus ac pharetra lacinia, sapien tellus bibendum mauris, sed lacinia enim lacus in tellus.</p>
                <div className="flex items-center gap-4 pt-4 ">
                    <div>
                        <Image className="rounded-full" src='/profile_img.png' alt="Profile_image" height={40} width={40} />
                    </div>
                    <div>
                        <p className="text-16" >Jesica James . 12 Aug 2024</p>
                    </div>
                </div>
            </div>
        </>
    )
}