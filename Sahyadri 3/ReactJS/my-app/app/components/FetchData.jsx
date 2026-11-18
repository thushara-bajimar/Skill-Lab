// "use client";

// export default function FetchData() {
//     return(
//         <>
//         {/* js in curly braces */}
//         <h1>Welcome, USER!!</h1>
//         </>
//     )
// }
"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <div className="p-4">
      {users.map((user) => {
        return (
          <>
            <div key={user.id} className="mb-4 border-5 p-3 bg-amber-100 shadow-lg rounded-lg hover:bg-amber-200">
              <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                <img
                  class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
                  src="/img/erin-lindford.jpg"
                  alt=""
                />
                <div class="space-y-2 text-center sm:text-left">
                  <div class="space-y-0.5">
                    <p class="text-lg font-semibold text-black hover:text-rose-400 hover:text-3xl">
                      Name: {user.name}
                    </p>
                    <p class="font-medium text-gray-500">Email: {user.email}</p>
                  </div>
                  <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                    Address: {user.address.street}, {user.address.suite},{" "}
                    {user.address.city}, {user.address.zipcode}
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
