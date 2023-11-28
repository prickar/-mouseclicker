import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Mouse Tracker" initialCount={0} />
      <Footer /> 
    </div>
  );
}

export default App;
