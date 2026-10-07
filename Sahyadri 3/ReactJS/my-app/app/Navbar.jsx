import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* <div className="bg-orange-400">
      <h1 className="text-info">Welcome to portfolio page</h1>
    </div> */}

      <div className="w-100">
        <div className="flex gap-5 bg-orange-400">
          {/* The commented out code below is fine, but remember to change class to className if you uncomment it */}
          {/* <h1 className="text-gray-500 dark:text-red-400">NavBar</h1> */}

          <Link href="/home" className="text-blue-600 visited:text-purple-600">
            Home
          </Link>
          <Link href="/about" className="text-blue-600 visited:text-purple-600">
            About
          </Link>

          <Link
            href="/contact"
            className="text-blue-600 visited:text-purple-600"
          >
            Contact
          </Link>
        </div>

        <div className="bg-yellow-400">
          <h1>Thushara B S</h1>
          <h2>Student Developer</h2>
          <div>
            <button className="pr-3">Hire Me</button>
            <button>Download CV</button>
          </div>
          <div>
            <img
              src="https://img.magnific.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_hybrid&w=740&q=80"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
