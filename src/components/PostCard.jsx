import React from 'react';

const PostCard = ({ post }) => {
  const { image, title, description, text, date, lesson_num, author } = post;

  return (
    <div className="post-card">
      {image && <img src={image} alt={title} className="post-image" />}
      <div className="post-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{text}</p>
        <p><strong>Lesson Number:</strong> {lesson_num}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Author:</strong> {author}</p>
      </div>
    </div>
  );
};

export default PostCard;
