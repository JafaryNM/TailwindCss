import "./App.css";

function App() {
  return (
    <>
      <div className="container bg-deepblue">
        <h1 className="text-white text-3xl font-bold ">React tailwind</h1>
        <button className="bg-amber text-green-500  text-2xl font-bold mt-12 rounded border-4 px-6 py-4">
          Click here
        </button>
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-green-500 text-lg text-white "
        />
      </div>
    </>
  );
}

export default App;
