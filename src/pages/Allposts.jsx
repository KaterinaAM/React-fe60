import React from 'react';
import Layout from '../layouts/Layout';
import PostList from '../components/PostList';

const posts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Post Title 1',
    description: 'Short description of post 1',
    text: 'Full content of post 1',
    date: '2024-01-18',
    lesson_num: 1,
    author: 'Author 1'
  },
  {
    id: 2,
    image: null,
    title: 'Post Title 2',
    description: 'Short description of post 2',
    text: 'Full content of post 2',
    date: '2024-01-19',
    lesson_num: 2,
    author: 'Author 2'
  },
];

const AllPosts = () => {
  return (
    <Layout>
      <h2>All Posts</h2>
      <PostList posts={posts} />
    </Layout>
  );
};

export default AllPosts;


// /src
//   /components
//     - PostCard.js
//     - PostList.js
//   /layouts
//     - Layout.js
//   /pages
//     - AllPosts.js
//   /context
//     - ThemeContext.js
//   /styles
//     - theme.css
//   - App.js
//   - index.js