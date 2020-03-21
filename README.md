# Personajes de breaking bad
Este es un ejemplo de como implementar Apollo Client con react, usando el manejador de estados de Apollo
Ejemplo de Implementacion de Apollo Client con react, usando el manejador de estados de apollo.

Las librerias usadas en este proyecto son 
# GraphQl
* graphql
* apollo-client
* apollo-cache-inmemory
* apollo-link-http
* graphql-tag
* react-apollo
# Libreria de Estilo
* reactstrap
* boostrap

# Como configurar y conectar apollo client con react
Para poder configurar y conectar apollo client con react necesitamos tener instaladas los paquetes antes mencionados, ir a **src/index.js**, luego tenemos que crear 3 variables :
* cache
* link
* client

# Ejemplo
const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://breaking-bad-voting.herokuapp.com/graphql"
});


const client = new ApolloClient({
  cache,
  link
});


En el uri tenemos el graphql de breaking bad. Ya que lo tenemos configurado tenemos que conectar react con apollo client para esto tenemos que envolver nuestra app con ApolloProvider este lleva como props la propiedad client ahi le ponemos la constante client ejemplo:

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
