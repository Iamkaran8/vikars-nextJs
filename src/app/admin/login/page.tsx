import { LoginForm } from "@/app/components/admin/login/LoginForm";
import Image from "next/image";

export default function Home() {
    return (

        <div className="bg-darkCream flex flex-col md:flex-row">
            
            <div className="hidden md:flex w-[50%] items-center justify-center h-screen">
                <Image
                    className="-mt-[80px]"
                    src="/logo_img.svg"
                    alt="Logo"
                    height={250}
                    width={250}
                />
            </div>

            
            <div className="w-full md:w-[50%]">
                <LoginForm />
            </div>
        </div>

    )
}