
import React, { useState } from 'react';
import BlogSheet from './BlogSheet';
import BlogPostSubsheet from './BlogPostSubsheet';
import BlogSection from './shared/BlogSection';
import { blogPosts as allBlogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/types/blog';

const Blog = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showPostDirectly, setShowPostDirectly] = useState(false);
  
  const handlePostClick = (index: number) => {
    // Use the direct post reference from allBlogPosts instead of trying to find by title
    const clickedPost = allBlogPosts[index];
    if (clickedPost) {
      setSelectedPost(clickedPost);
      setShowPostDirectly(true);
    }
  };

  const handleClose = () => {
    setIsSheetOpen(false);
    setSelectedPost(null);
    setShowPostDirectly(false);
  };

  const handleShowMoreClick = () => {
    setShowPostDirectly(false);
    setIsSheetOpen(true);
  };

  return (
    <>
      <BlogSection
        title="Explore Our Blog"
        subtitle="Explore expert ideas and stories from our team."
        posts={allBlogPosts}
        showMoreButton={true}
        onShowMore={handleShowMoreClick}
        onPostClick={handlePostClick}
        carouselView={true}
      />

      <BlogSheet 
        isOpen={isSheetOpen}
        onClose={handleClose}
        initialPost={null}
      />

      {showPostDirectly && selectedPost && (
        <BlogPostSubsheet 
          isOpen={true}
          onClose={handleClose}
          post={selectedPost}
        />
      )}
    </>
  );
};

export default Blog;
