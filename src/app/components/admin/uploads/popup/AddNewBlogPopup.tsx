'use client'
import { useState } from "react";
import { X } from "lucide-react";

export const AddNewBlogPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    // Store blog fields
    const [blog, setBlog] = useState({
        title: "",
        description: "",
        image: "",
        date: "",
        category: "",
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBlog((prev) => ({ ...prev, [name]: value }));
    };

    // Handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("New Blog Data:", blog);
        setShowPopup(false);
    };

    return (
        <>
            {/* Open Popup Button */}
            <button
                onClick={() => setShowPopup(true)}
                className="bg-forest text-white px-6 py-2 rounded-full"
            >
                Add New Blog
            </button>

            {/* Popup Overlay */}
            {showPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-black/40 scrollbar-hide">
                    <div className="bg-white w-[50%] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-10 relative animate-fadeIn scrollbar-hide">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Add New Blog
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4  ">
                            <div className="flex flex-col">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Blog Title"
                                    value={blog.title}
                                    onChange={handleChange}
                                    className="border focus:outline-none border-forest rounded-lg px-3 py-2 focus:ring-1 focus:ring-forest focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="description">description</label>
                                <textarea
                                    name="description"
                                    placeholder="Blog Description"
                                    id="description"
                                    value={blog.description}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-forest focus:outline-none h-32 "
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="Image">Image</label>
                                <input
                                    type="text"
                                    name="image"
                                    id="Image"
                                    placeholder="Image URL"
                                    value={blog.image}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-forest focus:outline-none"
                                />
                            </div>


                            <div className="flex flex-col">
                                <label htmlFor="Date">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    id="Date"
                                    value={blog.date}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-forest focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="category">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Category"
                                    value={blog.category}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-forest focus:outline-none"
                                />

                            </div>
                            <button
                                type="submit"
                                className="bg-forest text-white py-2 rounded-lg hover:bg-forest transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};



