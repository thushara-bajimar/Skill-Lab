// // state management in React
// // hooks
// //usestate
// //use

// "use client"
// import { useState } from "react";
// // export default function State(){
// //     // const [state, setState] = useState(initialState)
// //     const [count, setCount] = useState(0);
// //     function inc(){
// //         setCount(count+1);
// //     }
// //     return(
// //         <>
// //         <h2>Count : {count}</h2>
// //         <button onClick={inc}>Increase</button>
// //         </>
// //     );
// // }
// export default function State(){
//     // const [state, setState] = useState(initialState)
//     const [theme, setTheme] = useState("dark");

//     function Light(){
//         setTheme("light");
//     }

//     function Dark(){
//         setTheme("dark");
//     }

//     const containerStyle = {
//         backgroundcolor: theme === "light"?  "#fff": "#000",
//         color: theme === "light"?" #000": "#fff"
//     }

//     // function change(){
//     //     setText("Welcome");
//     // }

//     return(
//         <>
//         {/* <h2> {text}</h2> */}
//         <div style={containerStyle}>
//         <button onClick={Light}>Light Theme</button>
//         <br></br>
//         <button onClick={Dark}>Dark Theme</button>
//         </div>
//         </>
//     );
// }



/////////// ************************************** //////////////
/////////// ************************************** //////////////



// "use client"
// import { useState } from "react" 

// export default function State(){
//     // const [state, setState] = useState(initialState)
//     const [theme , setTheme] = useState()
//     function lightTheme(){
//         setTheme("light")
//     }
//     function darkTheme(){
//         setTheme("dark")
//     }
//     return(
//     <div
//       style={{
//         backgroundColor: theme == "light" ? "white" : "black",
//         color: theme == "light" ? "black" : "white",
//         height: "100vh"
//       }}
//     >
//       <button onClick={lightTheme}>Light Theme</button>

//       <button onClick={darkTheme}>Dark Theme</button>

//       <p>Current Theme: {theme}</p>
//     </div>
//   );
// }



// State Management in React
// State is data that can change inside the component, and when the state changes, React re-renders the component.
// "use client"
// import { useState } from "react"

// export default function State() {
//     const [count, setCount] = useState(1)
//     // count : current value
//     // setCount : changng val
//     // useState() : init val

//     return (
//         <>
//            <p>{count}</p>
//            <button onClick={()=>{setCount("Kashi")}}>increase</button>
//         </>
//     )
// }

// Activities : 
// 1. chnge the theme using use state white-> black
// 2. Initially display "your bestfriend's name". Hide it when clicking the button.

// "use client"
// import { useState } from 'react';

// function App() {
//   const [isVisible, setIsVisible] = useState(true);
//   const bestFriendName = "abhi"; // Change to your friend's name

//   return (
//     <div>
//       {isVisible && <h1>{bestFriendName}</h1>}
//       <button onClick={() => setIsVisible(!isVisible)}>
//         {isVisible ? "Hide Name" : "Show Name"}
//       </button>
//     </div>
//   );
// }

// export default App;


// 3. Product Wishlist :

// Build a Product Wishlist using React useState.
// Requirements:

// Display a product name , detail and price.
// Add a Wishlist button.
// Toggle between ♡Add to Wishlist and ❤️Added to Wishlist.
// Display the current wishlist status.

"use client"
import { useState } from "react"

export default function Wishlist() {
    const items=[
        {name: "apple", detail: "red apple", price: 50},
        {name: "orange", detail: "yellow orange", price: 30},
        {name: "grapes", detail: "green grapes", price: 20}
    ]

    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <>
           <div>
            {items.map((item) => {
                return(
                <div>
                <h3>{item.name}</h3>
                <h4>{item.detail}</h4>
                <h4>{item.price}</h4>
                <button onClick={toggleWishlist}>
                {isWishlisted ? "❤️ Added to Wishlist" : "♡ Add to Wishlist"}
            </button>
                <br></br><hr></hr>
                </div>
            )})}
           </div>
           
        </>
    )
}