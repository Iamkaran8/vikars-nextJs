'use client';

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store/Store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { AdminLogin } from "@/app/utils/apis/admin/AdminLogin";

interface FormDataTypes {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading, error, user } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState<FormDataTypes>({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(AdminLogin(formData)); // wait for login to complete
  };

  // 👇 Redirect once user data is available
  useEffect(() => {
    if (user && user.type === "Admin") {
      router.push("/admin/uploads");
    }
  }, [user, router]);

  return (
    <div className="flex flex-col items-start justify-center h-screen w-full">
      <form
        className="flex flex-col gap-8 w-[75%] rounded-[20px] shadow-2xl p-8"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-32 font-bold mb-[30px]">Admin Login</h2>

        {/* Email Field */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="text-25 font-bold">Email Id:</label>
          <div className="border border-forest rounded-[15px] bg-[#FFE694] flex items-center px-3">
            <input
              className="text-[#000000] rounded-[15px] placeholder-black p-4 bg-[#FFE694] w-full outline-none"
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

        {/* Password Field */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password" className="text-25 font-bold">Password:</label>
          <div className="border border-forest rounded-[15px] bg-[#FFE694] flex items-center px-3">
            <input
              className="text-[#000000] rounded-[15px] placeholder-black p-4 bg-[#FFE694] w-full outline-none"
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
