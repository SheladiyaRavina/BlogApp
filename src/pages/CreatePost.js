import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { addPost } from '../services/postService';
import { toast } from 'react-toastify';

function CreatePost() {
  const navigate = useNavigate();

  const handleSubmit = (postData) => {
    addPost(postData);
    toast.success('Post created successfully');
    navigate('/posts');
  };

  return (
    <div>

      <PostForm 
        initialValues={{ title: '', content: '' }}
        onSubmit={handleSubmit}
        buttonText="Create Post"
      />
    </div>
  );
}

export default CreatePost;