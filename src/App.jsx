import './App.css'
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function App() {

  return (
    <div className={"mx-auto max-w-[85%]"}>
        <Header />
        <About />
        <Footer />
    </div>
  )
}

export default App
