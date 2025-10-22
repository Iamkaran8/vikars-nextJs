'use client'

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/hooks";
import Navbar from "@/app/components/Navbar";
import { BlogCard } from "@/app/components/blogs/common/BlogCard";
import { FetchAllBlogs } from "@/app/utils/apis/blog/FetchAllBlogs";
import { RootState } from "@/store/Store";
import { BlogLoader } from "@/app/components/blogs/loader/BlogLoader";

export interface Blog {
    _id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
}

export default function Page() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(FetchAllBlogs());
    }, [dispatch]);

    const { allBlogs, loading, error } = useSelector((state: RootState) => state.blogs);

    return (
        <>
            <Navbar />
            <div className="px-4 sm:px-6 md:px-10 py-6 md:py-8 lg:py-10 cont text-14 sm:text-16 lg:text-20">
                <div className="flex flex-wrap gap-16 pt-[100px] md:pt-[130px]">
                    {loading && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((card) => (
                        <BlogLoader />
                    ))}
                    {error && <p className="text-red-500">Error: {error}</p>}
                    {!loading && allBlogs && allBlogs.length > 0 ? (
                        allBlogs.map((blog) => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))
                    ) : (
                        !loading && <p>No blogs found.</p>
                    )}
                </div>
            </div>
        </>
    );
}
