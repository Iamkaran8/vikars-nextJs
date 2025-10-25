interface BlogPageProps {
  params: {
    id: string; 
  };
}

export default function BlogPage({ params }: BlogPageProps) {
const blogId = params.id;
    return (
        <>
            {blogId}
        </>
    )
}