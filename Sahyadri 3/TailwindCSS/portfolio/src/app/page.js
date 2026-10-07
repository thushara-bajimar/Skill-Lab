export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Namaste, I'm Thushara
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Computer Science Engineering Student
        </p>

        <p className="mt-4 max-w-xl text-gray-500">
          Welcome to my personal portfolio. Here you can explore my
          skills, projects, experience, and achievements.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          View My Projects
        </button>
      </section>
    </main>
  );
}