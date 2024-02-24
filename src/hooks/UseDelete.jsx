import { useMutation } from "@apollo/client";

export const UseDelete = ( query) => {

    const [deleteMutation] = useMutation(query, {
        refetchQueries:[{ query: query }],
    });

    const deleteObject = async(id) => {
        try{
            await deleteMutation({ variables: { id }});
            console.log("Pelicula eliminada con exito: ", id);
        }catch(error){
            console.error(`Error al eliminar la película con ${id}`, error);
        }
    }


  return deleteObject
}
