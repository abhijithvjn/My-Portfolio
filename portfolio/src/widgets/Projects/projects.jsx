"use client";
import React, { useEffect, useState } from "react";
import ProjectsMobile from "../../components/ProjectsMobile";
import ProjectsDesktop from "../../components/ProjectsDesktop";

const Projects = (props) => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return isTouch ? <ProjectsMobile {...props} /> : <ProjectsDesktop {...props} />;
};

export default Projects;
