// "use client"



// import { useState } from "react";
// // import { auth } from "../../firebase/setup";
// import { RecaptchaVerifier, signInWithPhoneNumber, type ConfirmationResult } from "firebase/auth";
// import { useRouter } from 'next/router';

// import { auth } from "@/firebase/setup";

// interface FormData {
//     Name: string;
//     Email: string;
//     Board: string;
//     Location: string;
//     Phone: string;
// }

// export const Form = () => {
//     const [formData, setFormData] = useState<FormData>({
//         Name: "",
//         Email: "",
//         Board: "",
//         Location: "",
//         Phone: ""
//     });

//     const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
//     const [otp, setOtp] = useState<string>("");
//     const [verified, setVerified] = useState<boolean>(false);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string>(""); // ✅ new error state
//     const [success, setSuccess] = useState<string>(""); // ✅ success messages
//     const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // ✅ new state


//     // Handle input changes
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         setError(""); // clear error on input
//         setSuccess(""); // clear success
//     };

//     const navigate = useRouter()

//     // Submit form data to Google Sheet
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL.VITE_GOOGLE_SHEET_URL
//         if (!verified) {
//             setError("⚠️ Please verify your phone number before submitting the form!");
//             return;
//         }
//  setIsSubmitting(true);
//         try {
//             const date = new Date();
//             const formDataWithTime = {
//                 ...formData,
//                 Date: date.toLocaleDateString(),
//                 Time: date.toLocaleTimeString(),
//             };

//             const body = Object.entries(formDataWithTime)
//                 .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
//                 .join("&");

//             const response = await fetch(
//                 `${sheetUrl}`,
//                 {
//                     method: "POST",
//                     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//                     body,
//                 }
//             );

//             const data = await response.json();
//             console.log("Google Sheet Response:", data);

//             if (data.status === "success") {
//                 setSuccess(`✅ Hello ${formData.Name}, your details are saved!`);
//                 setFormData({ Name: "", Email: "", Board: "", Location: "", Phone: "" });
//                 setOtp("");
//                 setVerified(false);
//                 setConfirmationResult(null);
//                 navigate('/thankyou')
//             } else {
//                 setError("⚠️ Something went wrong. Please try again!");
//             }
//         } catch (err) {
//             console.error("Submit Error:", err);
//             setError("❌ Failed to submit data!");
//         }finally {
//         setIsSubmitting(false); // ✅ allow form again
//     }
//     };

//     // Send OTP via Firebase
//     const sendOtp = async () => {
//         if (!formData.Phone) {
//             setError("⚠️ Please enter your phone number!");
//             return;
//         }
//         if (formData.Phone.length !== 10) {
//             setError("⚠️ Phone number must be exactly 10 digits!");
//             return;
//         }

//         setLoading(true);
//         setError("");
//         try {
//             const phoneNumber = formData.Phone.startsWith("+")
//                 ? formData.Phone
//                 : `+91${formData.Phone}`;

//             const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
//                 'size': 'invisible'
//             });

//             const result = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
//             setConfirmationResult(result);
//             console.log("OTP sent:", result);
//             setSuccess("✅ OTP sent to your phone number!");
//         } catch (err) {
//             console.error("OTP Error:", err);
//             setError("❌ Failed to send OTP. Please try again!");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Verify OTP
//     const verifyOtp = async () => {
//         if (!confirmationResult) {
//             setError("⚠️ Please send OTP first!");
//             return;
//         }

//         if (!otp) {
//             setError("⚠️ Please enter the OTP!");
//             return;
//         }

