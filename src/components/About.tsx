import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/IMG_20241005_041742.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div
          className="col-span-2"
          data-aos="fade-right"
          data-aos-duration="1000">
          <p className="uppercase text-xl tracking-widest text-primary">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 text-lg">
            I am a skilled software engineer with over four years of experience
            as a MERN stack developer, specializing in React Native mobile
            development. I graduated from the Faculty of Computer and
            Information Science at Mansura University, Egypt, where I developed
            a strong foundation in software development principles and
            practices.
          </p>
          <p className="py-2 text-gray-600 text-lg">
            Throughout my career, I have honed my expertise in developing
            dynamic and responsive web applications using MongoDB, Express.js,
            React, and Node.js. My specialization in React Native allows me to
            create high-quality mobile applications that deliver seamless user
            experiences across various platforms. I also possess a deep
            understanding of GraphQL and Codegen, enabling me to create
            efficient APIs and streamline data management in my projects. In
            addition to my core skills, I have a beginner-level proficiency in
            PHP and Vue.js, which I am actively exploring to expand my
            development toolkit. I am passionate about leveraging technology to
            solve real-world problems and continuously seek opportunities to
            learn and grow in the ever-evolving tech landscape. With a strong
            commitment to delivering high-quality solutions and a collaborative
            approach to teamwork, I am dedicated to making a positive impact in
            every project I undertake.
          </p>
          <div className="w-[50%]">
            <Link href="/#projects">
              <p className="py-2 text-gray-600 underline cursor-pointer text-lg hover:text-primary">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <div data-aos="fade-up" data-aos-duration="1000">
            <Image
              src={AboutImg}
              className="rounded-xl "
              alt="/"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
