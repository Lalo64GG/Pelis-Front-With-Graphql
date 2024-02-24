import { useMutation } from '@apollo/client';

export const UsePost = (mutation, query) => {

    const [mutation, { loading, error}] = useMutation(query);

  const createObject = async (input) => {
    try {
        const { data } = await mutation({
            variables: {input}
        }) 

        console.log("Nueva objeto creado: ", data);
      
      } catch (error) {
        console.error("Error al crear el objeto: ", error);
      }
  };

  return {
    createObject,
    loading,
    error
  };
};
