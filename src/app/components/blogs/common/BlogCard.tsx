'use client';

import Image from "next/image";

const isValidImageUrl = (url?: string): boolean => {
    if (!url) return false;
    try {
        const parsed = new URL(url);
        return parsed.hostname === "ik.imagekit.io";
    } catch {
        return false;
    }
};

interface BlogCardProps {
    blog: {
        _id: string;
        title: string;
        description: string;
        image: string;
        date: string;
        category?: string;
    };
}

export const BlogCard = ({ blog }: BlogCardProps) => {
    const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <div className="flex flex-col p-4 lg:w-[30%] md:w-[45%] w-[100%] rounded-[20px] shadow hover:shadow-xl duration-300 ease-in hover:-translate-y-4 bg-white" key={blog._id}>
            <div className="w-full h-[200px] relative">
                <Image
                    src={isValidImageUrl(blog.image) ? blog.image : "/blog_1.png"}
                    alt={blog.title}
                    fill
                    className="rounded-[20px] object-cover"
                />
            </div>

            <h1 className="text-[22px] font-bold mt-4 mb-2 line-clamp-2">{blog.title}</h1>
            <p className="text-[16px] text-gray-700 line-clamp-3">{blog.description}</p>

            <div className="flex items-center justify-between pt-4 text-sm text-gray-500">
                <span className="bg-forest/10 text-forest px-3 py-1 rounded-full text-[13px]">{blog.category}</span>
                <span>{formattedDate}</span>
            </div>
        </div>
    );
};
