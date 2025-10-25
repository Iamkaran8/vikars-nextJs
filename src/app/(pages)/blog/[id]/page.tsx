import { SinglePost } from "@/app/components/blogs/singlePost/SinglePost";
import Navbar from "@/app/components/Navbar";

interface BlogPageProps {
    params: {
        id: string;
    };
}

export default function BlogPage({ params }: BlogPageProps) {

    return (
        <>
            <Navbar />
            <SinglePost />
        </>
    )
}