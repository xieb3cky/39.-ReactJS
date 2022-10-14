### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front-end framework developed by Facebook. Its aim is to allow developers to easily create faster user interfaces for websites & applications. You would use it to create reusable “view components” & encapsulate logic and HTML into a class. 

- What is Babel?
Babel is a stand alone library that transplites JSX to Javascript. 

- What is JSX?
JSX (Javascript Syntax Extension) is HTML embedded in Javascript. 

- How is a Component created in React?
One component per file, with component name as file name. To define components, write a JS function, accepts props, and return a React element.

- What are some difference between state and props?
Props are arguments passed through React components. They are immutable = component cannot change its own prop. States are data specific to a component and they can be changed. Whenever the data changes, component re-renders. 

- What does "downward data flow" refer to in React?
A parent component defines a function, which is passed as prop to the child component. The child component invokes the prop, then the parent function is called setting a new state. Parent component is re-rendered with the child.

- What is a controlled component?
Component form’s data that are controlled by the component’s state. It takes current value through props and make changes through callbacks.

- What is an uncontrolled component?
React is not in control of the form state, handled by the DOM itself.

- What is the purpose of the `key` prop when rendering a list of components?
The purpose of the `key` prop is to help React identify which items are changed/added/removed. Keys are given to repeated elements to provide stable identity among siblings.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
It is a poor choice if item order changes or items can be deleted.

- Describe useEffect.  What use cases is it used for in React components?
A built-in hook, each render has its own effect. Used for fetching data, starting timer, manually changing the DOM. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
A built-in hook returns an object with mutable key ‘current’, which is similar to a local variable but independent of state. Change to a ref value does not cause a re-render of a component. 

- When would you use a ref? When wouldn't you use one?
You would use a ref when accessing an underlying DOM element, setting & clearing timers. It should not be used to control the state of the DOM.

- What is a custom hook in React? When would you want to write one?
A javascript function that uses built-in hooks, allowing for re-usability across components. You would write one to abstract logic, handle repeated tasks, generate your own JSX.