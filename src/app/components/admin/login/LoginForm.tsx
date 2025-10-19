'use client';

import { AdminLogin } from "@/app/utils/apis/admin/AdminLogin";
import { useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store/Store";
import { useState } from "react";
import { useSelector } from "react-redux";


interface FormDataTypes {
    email: string;
    password: string;
}



export const LoginForm = () => {

    const diaptach = useAppDispatch()
    const { loading, error } = useSelector((state: RootState ) => state.auth)

    const [formData, setFormData] = useState<FormDataTypes>({
        email: "",
        password: ""
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        diaptach(AdminLogin(formData))

    };

    return (
        <div className="flex flex-col items-center justify-center h-screen  w-[100%]">
            <h2 className="text-32 font-bold mb-[30px]">Admin Login</h2>
            <form
                className="flex flex-col gap-8 w-[75%]"
                onSubmit={handleFormSubmit}
            >
                <div className="flex flex-col gap-1 w-[100%]">
                    <label htmlFor="email" className="text-25 font-bold">Email Id:</label>
                    <div className="border border-forest rounded-[15px]  bg-[#FFE694] flex  items-center px-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                        <input
                            className=" text-[#000000] rounded-[15px] placeholder-black p-4 bg-[#FFE694] w-[100%] outline-none"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter Your Email Id"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-[100%]">
                    <label htmlFor="password" className="text-25 font-bold">Password:</label>
                    <div className="border border-forest rounded-[15px]  bg-[#FFE694] flex  items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1" /><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /></svg>
                        <input
                            className=" text-[#000000] rounded-[15px] placeholder-black p-4 bg-[#FFE694] w-[100%] outline-none"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter Your Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="text-24 px-8 py-2 rounded text-white bg-[#104028] rounded-[15px]"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </div>
            </form>
        </div>
    );
};
