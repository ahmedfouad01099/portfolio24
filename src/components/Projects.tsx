import React from 'react';
import ProjectItem from './ProjectItem';
import {
  backendProducts,
  frontendProjects,
  fullScreenProjects,
  projects,
} from '../utils/constants';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div
        className="max-w-[1240px] mx-auto px-2 py-16"
        data-aos="fade-right"
        data-aos-duration="1000">
        <p className="text-xl tracking-widest uppercase text-primary">
          Side Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        {/* Mobile */}
        <div>
          <h3 className="my-8">Mobile Development</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map(project => {
              return (
                project.show && (
                  <div
                    style={{width: '100%'}}
                    key={project.id}
                    data-aos="zoom-in"
                    data-aos-duration="1000">
                    <ProjectItem
                      title={project.title}
                      backgroundImg={project.thumb_img}
                      projectUrl={project.projectUrl}
                      tech={project.category}
                    />
                  </div>
                )
              );
            })}
          </div>
          <div className="grid md:grid-cols-1 gap-4">
            {fullScreenProjects.map(project => {
              return (
                <div
                  style={{width: '100%'}}
                  key={project.id}
                  data-aos="zoom-in"
                  data-aos-duration="1000">
                  <ProjectItem
                    title={project.title}
                    backgroundImg={project.thumb_img}
                    projectUrl={project.projectUrl}
                    tech={project.category}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="my-8">Backend Development</h3>
          <div className="grid md:grid-cols-1 gap-4">
            {backendProducts.map(project => {
              return (
                <div
                  style={{width: '100%'}}
                  key={project.id}
                  data-aos="zoom-in"
                  data-aos-duration="1000">
                  <ProjectItem
                    title={project.title}
                    backgroundImg={project.thumb_img}
                    projectUrl={project.projectUrl}
                    tech={project.category}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Frontend Development */}
        <div>
          <h3 className="my-8">Frontend Development</h3>
          <div className="grid md:grid-cols-1 gap-4">
            {frontendProjects.map(project => {
              return (
                <div
                  style={{width: '100%'}}
                  key={project.id}
                  data-aos="zoom-in"
                  data-aos-duration="1000">
                  <ProjectItem
                    title={project.title}
                    backgroundImg={project.thumb_img}
                    projectUrl={project.projectUrl}
                    tech={project.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
