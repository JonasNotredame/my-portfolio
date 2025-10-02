import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import Header from "../../header/Header";
import "./Router.scss";
import AboutPage from "../../pages/about/AboutPage";
import ProjectsPage from "../../pages/projects/ProjectPage";
import ContactPage from "../../pages/contact/ContactPage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <div className="webcontent">
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/my-portfolio/home" />}
          />
          <Route path="/my-portfolio/home" element={<HomePage />} />
          <Route path="/my-portfolio/about" element={<AboutPage />} />
          <Route path="/my-portfolio/projects" element={<ProjectsPage />} />
          <Route path="/my-portfolio/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
