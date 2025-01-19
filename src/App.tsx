import "./css/App.css";

function App() {
  return (
    <div className="container-fluid mx-auto">
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Home
            </a>
          </li>
          <li>
            <a href="#about"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <section>
          <h1 id="home" className="text-4xl font-bold text-center mt-4">
            Home
          </h1>
          <p className="text-center mt-4">
            Welcome to the home page.
          </p>
        </section>
        <section>
          <h1 className="text-2xl font-bold">Skills</h1>
          <ul className="flex space-x-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
