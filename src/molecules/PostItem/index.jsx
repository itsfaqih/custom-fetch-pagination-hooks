import React from 'react';
import PostBody from '../../atoms/PostBody';
import PostCard from '../../atoms/PostCard';
import PostTitle from '../../atoms/PostTitle';

export default function PostItem({ title, body }) {
  return (
    <PostCard>
      <PostTitle text={title} />
      <PostBody text={body} />
    </PostCard>
  );
}
