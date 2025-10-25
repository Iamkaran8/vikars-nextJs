import { AddNewBlog } from "../AddNewBlog"

export const Header = () => {
    return (
        <>
            <div className="px-4 sm:px-6 md:px-10 py-6 md:py-8 lg:py-10 cont text-14 sm:text-16 lg:text-20">
                <div className="flex justify-end">
                    <AddNewBlog />
                </div>
            </div>
        </>
    )
}