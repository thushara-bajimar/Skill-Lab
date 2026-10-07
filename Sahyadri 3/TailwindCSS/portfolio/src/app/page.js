function Skill({ name }) {
  return (
    <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
      {name}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-950">TB</h1>

        <div className="hidden gap-8 md:flex">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Projects
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>
      <section className="grid min-h-[calc(100vh-88px)] items-center gap-12 px-8 py-12 md:grid-cols-2 lg:px-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Namaste, I'm <span className="text-blue-600">Thushara B S</span>
          </h1>

          <p className="mt-4 text-2xl font-semibold text-gray-600">
            Student Software Developer
          </p>

          <p className="mt-4 max-w-xl text-gray-600">
            I am a Computer Science Engineering student interested in software
            development, problem solving, and building meaningful projects with
            technology.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              About Me
            </button>

            <button className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50">
              View Projects
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-64 w-64 md:h-80 md:w-80 items-center justify-center rounded-3xl bg-blue-100 shadow-lg">
            <span className="text-9xl">👩‍💻</span>
          </div>
        </div>
      </section>
      <section className="px-8 py-16 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            I am a Computer Science Engineering student interested in software
            development, problem solving, and learning new technologies.
          </p>
          <h3 className="mt-10 text-2xl font-semibold text-gray-900">Skills</h3>

          <div className="mt-5 flex flex-wrap gap-3">
            <Skill name="C" />
            <Skill name="C++" />
            <Skill name="Python" />
            <Skill name="JavaScript" />
            <Skill name="React" />
            <Skill name="Tailwind CSS" />
          </div>
        </div>
      </section>
    </main>
  );
}
