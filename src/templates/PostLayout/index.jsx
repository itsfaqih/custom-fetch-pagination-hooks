import React from 'react';
import SectionTitle from '../../atoms/SectionTitle';
import PostSection from '../../organisms/PostSection';

export default function PostLayout({ data }) {
  return (
    <div className="App">
      <div className="container mx-auto pt-4">
        <SectionTitle text="Posts" />
        <PostSection posts={data.posts} />
      </div>
    </div>
  );
}
