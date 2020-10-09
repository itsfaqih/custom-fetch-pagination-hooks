import React from 'react';
import SectionTitle from '../../atoms/SectionTitle';
import PostSection from '../../organisms/PostSection';

export default function PostLayout({ data, action }) {
  return (
    <div className="App">
      <div className="container pt-4 mx-auto">
        <SectionTitle text="Posts" />
        <PostSection posts={data.posts} />
        <button onClick={() => action.reloadPost()} className="font-semibold text-gray-700">Reload</button>
      </div>
    </div>
  );
}
