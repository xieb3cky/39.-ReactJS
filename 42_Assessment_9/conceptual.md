### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
The purpose of React Router enables navigation among views of various components / changing browser URL without page refreshing. 

- What is a single page application?
Site that uses exclusively client-side routing / loads only a single web document then updates the body of document via JS APis when different content is shown.

- What are some differences between client side and server side routing?
Server-side : clicking link causes browser to request page & replace whole DOM / server decides the HTML returned based on URL request. Client-side routing: displays different pages without loading new pages from the server.

- What are two ways of handling redirects with React Router? When would you use each?
1.Using <Redirect/> component / as a 404 handler 2. Using .push method on history object / after certain user action.

- What are two different ways to handle page-not-found user experiences using React Router? 
1.Using Route component in Switch 2.Link component  

- How do you grab URL parameters from within a component using React Router?
useParams hook

- What is context in React? When would you use it?
Universal data across your app / data accessible across all components. You would use it when there's prop drilling/tunneling, avoid repetition, global theme & share data.

- Describe some differences between class-based components and function components in React.
Class-based components : require extension from React, must have render method, state is initialized in constructor
Function-based component : JS function & returns a JSX element, utilizes hooks for states

- What are some of the problems that hooks were designed to solve?
Less code & duplication, implement similar functionaliers faster, no need for render props or HOCS & wrapper. 