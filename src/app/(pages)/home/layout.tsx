import Navbar from "@/app/components/Navbar";
import "../../globals.css";
import Footer from "@/app/components/Footer";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

            <Navbar />
            <main className="pt-[100px] md:pt-[130px]  text-16 md:text-20">
                {children}
            </main>
            <Footer />
        </>
    );
}
