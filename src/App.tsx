import React from 'react';
import PostList from './PostList';

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
    image: null, // Без изображения
    title: 'Post Title 2',
    description: 'Short description of post 2',
    text: 'Full content of post 2',
    date: '2024-01-19',
    lesson_num: 2,
    author: 'Author 2'
  },
];

const App = () => {
  return (
    <div className="App">
      <PostList posts={posts} />
    </div>
  );
};

export default App;
