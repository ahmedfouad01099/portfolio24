import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center mx-auto flex">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center mt-60">
				<div>
					<div data-aos="fade-left" data-aos-duration="1000">
						<h1 className="py-4 text-gray-700">
							Hi, I&#39;m <span className="text-primary"> Ahmed Fouad</span>
							
						</h1>
						<h1 className="py-2 text-gray-700">MERN Stack Developer</h1>
						<p className="py-4 text-gray-600 sm:max-w-[70%] m-auto text-lg">
							I am a software engineer specializing in MERN stack development, which includes MongoDB, Express.js, React, and Node.js. With a deep passion for creating dynamic and responsive web applications, I excel at building scalable and efficient systems tailored to meet the diverse needs of clients.
							My experience spans various projects across multiple industries, where I skillfully translate complex requirements into elegant code and intuitive user interfaces. I am committed to continuous learning and staying updated with the latest technologies, enabling me to deliver innovative solutions that enhance user experiences and drive business success.
							In addition to my technical prowess, I am a collaborative team player who values effective communication and problem-solving. I thrive in fast-paced environments, contributing to all stages of the development lifecycle, from ideation to deployment.
							With a strong foundation in the MERN stack and a dedication to quality and performance, I am well-equipped to help businesses navigate their digital transformation journey and achieve their software goals.
						</p>
						<p className="py-4 text-gray-600 sm:max-w-[70%] m-auto text-lg">
							I also write backend code using node.js
						</p>
					</div>

					{/*  */}
					<div data-aos="fade-right" data-aos-duration="1000">
						<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
							<a
								href="https://www.linkedin.com/in/ahmed-fouad-b4b9b51a6/"
								target="_blank"
								rel="noreferrer"
							>
								<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  hover:bg-secondary duration-300">
									<FaLinkedinIn title="Linkedin" />
								</div>
							</a>
							<a href="https://github.com/ahmedfouad01099" target="_blank" rel="noreferrer">
								<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
									<FaGithub title="GitHub" />
								</div>
							</a>
							<Link href="/#contact">
								<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
									<AiOutlineMail title="Contact" />
								</div>
							</Link>
							<Link href="/resume">
								<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
									<BsFillPersonLinesFill title="Resume" />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
