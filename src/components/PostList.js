import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPosts, deletePost } from '../services/postService';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
      setPosts(getPosts());
      toast.success('Post deleted successfully');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-600">No posts found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Created At</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="py-2 px-4 border-b">{post.title}</td>
                  <td className="py-2 px-4 border-b">{new Date(post.createdAt).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">
                    <Link 
                      to={`/edit/${post.id}`} 
                      className="bg-green-600 no-underline text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                    >
                      Edit 
                    </Link>
                    <button 
                      onClick={() => handleDelete(post.id)} 
                      className="bg-red-500 text-white px-3 py-1 border-0 rounded-lg hover:bg-red-600"
                    >
                      Delete 
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default PostList;