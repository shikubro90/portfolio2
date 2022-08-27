import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
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
      <Contact
    </div>
  );
}

export default App;
