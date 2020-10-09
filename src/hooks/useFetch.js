import { useEffect, useState } from 'react';

export default function useFetch(api) {
  const [reload, setReload] = useState(true);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (reload) {
      setIsLoading(true);
      fetch(api)
        .then(response => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => setIsLoading(false));
      setReload(false);
    }
  }, [api, reload]);

  const triggerReload = () => setReload(true)

  return { data, isLoading, error, triggerReload };
}
