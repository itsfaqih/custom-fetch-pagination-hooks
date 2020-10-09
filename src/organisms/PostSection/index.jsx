import React from 'react';
import usePagination from '../../hooks/usePagination';
import PostItem from '../../molecules/PostItem';

export default function PostSection({ posts }) {
  const { page, action } = usePagination(posts);

  return (
    <section>
      <div className="grid grid-cols-2 gap-4">
        {page.data.map(post => (
          <PostItem key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
      <div className="flex mt-4">
        <div className="text-gray-700">Current page: {page.current}</div>
        <div className="ml-auto">
          <button className={`${page.previous === null ? 'text-gray-500 cursor-default' : 'text-gray-700'}`} disabled={page.previous === null} onClick={action.previous}>Previous</button>
          <button className={`${page.next === null ? 'text-gray-500 cursor-default' : 'text-gray-700'} ml-4`} disabled={page.next === null} onClick={action.next}>Next</button>
        </div>
      </div>
    </section>
  );
}
