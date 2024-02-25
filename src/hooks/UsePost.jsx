import { useMutation } from '@apollo/client';

export const UsePost = (query) => {

    const [createMutation] = useMutation(query);

  const createObject = async (input) => {
    try {
        const { data } = await createMutation({
            variables: {input}
        }) 

        console.log("Nueva objeto creado: ", data);
      
      } catch (error) {
        console.error("Error al crear el objeto: ", error);
      }
  };

  return {
    createObject,
  };
};
