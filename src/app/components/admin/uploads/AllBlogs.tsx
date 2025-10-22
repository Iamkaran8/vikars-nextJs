// import { EditBlogCards } from "./EditBlogCards"

// export const AllBlogs = () => {
//     return (
//         <>
//             <div className="  " >
//                 <h1 className="text-forest text-center text-[25px] font-bold mb-[20px]">All Blogs</h1>

//                 <div className="flex flex-wrap justify-center gap-8">
//                     <EditBlogCards />
//                     <EditBlogCards />
//                     <EditBlogCards />
//                     <EditBlogCards />
//                     <EditBlogCards />
//                     <EditBlogCards />
//                     <EditBlogCards />
//                     <EditBlogCards />
//                     <EditBlogCards />
//                     <EditBlogCards />
//                     <EditBlogCards />

//                 </div>
//             </div>
//         </>
//     )
// }


'use client'

import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { EditBlogCards } from "./EditBlogCards";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";
import { FetchAllBlogs } from "@/app/utils/apis/blog/FetchAllBlogs";
import { BlogLoader } from "../../blogs/loader/BlogLoader";

export const AllBlogs = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(FetchAllBlogs())
    }, [])
    const { allBlogs, loading, error } = useSelector((state: RootState) => state.blogs);

    return (
        <div>
            <h1 className="text-forest text-center text-[25px] font-bold mb-[20px]">All Blogs</h1>

            {loading && <div className="flex flex-wrap items-center justify-center gap-8">

                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                        <BlogLoader key={index} />
                    ))
                }
            </div>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="flex flex-wrap justify-center gap-8">
                {!loading && allBlogs && allBlogs.length > 0
                    ? allBlogs.map(blog => (
                        <EditBlogCards key={blog._id} blog={blog} />
                    ))
                    : !loading && <p>No blogs found.</p>}
            </div>
        </div>
    );
};
