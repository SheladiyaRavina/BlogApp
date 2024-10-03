let posts = [];

export const getPosts = () => {
  return posts;
};

export const addPost = (post) => {
  posts.push({ ...post, id: Date.now(), createdAt: new Date().toISOString() });
};

export const deletePost = (id) => {
  posts = posts.filter(post => post.id !== id);
};

export const updatePost = (id, updatedPost) => {
  const index = posts.findIndex(post => post.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost };
  }
};