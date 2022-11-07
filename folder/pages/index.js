import Head from 'next/head';
import { useState } from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BsFillMoonStarsFill} from 'react-icons/Bs';
import Image from 'next/image';
import profilePic from '../public/Avatar.png';
import designs from '../public/designs.png';
import hand from '../public/hand.png';
import languages from '../public/languages.png';
import calculator from '../public/calculator.png';
import blackjack from '../public/blackjack.png';
import clickableSounds from '../public/clickableSounds.png';
import pairsGame from '../public/pairsGame.png';
import ari from '../public/ariCom.png';
import portfolio from '../public/newPortfolio.png';
import Link from 'next/link';





export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Avatar.png" />
      </Head>

      <main className='px-10 md:px-20 lg:px-40 light:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-4xl font-Rubik'>Portfolio</h1>
              <ul className='flex items-center gap-3'>
                <li>
                <Link href="/subfolder/CV.pdf" className='bg-gradient-to-r from-purple-600 to-teal-500 rounded-md px-2 py-2'> Curriculum Vitae </Link>
                </li>
              </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-600 to-purple-400 md:text-6xl">Simone Hassan</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Junior Front End Developer and Designer</h3>
            <p className='text-md py-5 leading-8 text-neutral-200 md:text-xl max-w-lg mx-auto'>
              Look up above right, that is my curriculum vitae.
            </p>
          </div>

          <div className='relative bg-gradient-to-b from-purple-500 rounded-full my-40 w-80 h-80 mt-20 overflow-hidden mx-auto'>
            <Image 
            src={profilePic}
            alt='Memoji myself'/>
          </div>

          <div className='text-5xl flex justify-center gap-5 py-3 bg-gradient-to-br from-teal-600 to-purple-400'>
            <Link href='https://uk.linkedin.com/in/simonehassan'><AiFillLinkedin/></Link>
            <Link href='https://github.com/Hawadacirka'><AiFillGithub /></Link>
          </div>
        </section>

        <section>
          <div>
            <h3 className='py-5'></h3>
            <p className='text-md leading-1 text-zinc-100'>
            Throughout my career, I was wondering what I really like that I want to keep going with my life, I found out about coding.
            Suddenly, a strong dose of curiosity leads me to into learning new concepts and technologies.
            I always use online training solutions to learn new programming techniques and strategies and. 
            This way, I can stay up-to-date on new trends and technologies.
            I am willing to learn new software or coding methods to increase my abilities and good asset to companies. 
            My willingness to learn has helped me become more productive and valuable for new revenue opportunities.<br /> <br /> 
            I studied with HTML, CSS, and JavaScript at Learning People global ltd, I have self experience with React, Tailwind and Next.js 
            and I am very able to adapt quickly to new scenarios. 
            I am a great fit for companies that need someone who can work quickly and efficiently in both Front End development and future back end development.
            </p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg shadow-violet-700 p-10 rounded-xl my-10'>
            <Image src={designs} alt='designs-icon' width={90} height={90} className='rounded-3xl mx-auto'/>
              <h3 className='text-lg text-teal-300 font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
              Design or animate using an appropriate design<br /> 
              style that is suited for your needs.
              </p>
              <h4 className='py-4 text-purple-300'><span>Designs tools I use</span></h4>
              <p className='text-zinc-100 py-1'>Canva</p>
              <p className='text-zinc-100 py-1'>Figma</p>
            </div>

  
            <div className='text-center shadow-lg shadow-violet-700 p-10 rounded-xl my-10'>
            <Image src={languages} alt='designs-icon' width={90} height={90} className='rounded-3xl mx-auto'/>
              <h3 className='text-lg text-teal-300 font-medium pt-8 pb-2'>Amazing Languages</h3>
              <p className='py-2'>
              Neat, understandable, easy code
              </p>
              <h4 className='py-4 text-purple-300'>The Languages I use</h4>
              <p className='text-zinc-100 py-1'>HTML</p>
              <p className='text-zinc-100 py-1'>CSS</p>
              <p className='text-zinc-100 py-1'>JavaScript</p>
              <p className='text-zinc-100 py-1'>NEXT/REACT.js</p>
              <p className='text-zinc-100 py-1'>Tailwind</p>
              <p className='text-zinc-100 py-1'>Bootstrap</p>
            </div>

            <div className='text-center shadow-lg shadow-violet-700 p-10 rounded-xl my-10'>
            <Image src={hand} alt='designs-icon' width={90} height={90} className='rounded-3xl mx-auto'/>
              <h3 className='text-lg text-teal-300 font-medium pt-8 pb-2'>Extra good addition</h3>
              <p className='py-2'>
                Besides the languages, I am also proficient in:
              </p>
              <h4 className='py-4 text-purple-300'>The list I use</h4>
              <p className='text-zinc-100 py-1'>GIT</p>
              <p className='text-zinc-100 py-1'>GITHUB</p>
              <p className='text-zinc-100 py-1'>NODE.js</p>
              <p className='text-zinc-100 py-1'>Microsoft Offics</p>
              <p className='text-zinc-100 py-1'>Visual Studio Code</p>
              <p className='text-zinc-100 py-1'>Terminal</p>
              <p className='text-zinc-100 py-1'>NPM</p>

            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-2xl text-purple-400 py-1'>Projects</h3>
            <p>
            Here is my projects list
            I created with my existing skills. 
            There will becoming more projects that I use my skills of Front/Back End development.
            Click colourful underline to view the projects.
            </p>
          </div>
          
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

          <div className='basic-1/3 flex-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-md px-2 py-2'>
            <Image src={portfolio} className='rounded-lg object-cover' width={'100%'} height={'100%'}
            alt='calculatorPicutre'/>
            <Link href="https://github.com/Hawadacirka/calculator" className='px-1 underline'>View Portfolio on Github</Link>
            </div>

            <div className='basic-1/3 flex-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-md px-2 py-2'>
            <Image src={calculator} className='rounded-lg object-cover' width={'100%'} height={'100%'}
            alt='calculatorPicutre'/>
            <Link href="https://github.com/Hawadacirka/calculator" className='px-1 underline'>View Calculator on Github</Link>
            </div>

            <div className='basic-1/3 flex-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-md px-2 py-2'>
            <Image src={blackjack} className='rounded-lg object-cover' width={'100%'} height={'100%'}
            alt='blackjackPicture'/>
            <Link href="https://github.com/Hawadacirka/blackjack" className='px-1 underline'>View Blackjack on Github</Link>
            </div>

            <div className='basic-1/3 flex-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-md px-2 py-2'>
            <Image src={clickableSounds} className='rounded-lg object-cover' width={'100%'} height={'100%'}
            alt='clickableSoundsPicture'/>
            <Link href="https://github.com/Hawadacirka/soundboxes" className='px-1 underline'>View Clickable Sounds on Github</Link>
            </div>

            <div className='basic-1/3 flex-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-md px-2 py-2'>
            <Image src={pairsGame} className='rounded-lg object-cover' width={'100%'} height={'100%'}
            alt='pairsGamePicture'/>
            <Link href="https://github.com/Hawadacirka/pairsgame" className='px-1 underline'>View Pairs Game on Github</Link>
            </div>

            <div className='basic-1/3 flex-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-md px-2 py-2'>
              <Image src={ari} className='rounded-lg object-cover' width={'100%'} height={'100%'}
              alt='ariComPicture'/>
              <Link href="https://github.com/Hawadacirka/ari-ecommerce" className='px-1 underline'>View Ari Ecommerce on Github</Link>
            </div>


          </div>
        </section>

      </main>
    </div>
  )
}
