import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <Link to={`/post/${post.id}`} className="text-blue-900 no-underline  hover:underline">Read more</Link>
          <span className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;