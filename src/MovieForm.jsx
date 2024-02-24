// // MovieForm.js
// import React, { useState } from "react";
// import {  gql } from "@apollo/client";
// import { UsePost } from "./hooks/UsePost";

// const CREATE_MOVIE = gql`
//   mutation CreateMovie($input: MovieInput!) {
//     createMovie(input: $input) {
//       id
//       title
//       year
//       director
//     }
//   }
// `;

// const MovieForm = () => {
//   const createMovie = "";

//   const { createObject, loading, error } = UsePost(createMovie, CREATE_MOVIE);

//   const [title, SetTitle] = useState();
//   const [year, SetYear] = useState();
//   const [director, SetDirector] = useState();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const input = {
//       title: title,
//       year: parseInt(year, 10),
//       director: director,
//     };
//     console.log(typeof input.year);
//     createObject(input);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Título:
//         <input
//           type="text"
//           name="title"
//           onChange={(e) => SetTitle(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Año:
//         <input
//           type="number"
//           name="year"
//           onChange={(e) => SetYear(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Director:
//         <input
//           type="text"
//           name="director"
//           onChange={(e) => SetDirector(e.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit" disabled={loading}>
//         Crear Película
//       </button>
//       {loading && <p>Cargando...</p>}
//       {error && <p>Error: {error.message}</p>}
//     </form>
//   );
// };

// export default MovieForm;
