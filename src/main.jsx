import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './Components/Organims/Login.jsx'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Register } from './Components/Organims/Register.jsx'
import { Home } from './Components/Organims/Home.jsx'
import { Navbar } from './Components/Molecules/NavBard.jsx'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([{
  path: '/',
  element: <Login/>,
  index: true
},
{
  path: '/register',
  element: <Register/>
},
{
  path: '/',
  element: <Navbar/>,
  children:[
    { 
      path: '/home/',
      element: <Home/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
