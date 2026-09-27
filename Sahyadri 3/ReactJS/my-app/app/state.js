// state management in React
// hooks
//usestate
//use

"use client"
import { useState } from "react";
// export default function State(){
//     // const [state, setState] = useState(initialState)
//     const [count, setCount] = useState(0);
//     function inc(){
//         setCount(count+1);
//     }
//     return(
//         <>
//         <h2>Count : {count}</h2>
//         <button onClick={inc}>Increase</button>
//         </>
//     );
// }
export default function State(){
    // const [state, setState] = useState(initialState)
    const [theme, setTheme] = useState("dark");

    function Light(){
        setTheme("light");
    }

    function Dark(){
        setTheme("dark");
    }

    const containerStyle = {
        backgroundcolor: theme === "light"?  "#fff": "#000",
        color: theme === "light"?" #000": "#fff"
    }

    // function change(){
    //     setText("Welcome");
    // }

    return(
        <>
        {/* <h2> {text}</h2> */}
        <div style={containerStyle}>
        <button onClick={Light}>Light Theme</button>
        <br></br>
        <button onClick={Dark}>Dark Theme</button>
        </div>
        </>
    );
}