


'use client';

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store/Store";
import { FetchSingleBlog } from "@/app/utils/apis/admin/blogs/FetchSingleBlog";
import Image from "next/image";


export const SinglePost = () => {
  const { id: slugWithId } = useParams(); 
  const dispatch = useAppDispatch();

  const { singleBlog, loading, error } = useSelector((state: RootState) => state.blogs);

  useEffect(() => {
    if (slugWithId) {
      
      const parts = (slugWithId as string).split("-");
      const actualId = parts[parts.length - 1];
      dispatch(FetchSingleBlog({ id: actualId }));
    }
  }, [dispatch, slugWithId]);

  if (loading) return <p className="text-center mt-20">Loading blog...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!singleBlog) return <p className="text-center mt-20">No blog found.</p>;

  return (
    <div className="pt-[100px] md:pt-[130px] text-16 md:text-20">
      <div className="px-4 sm:px-6 md:px-10 py-6 md:py-2 lg:py-2 cont text-14 sm:text-16 lg:text-20">
        <div className="blog-description space-y-6">
          <h1 className="text-3xl font-bold text-[#222]">{singleBlog.title}</h1>
          <p className="text-gray-500">
            {new Date(singleBlog.date).toDateString()}
          </p>
          <Image
            src={singleBlog.image}
            alt={singleBlog.title}
            className="w-full max-h-[500px] object-cover rounded-2xl my-6"
          />
          <p className="text-18 font-medium text-[#353434]">
            {singleBlog.description}
          </p>
        </div>
      </div>
    </div>
  );
};
