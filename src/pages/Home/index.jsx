import React from 'react';
import useFetch from '../../hooks/useFetch';
import PostLayout from '../../templates/PostLayout';

export default function Home() {
  const { data, isLoading, error, triggerReload } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (isLoading) return 'Loading...';

  if (error) return 'Error';

  return (
    <div>
      <PostLayout data={{ posts: data }} action={{ reloadPost: triggerReload }} />
    </div>
  );
}
