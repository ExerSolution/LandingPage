'use client';
import { Baloo_2, Cairo_Play } from 'next/font/google'
import { Button, Card, Navbar } from 'flowbite-react';

const adventpro = Cairo_Play({ subsets: ['latin'], weight:['800'] })
export default function Landing() {
  return (
    <main className={`md:w-auto ${adventpro.className}`} style={{ backgroundColor: '#111827' }}>
     <Navbar    
      fluid
    className='flex justify-center'>
      <Navbar.Brand className='lg:hidden'>
        <span className="text-gray-900 whitespace-nowrap lg:text-4xl md:text-base font-semibold dark:text-white" style={{marginLeft:-120}}>
          ExSYaseru21_Tv
        </span>
      </Navbar.Brand>
      <div className="flex justify-left md:order-2 "style={{marginRight:-20}}>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse className='md:ml-20'>
          <Navbar.Link href="#" className="block mt-6 lg:text-3xl font-semibold pl-1 pr-4 text-white rounded md:bg-transparent md: text-base text-blue-700 md:p-0 md:dark:text-blue-500 " aria-current="page">Home</Navbar.Link>
          <Navbar.Link href="#about" className="block mt-6 lg:text-1xl font-semibold pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-base dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Navbar.Link>
          <img className="rounded-full w-20 h-20" src="./img/logo.png" alt="image description" />
          <Navbar.Link href="#project" className="block mt-6 lg:text-3xl font-semibold pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-base dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Project</Navbar.Link>
          <Navbar.Link href="#contact" className="block mt-6 lg:text-3xl font-semibold pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-base dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Navbar.Link>     
      </Navbar.Collapse>
    </Navbar>
    {/* home div */}
    <div id='home' className="justify-center text-center h-100">
  <div className='mt-80 flex justify-center'>
<h1 className=" font-extrabold text-yellow-200 md:text-6xl lg:text-7xl dark:text-white">– Hello – </h1>
<h2 className='text-base'>PROGRAMMER</h2>
</div>
<div className='mt-70'>
  <p className='ml-5 md:text-2xl lg:text-5xl pt-20 pb-20'>I&apos;m Yasser S. Magelna</p>
  </div> 
  <div className='pb-20' style={{paddingBottom:'150px'}}> 
  <a href='#about' className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
  <span className="text-2xl relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      About
  </span>
    <svg className="w-6 h-4 ml-2 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>
</div>  
</div>
{/* about div */}
<div id='about' className='w-30' style={{paddingBottom:100}}>
  <div className="inline-flex items-center justify-center w-full" style={{marginTop:60}}>
    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
    <h1 className='text-5xl pl-4 pr-4 mb-20'> Educational Background  </h1>
    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
</div>
<div className='flex justify-center w-full'>
<ol className="justify-center md:w-fit md:flex    ">
    <li className="relative mb-6 md:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="md:place-content-center mt-3 sm:pr-8">
            <h3 className="text-lg mt-3 font-semibold text-white-900 dark:text-white">Brgy Santa Lucia St, Poblacion, Koronadal City, 9506 South Cotabato</h3>
            <time className="block mb-2 text-base font-normal leading-none text-purple-400 dark:text-purple-500">S.Y 2019-2023</time>
            <p className="text-xl font-normal text-blue-500 dark:text-blue-400">STI College Korondal</p>
            <img className=" md:flex sm:justify-center a_img h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="./img/college1.png" alt="image description"/>
        </div>
    </li>
    
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-white-900 dark:text-white">Brgy Santa Lucia St, Poblacion, Koronadal City, 9506 South Cotabato</h3>
            <time className="block mb-2 text-base font-normal leading-none text-purple-400 dark:text-purple-500">S.Y 2017-2019</time>
            <p className="text-xl font-normal text-blue-500 dark:text-blue-400">STI College Korondal</p>
            <img className="a_img h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="./img/shs.jpg" alt="image description"/>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-white-900 dark:text-white">FRXQ+WCR, Doctor Jose Rizal Street, Poblacion, Koronadal City, South Cotabato</h3>
            <time className="block mb-2 text-base font-normal leading-none text-purple-400 dark:text-purple-500">S.Y 2013-2017</time>
            <p className="text-xl font-normal text-blue-500 dark:text-blue-400">KNCHS - Koronadal National Comprehensive High School</p>
            
<div role="status" className="a_img space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700" style={{height:385,width:550}}>
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <span className="sr-only">Loading...</span>
</div>

        </div>
    </li>
</ol>
</div>
<div className='flex justify-center mt-20 pb-5'>
    <h1 className='text-4xl text-violet-600 pr-3'>Skills</h1><h1 className='text-4xl text-purple-600 pr-3'> &</h1><h1 className='text-4xl text-blue-600'>Experience</h1>
</div>
<h1 className='text-3xl mt-5 flex justify-center text-pink-300 pr-3'>Front-End</h1>
  <div className="flex justify-center slideshow-container">
        <div className="slideshow-wrapper">
        <img className='slideshow-item text-orange-500' src='./icons/html-5.svg'/>
        <img className='slideshow-item' src='./icons/css-3.svg'/>
        <img className='slideshow-item' src='./icons/bootstrap.svg'/>
        <img className='slideshow-item' src='./icons/tailwindcss.svg'/>
        <img className='slideshow-item' src='./icons/Flowbite.svg'/>
        <img className='slideshow-item' src='./icons/react.svg'/>
        </div>
    </div>
    <h1 className='text-3xl mt-5 flex justify-center text-yellow-100 pr-3'>Back-End</h1>
  <div className="flex justify-center slideshow-container">
        <div className="slideshow-wrapper">
        <img className='slideshow-item' src='./icons/csharp.svg'/>
        <img className='slideshow-item' src='./icons/java.svg'/>
        <img className='slideshow-item' src='./icons/javascript.svg'/>
        <img className='slideshow-item' src='./icons/mysql.svg'/>
        <img className='slideshow-item' src='./icons/next-js.svg'/>
        </div>
    </div>
</div>
{/* project div */}

<div className='flex justify-center'>
<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full bg-cover bg-center md:h-full md:w-48" src="./img/p1.png" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">Web-Based Market Stall Rental Collection Management System with SMS Notification for Mallengke of Municipality of Surallah
        </div>
      <p className="mt-2 text-slate-500">The Market Stall Rental Collection Management System is a web-based software that allows users to do their usual tasks digitally, such as submitting applications, approving lessee, recording information, and other transactions.</p>
    </div>
  </div>
    <img className='w-auto h-fit' src='./img/p2.png'/>
    <img className='w-auto h-fit' src='./img/p3.png'/>
</div>
</div>

{/* contact div */}
<div className='mt-20 pb-20'>
<h1 className='flex justify-center text-5xl pb-8'>Contact</h1> 
<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
  <div className="md:inline">
  <img className="h-80 w-full flex justify-center object-cover" src="/img/prof.png" alt="Modern building architecture"/>
      <a href="#" className="z-50 block mt-1 text-lg leading-tight font-medium text-black hover:underline flex justify-center">yassermagelna.gmail.com</a>
      <p className="z-50 block mt-1 text-lg leading-tight font-medium text-black pb-2 flex justify-center">09654508419</p>
      <div className="flex justify-center uppercase tracking-wide text-2xl text-indigo-500 font-semibold">Social Links</div>
      <div className="flex justify-center pb-4">
<a href='https://discord.gg/v6GKxxhxDT'><img className="h-auto w-10 rounded-lg" src="./icons/sociallinks/discord.png" alt="image description"/></a>
<a href='https://github.com/ExerSolution'><img className="h-auto w-10 rounded-lg" src="./icons/sociallinks/github.png" alt="image description"/></a>
<a href='https://www.twitch.tv/exsyaseru21_tv'><img className="h-auto w-10 rounded-lg" src="./icons/sociallinks/twitch.png" alt="image description"/></a>
<a href='https://www.youtube.com/@exersolution'><img className="h-auto w-10 rounded-lg" src="./icons/sociallinks/youtube.png" alt="image description"/></a>
<a href='https://www.facebook.com/ExerSolution/'><img className="h-auto w-10 rounded-lg" src="./icons/sociallinks/facebook.png" alt="image description"/></a>
<a href='https://www.instagram.com/exerssolution/'><img className="h-auto w-10 rounded-lg" src="./icons/sociallinks/instagram.png" alt="image description"/></a>
<a href='https://twitter.com/Yaseru211'><img className="h-auto w-10 rounded-lg" src="./icons/sociallinks/twitter.png" alt="image description"/></a>

</div> 
  </div>
</div>

</div>
    </main>
  )
}


