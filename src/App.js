import React, { useState } from "react";
import About from "./components/Pages/About/about";
import Contact from "./components/Pages/Contact/contact";
import Projects from "./components/Pages/Projects/projects";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  const [page, setPage] = useState("About Me");

  // Returns component to load depending on the page selected
  const renderPage = () => {
    switch (page) {
      case "About Me":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };
  return (
    <div className="main">
      <Header page={page} setPage={setPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
