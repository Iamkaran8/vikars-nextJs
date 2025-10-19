'use client'

import { BlogCard } from "@/app/components/blogs/common/BlogCard";
import Navbar from "@/app/components/Navbar";
import { FetchAllBlogs } from "@/app/utils/apis/blog/FetchAllBlogs";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";

export default function page() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(FetchAllBlogs())
    }, [dispatch])
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="px-4 sm:px-6 md:px-10 py-6 md:py-8 lg:py-10 cont text-14 sm:text-16 lg:text-20">

                <div className="flex flex-wrap gap-16 pt-[100px] md:pt-[130px] ">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>

        </>
    )
}