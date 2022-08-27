import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialMedia from "./components/SocialMedia";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialMedia/>
      <About/>
      <Portfolio/>
      <Experience/>
    </div>
  );
}

export default App;
