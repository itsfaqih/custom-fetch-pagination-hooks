import { useEffect, useState } from 'react';

export default function usePagination(initialData, perPage = 6) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(null);

  const nextPageNumber = maxPageNumber === 1 ? null : currentPage + 1;
  const previousPageNumber = currentPage === 1 ? null : currentPage - 1;

  useEffect(() => {
    if (initialData) {
      setData(initialData.slice((currentPage - 1) * perPage, currentPage * perPage));
      setMaxPageNumber(Math.ceil(initialData.length / perPage));
    }
  }, [initialData, perPage, currentPage]);

  const nextPage = () => {
    if (currentPage !== maxPageNumber) {
      setCurrentPage(current => current + 1);
    }
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(current => current - 1);
    }
  };

  return {
    page: {
      data,
      current: currentPage,
      next: nextPageNumber,
      previous: previousPageNumber,
      last: maxPageNumber,
    },
    action: {
      next: nextPage,
      previous: previousPage,
    },
  };
}
