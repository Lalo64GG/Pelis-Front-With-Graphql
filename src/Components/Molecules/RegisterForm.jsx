import { useState } from "react";
import { Input } from "../Atoms/Input"
import { UsePost } from "../../hooks/UsePost";
import { gql } from "@apollo/client";

//* Creación de la consulta graphql
const CREATE_MUTATION = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input){
        name
        email
        password
    }
  }
`;


export const RegisterForm = () => {

    //? Uso de customHook para ahorrar codigo
    const {createObject} = UsePost(CREATE_MUTATION)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        const input = {
            name,
            email,
            password,
        };

        createObject(input);

    }

  return (

    <form className=" max-w-xs border-black mx-auto mt-8 p-12 rounded-md shadow-lg">
        <h1 className='text-center text-2xl text-white mb-5'>Register</h1>
        <div className="mb-5 block">
            <label className="text-white text-2xl font-bold">User Name</label>
            <Input type="text" placeholder="Nombre" onChange={setName}/>
        </div>

        <div className="mb-5 block">
            <label className="text-white text-2xl font-bold">Email</label>
            <Input type="email" placeholder="Email" onChange={setEmail}/>
        </div>
        
        <div className="mb-5 block">
            <label className="text-white text-2xl font-bold">Password</label>
            <Input type="password" placeholder="Password" onChange={setPassword}/>
        </div>

        <div className=" flex justify-center items-center" >
             <button type='submit' className=' bg-purple-900 hover:bg-purple-950 text-white rounded-md py-1 px-6' onClick={handleSubmit}> 
                create an account
             </button>
        </div>

        </form>
  )
}
