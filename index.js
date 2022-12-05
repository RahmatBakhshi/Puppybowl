import React from "react";
import {createRoot} from 'react-dom/client'
import Main from "./components/Main";


// const Main = () => {
//     return (
//         <div>
//         <h1> Puppy Bowl</h1>
//         </div>
//     );
// }

const root = createRoot(document.querySelector('#root'));
root.render(<h1>Puppy Bowl</h1>);
