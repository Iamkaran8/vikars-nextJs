import { EditBlogCards } from "./EditBlogCards"

export const AllBlogs = () => {
    return (
        <>
            <div className="  " >
                <h1 className="text-forest text-center text-[25px] font-bold mb-[20px]">All Blogs</h1>

                <div className="flex flex-wrap justify-center gap-8">
                    <EditBlogCards />
                    <EditBlogCards />
                    <EditBlogCards />
                    <EditBlogCards />
                    <EditBlogCards />
                    <EditBlogCards />
                    <EditBlogCards />
                    <EditBlogCards />
                    <EditBlogCards />
                    <EditBlogCards />
                    <EditBlogCards />

                </div>
            </div>
        </>
    )
}