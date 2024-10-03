import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/postService';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">Welcome to Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">
                {post.content.substring(0, 150)}
                {post.content.length > 150 ? '...' : ''}
              </p>
              <Link 
                to={`/post/${post.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {posts.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No posts found. Create your first post!</p>
      )}
      <div className="mt-8 text-center">
        <Link 
          to="/create"
          className="bg-yellow-500 text-white no-underline px-4 py-2 rounded hover:bg-blue-900"
        >
          Create New Post
        </Link>
      </div>
    </div>
  );
}

export default Home;