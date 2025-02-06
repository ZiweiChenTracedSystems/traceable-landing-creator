import React from 'react';
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "All Steps to follow and all angles need",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
      image: "/lovable-uploads/23c3935b-ef5c-4e12-bdf7-7147ff947024.png"
    },
    {
      title: "All Steps to follow and all angles need",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
      image: "/lovable-uploads/23c3935b-ef5c-4e12-bdf7-7147ff947024.png"
    },
    {
      title: "All Steps to follow and all angles need",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
      image: "/lovable-uploads/23c3935b-ef5c-4e12-bdf7-7147ff947024.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Blog</h2>
          <p className="text-gray-600">Experience insights from our digital product passport team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transform scale-90">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Button variant="link" className="text-blue-500 p-0 hover:text-blue-600">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="px-8">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;