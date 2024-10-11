import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {FaGithub, FaLinkedinIn, FaDownload} from 'react-icons/fa';
import ResumeShot from '../../public/assets/Nosarumen_Imuentinyan_Resume.jpg';
import PDFViewer from 'pdf-viewer-reactjs';
import {Viewer, Worker} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ResumePdf = () => {
  const resumePdfLink = '/assets/ahmedfouad2024.pdf';
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 right-0 z-10 flex items-center justify-center">
          <a href={resumePdfLink} download className="p-0">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer scale-75 hover:scale-100 ease-in  hover:bg-secondary duration-300 ">
              <FaDownload title="download resume" />
            </div>
          </a>
        </div>
        {/* <Image
          src={ResumeShot}
          className="rounded-xl "
          alt="/"
          loading="lazy"
        /> */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
          <div style={{height: '750px'}}>
            <Viewer
              fileUrl={resumePdfLink}
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </div>
    </>
  );
};

const Resume = () => {
  return (
    <>
      <Head>
        <title>Ahmed Fouad | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specialized in usinf react, nextjs and typescript to build exceptional user interface."
        />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Ahmed Fouad</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/ahmed-fouad-b4b9b51a6"
              target="_blank"
              rel="noreferrer">
              <FaLinkedinIn
                title="Linkedin"
                size={20}
                style={{marginRight: '1rem'}}
              />
            </a>
            <a
              href="https://github.com/ahmedfouad01099"
              target="_blank"
              rel="noreferrer">
              <FaGithub
                title="GitHub"
                size={20}
                style={{marginRight: '1rem'}}
              />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Team Player <span className="px-1">|</span> Mobile & Web Development{' '}
              <span className="px-1">|</span> Analytics & Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Team Player</p>
            <p className="py-2">Web Development</p>
            <p>Analytics & Problem Solving</p>
          </div>
        </div>
        <div className="max-w-full ">
          <ResumePdf />
        </div>
        <div className="mt-4">
          <Link href="/#projects">
            <p className="underline cursor-pointer text-lg hover:text-primary">
              Back
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Resume;
