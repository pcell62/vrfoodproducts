/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProjectPage from "pages/ProjectPage";
import NotFoundPage from "pages/NotFoundPage";
import Catalog from "pages/Catalog";
import About from "pages/About";
import { ProjectDetailPage } from "pages/ProjectDetailPage";
import { DiscussProjectPage } from "pages/DiscussProjectPage";

import "./assets/css/styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/contact-us" element={<DiscussProjectPage />} />
        <Route exact path="/catalog" element={<Catalog />} />
        <Route exact path="/about" element={<About />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
