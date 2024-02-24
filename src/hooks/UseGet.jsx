import { useQuery, gql } from '@apollo/client';

const useGet = (query,dato) => {
  const { loading, error, data } = useQuery(query);

  return {
    loading,
    error,
    movies: data ? data.dato : [],
  };
};

export default useGet;
