import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Main></Main>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
