import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPosts } from '../services/postService';

function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const posts = getPosts();
    const foundPost = posts.find(p => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">
        Posted on: {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="mt-6 mb-8">
        <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
      </div>
      <div className="mt-8">
        <Link 
          to="/" 
          className="bg-yellow-500 text-white px-4 py-2 rounded no-underline hover:bg-blue-900 mr-4"
        >
          Back to Home
        </Link>
        <Link 
          to={`/edit/${post.id}`} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 no-underline"
        >
          Edit Post
        </Link>
      </div>
    </div>
  );
}

export default ViewPost;