//         setLoading(true);
//         setError("");
//         try {
//             const result = await confirmationResult.confirm(otp);
//             console.log("Phone verification successful:", result);
//             setVerified(true);
//             setSuccess("✅ Phone number verified successfully!");
//         } catch (err) {
//             console.error("OTP Verification Error:", err);
//             setError("❌ Invalid OTP. Please try again!");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="bg-forest  pt-8 px-4 py-4" id="contact_us">
//             <div className="cont flex flex-col lg:flex-row lg:px-10 px-0">
//                 {/* Left section */}
//                 <div className="p-2 md:p-8 gap-6 flex flex-col w-full lg:w-1/2 md:w-full justify-between">
//                     <div>
//                         <h2 className="text-32 text-white font-semibold leading-tight">
//                             Book Your Free Online Demo Class See the Difference in Just 30 Minutes
//                         </h2>
//                         <p className="text-white font-light pt-2">
//                             Personalised 1:1 learning that adapts to your child’s pace. Watch doubts vanish and confidence grow.
//                         </p>
//                     </div>
//                     <div>
//                         <h3 className="bg-cream inline-flex text-center text-forest font-bold leading-tight p-4 rounded-lg">
//                             Hurry — limited demo slots available today! Trusted by 5,000+ parents across India.
//                         </h3>
//                         <p className="text-white pt-4">
//                             Bonus: Get a free detailed learning report + customised study plan after your trial
//                         </p>
//                     </div>
//                 </div>

//                 {/* Right form section */}
//                 <div className="w-full lg:w-1/2 md:w-full lg:px-32 md:px-10 px-2 pb-4">
//                     <form onSubmit={handleSubmit} className="flex flex-col justify-center">
//                         <label className="text-white flex flex-col">Name:</label>
//                         <input
//                             className="rounded p-2 text-black text-20"
//                             type="text"
//                             name="Name"
//                             value={formData.Name}
//                             onChange={handleChange}
//                             required
//                         />
//                         <br />

//                         <label className="text-white flex flex-col">Email:</label>
//                         <input
//                             className="rounded p-2 text-black"
//                             type="email"
//                             name="Email"
//                             value={formData.Email}
//                             onChange={handleChange}
//                             required
//                         />
//                         <br />

//                         <div className="flex gap-4">
//                             <label className="text-white flex flex-col w-[48%]">
//                                 Board:
//                                 <input
//                                     className="rounded p-2 text-black"
//                                     type="text"
//                                     name="Board"
//                                     value={formData.Board}
//                                     onChange={handleChange}
//                                 />
//                             </label>

//                             <label className="text-white flex flex-col w-[48%]">
//                                 Location:
//                                 <input
//                                     className="rounded p-2 text-black"
//                                     type="text"
//                                     name="Location"
//                                     value={formData.Location}
//                                     onChange={handleChange}
//                                 />
//                             </label>
//                         </div>
//                         <br />

//                         <label className="text-white flex flex-col">Phone:</label>
//                         <div className="bg-white rounded flex">
//                             <div>
//                                 <input
//                                     className="rounded p-2 text-black outline-none"
//                                     type="text"
//                                     name="Phone"
//                                     value={formData.Phone}
//                                     onChange={handleChange}
//                                     required
//                                     maxLength={10}
//                                 />
//                             </div>
//                             <div className="w-[100%] bg-coral flex items-center justify-center">
//                                 <button
//                                     type="button"
//                                     className=" w-[100%]  p-2 rounded-[7px] text-white  text-[14px] md:text-[18px]"
//                                     onClick={sendOtp}
//                                     disabled={loading || verified}
//                                 >
//                                     {loading ? "Sending OTP..." : "Send OTP"}
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Error & Success Messages */}
//                         {error && (
//                             <div className="mt-2 p-2 bg-red-100 rounded text-red-700">
//                                 {error}
//                             </div>
//                         )}
//                         {success && (
//                             <div className="mt-2 p-2 bg-green-100 rounded text-green-700">
//                                 {success}
//                             </div>
//                         )}

//                         {/* OTP Verification Section */}
//                         <div className="mt-4">
//                             {confirmationResult && !verified && (
//                                 <div className="mt-4">

