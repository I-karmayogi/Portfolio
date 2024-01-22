import React from 'react';
import SeniorCounsel from '../images/SeniorCounsel.jpeg';
import TeamUp from '../images/TeamUp.jpeg';
import RoboAdvisor from '../images/RoboAdvisor.jpeg';
import FirmManagement from '../images/FirmManagement.jpeg';

const ProjectCard = ({ project }) => {
  return (
    <a target="_blank" href={project.link}>
      <div className="flex flex-col overflow-hidden gap-2 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
        <img
          alt={project.alt}
          loading="lazy"
          width="700px"
          height="700px"
          decoding="async"
          className="aspect-video object-cover"
          style={{ color: 'transparent' }}
          srcSet={project.imgSrcSet}
          src={project.imgSrc}
        />
        <div className="flex flex-col px-4 py-2 h-24">
          <div className="flex font-bold text-xl">{project.title}</div>
          <div className="flex text-info text-l text-8b8a91">{project.description}</div>
        </div>
      </div>
    </a>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Senior Counsel',
      link: 'https://github.com/I-karmayogi/SeniorCounsel',
      alt: 'discord',
      imgSrcSet: `${SeniorCounsel} 1x, ${SeniorCounsel} 2x`, 
      imgSrc: SeniorCounsel,
      description: 'Node.js, EJS, MongoDB, Express, JavaScript',
    },
    {
      title: 'TeamUp',
      link: 'https://github.com/I-karmayogi/TeamUP-SocialNetworking-Website',
      alt: 'team',
      imgSrcSet: `${TeamUp} 1x, ${TeamUp} 2x`,
      imgSrc: TeamUp,
      description: 'HTML, Bootstrap, Javascript, FireBase',
    },
    {
      title: 'RoboAdvisor',
      link: 'https://github.com/example/Robo-Advisor',
      alt: 'robot',
      imgSrcSet: `${RoboAdvisor} 1x, ${RoboAdvisor} 2x`,
      imgSrc: RoboAdvisor,
      description: 'Python, Flask, TensorFlow, HTML, ChartJs',
    },
    {
      title: 'FirmManagement',
      link: 'https://github.com/example/FirmManagement',
      alt: 'office',
      imgSrcSet: `${FirmManagement} 1x, ${FirmManagement} 2x`,
      imgSrc: FirmManagement,
      description: 'C++, Operating System',
    },
    // Add more projects with similar structure
  ];

  return (
    <section className="grid gap-8 p-5 mt-5 md:p-0">
      <div className="text-3xl font-medium text-zinc-200">Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
