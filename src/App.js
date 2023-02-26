import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import data from "./data";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((item) => (
        <Main {...item} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
