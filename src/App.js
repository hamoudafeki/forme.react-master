import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./comp/NavBar";
import Forme from "./comp/Forme";
import Cards from "./comp/Cards";
import Footer from "./comp/Footer";

function App() {
  return (
    <div className="App">
<NavBar />
    <br/>
    <br/>
    <Forme/>

<br/>
<br/>
<Cards/>  

<br/>
<br/>

<footer>
  <Footer/>
</footer>
    </div>
  );
}

export default App;
