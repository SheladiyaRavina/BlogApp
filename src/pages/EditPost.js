import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { getPosts, updatePost } from '../services/postService';
import { toast } from 'react-toastify';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const posts = getPosts();
    const foundPost = posts.find(p => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
    } else {
      toast.error('Post not found');
      navigate('/posts');
    }
  }, [id, navigate]);

  const handleSubmit = (postData) => {
    updatePost(parseInt(id), postData);
    toast.success('Post updated successfully');
    navigate('/posts');
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
      <PostForm 
        initialValues={post}
        onSubmit={handleSubmit}
        buttonText="Update Post"
      />
    </div>
  );
}

export default EditPost;