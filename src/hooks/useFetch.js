import { useEffect, useState } from 'react';

export default function useFetch(api) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [api]);

  return { data, isLoading, error };
}
