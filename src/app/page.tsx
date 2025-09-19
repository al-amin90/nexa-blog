import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexa Blog || Blogs",
  description: "This is a blog website built with Next.js and Tailwind CSS",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: 'no-store'
  });
  const blogs = await res.json();
  console.log("blogs", blogs);

  return (
    <div className="my-10">
     <LatestBlogs blogs={blogs}/>
    </div>
  );
};

export default HomePage;
