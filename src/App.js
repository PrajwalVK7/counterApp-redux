import Counter from "./components/Counter";

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100"style={{height:'100vh'}}>
      <div className="p-4 rounded" style={{backgroundColor:'white',color:'black'}}>
      <h2 className="text-center">Counter Application</h2>
      <Counter />
      </div>
    </div>
  );
}

export default App;
