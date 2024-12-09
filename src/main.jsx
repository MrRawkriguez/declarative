//import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//const root = createRoot(document.getElementById('root'))

//root.render(
//  <h1>Hello, React</h1>
//)


/*

Challenge - recreate the above line of code in vanilla JS by creating and appending an h1
to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.

*/


// Create a new h1 element
const h1 = document.createElement('h1');

// Set the text content for the h1 element
h1.textContent = "This is imperative coding";

// Add a class name of "header" to the h1 element
h1.className = "header";

// Append the h1 element as a child of the div#root
document.getElementById("root").appendChild(h1);
