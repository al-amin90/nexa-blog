
import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:'Next |  Blogs',
    description: "Welcome to NexaBlog"
}

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30
    }
  });
  const blogs = await res.json();
  console.log("blogs", blogs);

  return (
    <div className="my-10 w-[90%] mx-auto">
     <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {blogs.map((blog : Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;