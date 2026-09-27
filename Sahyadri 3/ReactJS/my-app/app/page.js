// comp based struc
// virtual dom: copy
// jsx: js+html

// import Image from "next/image";

// function User1({ name, age }) {  // name start with capital
//   return (
//     <>
//       <p>Hello, I am {name}</p>
//       <p>I am {age} years old</p>
//     </>
//   )
// }

// Props are arguments passed into React components.
// Props are passed to components via HTML attributes.
// props stands for properties.


// Rendering Lists in React allows you to display multiple items dynamically by iterating over data and rendering components or elements for each item.

// cond renderring

// function Greeting({isLoggedIn = false}) {
//   let ans = isLoggedIn ? "Welcome Back!" : "Please sign In";
//   return <h1>{ans}</h1>;
// }


// export default function Page() {
//   const students = [
//     { id: 1, name: "Rahul", age: 20 },
//     { id: 2, name: "Vidya", age: 16 },
//     { id: 3, name: "Hima", age: 19 }
//   ];
//   return (
//     <div>
//     {students.map((student) => (
//       <>
//         <div key={student.id}>
//           <h3>Name: {student.name}</h3>
//           <h3>Age: {student.age}</h3>
//         </div>
//         <br></br>
//       </>
//       ))
//     }
//     </div>

//   )



  // const price = 50;
  // const quantity = 4;

  // return(
  //   <>
  //   <p>Price: {price}</p>
  //   <p>Quantity: {quantity}</p>
  //   <p>Total: ₹{price*quantity}</p>
  //   </>
  // )



  // const name = "Thushara";
  // const profession= "Student Developer";
  // const skills = "Coding";
  // const contact = "thushara@abc.com"

  // return (
  //   <>
  //     <div>
  //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUz36MYeAqwha2U-O0iy6ASfzEYp1o_Sqqav59g3BwovqCx_5AZHXOf3t&s=10" alt="img" height="50" width="50"></img>
  //       {/* <Image src="/favicon.ico" alt="img" height="50" width="50"/> */}
  //       <h1>Namaste!!</h1>
  //       <h1>I am {name}</h1>
  //       <p>{profession}</p>
  //       <p>Skills: {skills}</p>
  //       <p>Contact: {contact}</p>
  //     </div>
  //   </>
  // )
// }

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.js
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }



// state management

// import State from "./state";
// export default function Home(){
//   return(
//     <>
//     <State/>    {/* ctrl click to go to component */}
//     </>
//   )
// }

import ActivityDashboard from "../activities/activity23_9/act1Props";

export default function Page() {
  return <ActivityDashboard />;
}