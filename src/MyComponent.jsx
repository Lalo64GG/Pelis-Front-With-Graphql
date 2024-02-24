import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { UseDelete } from './hooks/UseDelete';

// Consulta para obtener la lista de películas
const GET_MOVIES = gql`
  query GetMovies {
    movies {
      id
      title
      director
    }
  }
`;

// Mutación para eliminar una película
const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: ID!) {
    deleteMovie(id: $id)
  }
`;

const MovieList = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Listado de Películas</h2>
      <ul>
        {data.movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

const Movie = ({ movie }) => {
 const  deleteObject  = UseDelete(DELETE_MOVIE);

  const handleDelete = async (id) => {
    console.log("pelicula id: ", id);
    deleteObject(id);
  };

  return (
    <li>
      {movie.id}{movie.title}{' '}
      <button onClick={()=> handleDelete(movie.id)} disabled={false /* Puedes agregar lógica para deshabilitar el botón si es necesario */}>
        Eliminar
      </button>
    </li>
  );
};

export default MovieList;
