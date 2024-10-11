import React from 'react';
import Details from './ExperienceDetails';
import BasicTabs from './Tabs';

const Experience = () => {
  const VentioExperience = {
    companyName: 'Ventio',
    role: 'Front-End Developer',
    duration: 'December 2020 - January 2022',
    activities: [
      'Collaborated with a team of professional engineers to plan, design, build, and implement the user interface systems of web-based applications and provide a satisfactory user experience with no issues, errors, or downtime.',
      'Contributed to the building and optimization of some in-house applications to optimize productivity as well as customer-facing account management applications, which increased customer inflow by automating account opening processes.',
      'Played an active role in testing, troubleshooting, and resolving issues such as those related to performance, accessibility,  browser compatibility, and security.',
      'Reviewing and approving pull requests from other team members.',
      'Collaborating on large codebase with other developers using git and the Microsoft Azure DevOps cloud solutions platform.',
    ],
  };

  const DepaxExperience = {
    companyName: 'Depax',
    role: 'React Native Developer',
    duration: 'April 2021 - Present',
    activities: [
      `1. App Development
Collaborate with designers and product managers to develop mobile applications using React Native.
Write clean, maintainable, and efficient code to implement new features and functionalities.
`,
      `2. Code Reviews
Participate in code reviews to ensure quality and adherence to best practices.
Provide constructive feedback to peers and receive input on your own code to improve your skills.
`,
      `3. Testing and Debugging
Conduct unit testing and debugging to identify and fix issues in applications.
Use tools like Jest and React Native Testing Library to ensure application reliability.
`,
      `4. Performance Optimization
Analyze and optimize app performance to ensure smooth user experiences.
Implement best practices for managing memory and improving load times.
`,
      `5. API Integration
Work with backend developers to integrate APIs and ensure proper data flow between frontend and backend services.
Use GraphQL or RESTful APIs to fetch and manage data effectively.
`,
      `6. Collaboration with Cross-Functional Teams
Collaborate with UX/UI designers to create user-friendly interfaces and enhance user experience.
Participate in daily stand-ups and sprint planning meetings as part of an Agile development process.
`,
      `7. Documentation
Document code and application features to facilitate knowledge sharing within the team.
Prepare technical specifications and user manuals for end-users.
`,
      `8. Learning and Development
Stay updated with the latest trends in React Native and mobile development by attending workshops, webinars, or online courses.
Experiment with new libraries and tools to improve development workflows.
`,
      `9. User Feedback Integration
Gather and analyze user feedback to identify areas for improvement in existing applications.
Implement changes based on user testing results to enhance app functionality.
`,
      `10. Mentorship and Knowledge Sharing
Mentor junior developers and share knowledge through team meetings or lunch-and-learn sessions.
Contribute to internal wikis or repositories with best practices and coding standards.
These activities not only contribute to your professional growth but also enhance the overall success of the projects you work on.`,
    ],
  };

  const UsedoExperience = {
    companyName: 'Usedo',
    role: 'Front-End Developer',
    duration: 'April 2021 - August 2023',
    activities: [
      'Collaborated with the project manager and backend engineer.',
      'Designed and developed the client side of the sub-company’s ( Illusion Decals ) website while writing re-usable and easy to maintain codes.',
      'Ensured cross-platform development and optimization for mobile responsiveness.',
    ],
  };

  const TheCodeFactoryExperience = {
    companyName: 'TheCodeFactory',
    role: 'Front-End Developer',
    duration: 'April 2021 - Present',
    activities: [
      'Collaborated with the project manager and backend engineer.',
      'Designed and developed the client side of the sub-company’s ( Illusion Decals ) website while writing re-usable and easy to maintain codes.',
      'Ensured cross-platform development and optimization for mobile responsiveness.',
    ],
  };

  return (
    <div id="experience" className="w-full lg:h-screen p-2 ">
      <div
        className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
        data-aos="fade-right"
        data-aos-duration="1500">
        <p className="text-xl tracking-widest uppercase text-primary">
          Experience
        </p>
        <h2 className="py-4">Where I&apos;ve Worked</h2>
        <div className="mt-2 ">
          <BasicTabs
            tabList={['Ventio', 'Depax', 'Usedo', 'TheCodeFactory']}
            tabPanel={[
              <Details key={'Ventio'} experienceDetails={VentioExperience} />,
              <Details key={'Depax'} experienceDetails={DepaxExperience} />,
              <Details key={'Usedo'} experienceDetails={UsedoExperience} />,
              <Details
                key={'TheCodeFactory'}
                experienceDetails={TheCodeFactoryExperience}
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
