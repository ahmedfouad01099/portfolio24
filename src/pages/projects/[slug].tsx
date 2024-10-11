import WhatsappImg from '../../public/assets/projects/whatsapp-web-clone/whatsapp.png';
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {EffectFade, Navigation, Pagination} from 'swiper/modules';

import {projects} from 'src/utils/constants';

const WhatsappClone = () => {
  const router = useRouter();
  console.log('10-', router.query);

  const currentProject = projects.find(
    project => project.title === router.query?.slug,
  );

  return (
    currentProject &&
    currentProject?.thumb_imgs && (
      <>
        <Head>
          <title>Ahmed Fouad | Whatsapp Web Clone Project</title>
          <meta
            name="description"
            content="This is a clone of the whatsapp web application featuring some of its amazing functionalities such as:
					1. User Authentication.
					2. Real-time Messaging.
					3. Voice / Audio Messaging
					4. Voice / Video Call.
					5. File Sharing.
					6. Responsive Design.
					7. User Online / Offline Status.
					8. AI Chat Bot."
          />
          <link rel="icon" href="/fav.ico" />
        </Head>
        <div className="w-full overflow-x-hidden">
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper">
            {currentProject?.thumb_imgs?.map((img, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="w-screen h-[80vh] relative bg-black/70 ">
                    <div className="absolute top-0 left-0 w-full h-[80vh] z-10" />
                    <Image
                      className="absolute z-1"
                      layout="fill"
                      objectFit="contain"
                      src={img}
                      alt="/"
                      priority
                    />
                    <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                      <h2 className="py-2">{currentProject.title}</h2>
                      <h3>{currentProject.category}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
            <div className="col-span-4">
              <p className="text-lg">Project</p>
              <h2>Overview</h2>
              <p className="text-lg mt-2">{currentProject?.des}</p>

              <div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
                {/* HERE */}
                <a
                  href={`${currentProject?.gitHubCode}`}
                  target="_blank"
                  rel="noreferrer">
                  <button className="px-8 py-2 tracking-widest">
                    Github Code
                  </button>
                </a>
                <a
                  href={`${currentProject?.projectUrl}`}
                  target="_blank"
                  rel="noreferrer">
                  <button className="px-8 py-2 tracking-widest">
                    Live Site
                  </button>
                </a>
                <a
                  href={`${currentProject.post}`}
                  target="_blank"
                  rel="noreferrer">
                  <button className="px-8 py-2 tracking-widest">
                    Video Demo
                  </button>
                </a>
              </div>

              <h2 className="mt-4 mb-4">key features 🌟:</h2>
              <ol className="text-lg mt-2">
                {currentProject?.features?.map((feature, i) => {
                  return (
                    <div key={i}>
                      <h3 className='mt-8'>{feature.head}</h3>
                      {feature.desc?.map((desc, i) => {
                        return <li key={i}>{desc}</li>;
                      })}
                    </div>
                  );
                })}
              </ol>
            </div>
            <div className="col-span-4 md:col-span-1 ">
              <div className="shadow-xl shadow-gray-400 rounded-xl py-4 ">
                <div className="p-2 text-md">
                  <p className="text-center font-bold pb-2">Technologies</p>
                  <div className="grid grid-cols-3 md:grid-cols-1">
                    {currentProject?.technologies?.map((technology, i) => {
                      return (
                        <p
                          key={i}
                          className="text-gray-600 text-sm py-2 flex items-center">
                          <RiRadioButtonFill className="pr-1" /> {technology}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Link href="/#projects">
              <p className="underline cursor-pointer text-lg hover:text-primary">
                Back
              </p>
            </Link>
          </div>
        </div>
      </>
    )
  );
};

export default WhatsappClone;