//                                     <label className="text-white flex flex-col">Enter OTP:</label>
//                                     <div className="bg-white rounded flex">
//                                         <div>
//                                             <input
//                                                 className="rounded p-2 text-black outline-none"
//                                                 type="text"
//                                                 value={otp}
//                                                 onChange={(e) => setOtp(e.target.value)}
//                                                 placeholder="Enter OTP"
//                                             />
//                                         </div>
//                                         <div className="w-[100%] bg-[#00A065]  flex items-center justify-center">
//                                             <button
//                                                 type="button"
//                                                 className="bg-[#00A065] p-2 rounded-[7px] text-white text-[14px] md:text-[18px]"
//                                                 onClick={verifyOtp}
//                                                 disabled={loading}
//                                             >
//                                                 {loading ? "Verifying..." : "Verify OTP"}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {verified && (
//                                 <div className="mt-2 p-2 bg-green-100 rounded text-black">
//                                     ✅ Phone verified successfully!
//                                 </div>
//                             )}

//                             <div id="recaptcha"></div>
//                         </div>
//                         <br />

//                         <div className="flex items-center justify-center">
//                             <button
//                                 type="submit"
//                                 className={`flex w-[100%] py-2 justify-center py-1 px-8 rounded w-max bg-coral text-white ${verified ? ' ' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
//                                 disabled={!verified || isSubmitting} 
//                             >
//                                 {verified ? "Submit" : "Submit (Verify phone first)"}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };




"use client"

import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber, type ConfirmationResult } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { auth } from "@/firebase/setup";

interface FormData {
    Name: string;
    Email: string;
    Board: string;
    Location: string;
    Phone: string;
}

