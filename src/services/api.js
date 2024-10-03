// const API_URL = 'http://localhost:3000/api';
let posts = JSON.parse(localStorage.getItem('posts')) || [];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  return posts.find(post => post.id === id);
};

export const createPost = async (postData) => {
  const newPost = { ...postData, id: Date.now(), createdAt: new Date().toISOString() };
  posts.push(newPost);
  localStorage.setItem('posts', JSON.stringify(posts));
  return newPost;
};

export const updatePost = async (id, postData) => {
  const index = posts.findIndex(post => post.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...postData };
    localStorage.setItem('posts', JSON.stringify(posts));
    return posts[index];
  }
  throw new Error('Post not found');
};

export const deletePost = async (id) => {
  const index = posts.findIndex(post => post.id === id);
  if (index !== -1) {
    const deletedPost = posts.splice(index, 1)[0];
    localStorage.setItem('posts', JSON.stringify(posts));
    return deletedPost;
  }
  throw new Error('Post not found');
};