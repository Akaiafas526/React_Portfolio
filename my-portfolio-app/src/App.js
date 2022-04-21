import React, { useState } from "react";
import { About, Projects, Contact, Resume } from "./components/Pages";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  const [page, setPage] = useState("About Me");

  //
  // FOR FUTURE DEVELOPMENT
  //
  const [projectId, setProjectId] = useState(0);

  // Returns component to load depending on the page selected
  const renderPage = () => {
    switch (page) {
      case "About Me":
        return <About />;
      case "Projets":
        return (
          <Projects
            setPage={setPage}
            projectId={projectId}
            setProjectId={setProjectId}
          />
        );
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;

      //
      // FOR FUTURE DEVELOPMENT
      //
      // case 'ProjectDetails':
      //     return <ProjectDetails projectId={projectId} setPage={setPage} />
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