export const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        Name: "",
        Email: "",
        Board: "",
        Location: "",
        Phone: ""
    });

    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [otp, setOtp] = useState<string>("");
    const [verified, setVerified] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError("");
        setSuccess("");
    };

    const router = useRouter(); // ✅ Next.js router

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL; // ✅ Next.js env variable
        if (!verified) {
            setError("⚠️ Please verify your phone number before submitting the form!");
            return;
        }
        setIsSubmitting(true);
        try {
            const date = new Date();
            const formDataWithTime = {
                ...formData,
                Date: date.toLocaleDateString(),
                Time: date.toLocaleTimeString(),
            };

            const body = Object.entries(formDataWithTime)
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                .join("&");

            const response = await fetch(sheetUrl!, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body,
            });

            const data = await response.json();
            console.log("Google Sheet Response:", data);

            if (data.status === "success") {
                setSuccess(`✅ Hello ${formData.Name}, your details are saved!`);
                setFormData({ Name: "", Email: "", Board: "", Location: "", Phone: "" });
                setOtp("");
                setVerified(false);
                setConfirmationResult(null);
                router.push('/thankyou'); // ✅ Next.js navigation
            } else {
                setError("⚠️ Something went wrong. Please try again!");
            }
        } catch (err) {
            console.error("Submit Error:", err);
            setError("❌ Failed to submit data!");
        } finally {
            setIsSubmitting(false);
        }
    };

    const sendOtp = async () => {
        if (!formData.Phone) {
            setError("⚠️ Please enter your phone number!");
            return;
        }
        if (formData.Phone.length !== 10) {
            setError("⚠️ Phone number must be exactly 10 digits!");
            return;
        }

        setLoading(true);
        setError("");
        try {
            const phoneNumber = formData.Phone.startsWith("+")
                ? formData.Phone
                : `+91${formData.Phone}`;

            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
                'size': 'invisible'
            });

            const result = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
            setConfirmationResult(result);
            console.log("OTP sent:", result);
            setSuccess("✅ OTP sent to your phone number!");
        } catch (err) {
            console.error("OTP Error:", err);
            setError("❌ Failed to send OTP. Please try again!");
        } finally {
            setLoading(false);
        }
    };

    const verifyOtp = async () => {
        if (!confirmationResult) {
            setError("⚠️ Please send OTP first!");
            return;
        }

        if (!otp) {
            setError("⚠️ Please enter the OTP!");
            return;
        }

        setLoading(true);
        setError("");
        try {
            const result = await confirmationResult.confirm(otp);
            console.log("Phone verification successful:", result);
            setVerified(true);
            setSuccess("✅ Phone number verified successfully!");
        } catch (err) {
            console.error("OTP Verification Error:", err);
            setError("❌ Invalid OTP. Please try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-forest  pt-8 px-4 py-4" id="contact_us">
            <div className="cont flex flex-col lg:flex-row lg:px-10 px-0">
                {/* Left section */}
                <div className="p-2 md:p-8 gap-6 flex flex-col w-full lg:w-1/2 md:w-full justify-between">
                    <div>
                        <h2 className="text-32 text-white font-semibold leading-tight">
                            Book Your Free Online Demo Class See the Difference in Just 30 Minutes
                        </h2>
                        <p className="text-white font-light pt-2">
                            Personalised 1:1 learning that adapts to your child’s pace. Watch doubts vanish and confidence grow.
                        </p>
                    </div>
                    <div>
                        <h3 className="bg-cream inline-flex text-center text-forest font-bold leading-tight p-4 rounded-lg">
                            Hurry — limited demo slots available today! Trusted by 5,000+ parents across India.
                        </h3>
                        <p className="text-white pt-4">
                            Bonus: Get a free detailed learning report + customised study plan after your trial
                        </p>
                    </div>
                </div>

                {/* Right form section */}
                <div className="w-full lg:w-1/2 md:w-full lg:px-32 md:px-10 px-2 pb-4">
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
                        <label className="text-white flex flex-col">Name:</label>
                        <input
                            className="rounded p-2 text-black text-20"
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            required
                        />
                        <br />

                        <label className="text-white flex flex-col">Email:</label>
                        <input
                            className="rounded p-2 text-black"
                            type="email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            required
                        />
                        <br />

                        <div className="flex gap-4">
                            <label className="text-white flex flex-col w-[48%]">
                                Board:
                                <input
                                    className="rounded p-2 text-black"
                                    type="text"
                                    name="Board"
                                    value={formData.Board}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="text-white flex flex-col w-[48%]">
                                Location:
                                <input
                                    className="rounded p-2 text-black"
                                    type="text"
                                    name="Location"
                                    value={formData.Location}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <br />

                        <label className="text-white flex flex-col">Phone:</label>
                        <div className="bg-white rounded flex">
                            <div>
                                <input
                                    className="rounded p-2 text-black outline-none"
                                    type="text"
                                    name="Phone"
                                    value={formData.Phone}
                                    onChange={handleChange}
                                    required
                                    maxLength={10}
                                />
                            </div>
                            <div className="w-[100%] bg-coral flex items-center justify-center">
                                <button
                                    type="button"
                                    className=" w-[100%]  p-2 rounded-[7px] text-white  text-[14px] md:text-[18px]"
                                    onClick={sendOtp}
                                    disabled={loading || verified}
                                >
                                    {loading ? "Sending OTP..." : "Send OTP"}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="mt-2 p-2 bg-red-100 rounded text-red-700">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="mt-2 p-2 bg-green-100 rounded text-green-700">
                                {success}
                            </div>
                        )}

                        <div className="mt-4">
                            {confirmationResult && !verified && (
                                <div className="mt-4">
                                    <label className="text-white flex flex-col">Enter OTP:</label>
                                    <div className="bg-white rounded flex">
                                        <div>
                                            <input
                                                className="rounded p-2 text-black outline-none"
                                                type="text"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                                placeholder="Enter OTP"
                                            />
                                        </div>
                                        <div className="w-[100%] bg-[#00A065]  flex items-center justify-center">
                                            <button
                                                type="button"
                                                className="bg-[#00A065] p-2 rounded-[7px] text-white text-[14px] md:text-[18px]"
                                                onClick={verifyOtp}
                                                disabled={loading}
                                            >
                                                {loading ? "Verifying..." : "Verify OTP"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {verified && (
                                <div className="mt-2 p-2 bg-green-100 rounded text-black">
                                    ✅ Phone verified successfully!
                                </div>
                            )}

                            <div id="recaptcha"></div>
                        </div>
                        <br />

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className={`flex w-[100%] py-2 justify-center py-1 px-8 rounded w-max bg-coral text-white ${verified ? ' ' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                                disabled={!verified || isSubmitting} 
                            >
                                {verified ? "Submit" : "Submit (Verify phone first)"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
