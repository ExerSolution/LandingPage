'use client';
import { Baloo_2, Cairo_Play } from 'next/font/google'
import { Button, Card, Navbar } from 'flowbite-react'
import { Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const adventpro = Cairo_Play({ subsets: ['latin'], weight:['800'] })

export default function Landing() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };
    const [openModal, setOpenModal] = useState<string | undefined>();
      const [email, setEmail] = useState("");
      const props = { openModal, setOpenModal, email, setEmail };

      
  return (
    <main className={`md:w-auto ${adventpro.className}`} style={{ backgroundColor: '#111827' }}>
     <Navbar    
       fluid
       className='flex justify-center border-b-4 bg-white border-rose-500'
       style={{ height: 60 }}
     >
      <Navbar.Brand className='lg:hidden md:hidden absolute left-5 top-0 h-16 w-16'>
       <span className=" flex justify-center text-gray-900 whitespace-nowrap text-xl lg:text-4xl md:text-base font-semibold dark:text-white">
          ExSYaseru21_Tv
        </span>
      </Navbar.Brand>
      <div className="absolute mt-2 inset-y-0 right-0 md:order-2" onClick={handleToggleClick}>
        <Navbar.Toggle className={`${isActive ? 'active-toggle' : ''}`} />
      </div>
      <Navbar.Collapse className='lg:w-96 colls'>
          <Navbar.Link href="#" className="ho block mt-1 lg:text-2xl font-semibold pl-3 pr-4 bg-white rounded md:bg-transparent md: text-base text-blue-700 md:p-0 md:dark:text-blue-500 " aria-current="page">Home</Navbar.Link>
          <Navbar.Link href="#about" className="ho block mt-1 lg:text-2xl font-semibold pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-base dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Navbar.Link>
          <Image width={500} height={300} className="bg-white w-24 h-24 rounded-full border-b-4 border-rose-500 hidden-on-small-screen" style={{marginTop:-23}} src="/img/logo.png" alt="image description" />
          <Navbar.Link href="#project" className="ho block mt-1 lg:text-2xl font-semibold pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-base dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Project</Navbar.Link>
          <Navbar.Link href="#contact" className="ho block mt-1 lg:text-2xl font-semibold pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-base dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Navbar.Link>     
      </Navbar.Collapse>
    </Navbar>
    {/* home div */}
    <div id='home' className="justify-center text-center h-100">
  <div className='mt-80 flex justify-center'>
<h1 className=" font-extrabold text-yellow-200 lg:text-7xl text-5xl dark:text-white">– Hello – </h1>
<h2 className='lg:text-base text-sm'>PROGRAMMER</h2>
</div>
<div className='mt-70'>
  <p className='ml-5 lg:text-5xl text-3xl pt-20 pb-20'>I&apos;m Yasser S. Magelna</p>
  </div> 
  <div className='pb-20' style={{paddingBottom:'150px'}}> 
  <Link href='#about' className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
  <span className="text-2xl relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      About
  </span>
    <svg className="w-6 h-4 ml-2 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</Link>
<button onClick={() => props.setOpenModal('form-elements')} data-modal-target="authentication-modal"  data-modal-toggle="authentication-modal" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group border border-gradient-2 bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
  <span className="relative text-2xl px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 bg-white rounded-md group-hover:bg-opacity-0">
      Login
  </span>
</button>
{/* modal div */}

      <Modal className={'${adventpro.className}'} show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="font-semibold flex justify-center text-3xl text-gray-900 dark:text-white">Login</h3>
            <div className="relative">
    <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer focus:border-2" placeholder=" " />
    <label htmlFor="floating_outlined" className=" font-semibold absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
</div>
<div className="relative">
    <input type="password" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer focus:border-2" placeholder=" " />
    <label htmlFor="floating_outlined" className=" font-semibold absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
</div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                <Checkbox id="remember" className='border-1 border-gray-500' />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              {/* <a href="/modal" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a> */}
            </div>
            <div className="w-full flex justify-center">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <Link href="/auth/signup" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>

</div>  
</div>
{/* about div */}
<div id='about' className='w-30' style={{paddingBottom:100}}>
  <div className="flex items-center justify-center" style={{marginTop:60}}>
    <hr className="lg:w-24 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" style={{marginTop:-70}}/>
    <h1 className='text-5xl pl-4 pr-4 mb-20'> Educational Background  </h1>
    <hr className="lg:w-24 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" style={{marginTop:-70}}/>
</div>
<div className='flex justify-center md:max-w-8xl lg:flex md:inline-block'>
<ol className="justify-center md:w-fit md:flex">
    <li className="relative mb-6 md:mb-0 mx-4">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3">
            <h3 className="text-lg mt-3 font-semibold text-white-900 dark:text-white">Brgy Santa Lucia St, Poblacion, Koronadal City, 9506 South Cotabato</h3>
            <time className="block mb-2 text-base font-normal leading-none text-purple-400 dark:text-purple-500">S.Y 2019-2023</time>
            <p className="text-xl font-normal text-blue-500 dark:text-blue-400">STI College Korondal</p>
            <Image width={500} height={300} className="a_img h-auto max-w-md mt-2 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="/img/college1.png" alt="image description"/>
        </div>
    </li>
    
    <li className="relative mb-6 sm:mb-0 mx-4">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3">
            <h3 className="text-lg font-semibold text-white-900 dark:text-white">Brgy Santa Lucia St, Poblacion, Koronadal City, 9506 South Cotabato</h3>
            <time className="block mb-2 text-base font-normal leading-none text-purple-400 dark:text-purple-500">S.Y 2017-2019</time>
            <p className="text-xl font-normal text-blue-500 dark:text-blue-400">STI College Korondal</p>
            <Image width={500} height={300} className="a_img h-auto max-w-md mt-2 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="/img/shs.jpg" alt="image description"/> 
            </div>
    </li>
    <li className="relative mb-6 sm:mb-0 mx-4">
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
            
<div role="status" className="a_img mt-2 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div className="flex items-center justify-center max-w-md bg-gray-300 rounded sm:w-96 dark:bg-gray-700" style={{height:337,width:570}}>
        <svg className="w-20 h-20 text-gray-200 rounded-lg dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
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
  <div className="flex justify-center slideshow-container md:max-w-3xl">
        <div className="slideshow-wrapper">
        <Image width={500} height={300} className='slideshow-item text-orange-500' src='../icons/html-5.svg' alt={'htmlicon'}/>
        <Image width={500} height={300} className='slideshow-item' src='../icons/css-3.svg' alt={'cssicon'}/>
        <Image width={500} height={300} className='slideshow-item' src='../icons/bootstrap.svg' alt={'bootstrapicon'}/>
        <Image width={500} height={300} className='slideshow-item' src='../icons/tailwindcss.svg' alt={'tailwindicon'}/>
        <Image width={500} height={300} className='slideshow-item' src='../icons/Flowbite.svg' alt={'flowbiteicon'}/>
        <Image width={500} height={300} className='slideshow-item' src='../icons/react.svg' alt={'reacticon'}/>
        </div>
    </div>
    <h1 className='text-3xl mt-5 flex justify-center text-yellow-100 pr-3'>Back-End</h1>
  <div className="flex justify-center slideshow-container md:max-w-3xl">
        <div className="slideshow-wrapper">
        <Image width={500} height={300} className='slideshow-item' src='../icons/csharp.svg' alt={'csharpicon'}/>
        <Image width={500} height={300} className='slideshow-item' src='../icons/java.svg' alt={'javaicon'}/>
        <Image width={500} height={300} className='slideshow-item' src='../icons/javascript.svg' alt={'javascripticon'}/>
        <Image width={500} height={300} className='slideshow-item' src='../icons/mysql.svg' alt={'mysqlicon'}/>
        <Image width={500} height={300} className='slideshow-item' src='../icons/next-js.svg' alt={'nextjsicon'}/>
        </div>
    </div>
</div>
{/* project div */}
<h1 id='project' className='flex justify-center text-5xl pb-8'>Project</h1> 
<div className='flex justify-center'>
<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
  <div className="md:flex">
      <Image width={500} height={300} className="h-48 w-full bg-cover bg-center md:h-full md:w-48" src="/img/p1.png" alt="Modern building architecture"/>
    <div className="p-8">
      <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">Web-Based Market Stall Rental Collection Management System with SMS Notification for Mallengke of Municipality of Surallah
        </div>
      <p className="mt-2 text-slate-500">The Market Stall Rental Collection Management System is a web-based software that allows users to do their usual tasks digitally, such as submitting applications, approving lessee, recording information, and other transactions.</p>
    </div>  
  </div>  
    <Image width={900} height={300} className='w-auto h-auto' src='/img/p2.png' alt={''}/>
    <Image width={900} height={300} className='w-auto h-fit' src='/img/p3.png' alt={''}/>
</div>
</div>

{/* contact div */}
<div id='contact' className='mt-20 pb-20'>
<h1 className='flex justify-center text-5xl pb-8'>Contact</h1> 
<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
  <div className="md:inline">
  <Image width={500} height={300} className="h-80 w-full flex justify-center object-cover" src="/img/prof.png" alt="Modern building architecture"/>
      <Link href="#" className="z-50 mt-1 text-lg leading-tight font-medium text-black hover:underline flex justify-center">yassermagelna.gmail.com</Link>
      <p className="z-50 mt-1 text-lg leading-tight font-medium text-black pb-2 flex justify-center">09654508419</p>
      <div className="flex justify-center uppercase tracking-wide text-2xl text-indigo-500 font-semibold">Social Links</div>
      <div className="flex justify-center pb-4">
<Link href='https://discord.gg/v6GKxxhxDT'><Image width={500} height={300} className="h-auto w-10 rounded-lg" src="/icons/sociallinks/discord.png" alt="image description"/></Link>
<Link href='https://github.com/ExerSolution'><Image width={500} height={300} className="h-auto w-10 rounded-lg" src="/icons/sociallinks/github.png" alt="image description"/></Link>
<Link href='https://www.twitch.tv/exsyaseru21_tv'><Image width={500} height={300} className="h-auto w-10 rounded-lg" src="/icons/sociallinks/twitch.png" alt="image description"/></Link>
<Link href='https://www.youtube.com/@exsyaseru21_tv'><Image width={500} height={300} className="h-auto w-10 rounded-lg" src="/icons/sociallinks/youtube.png" alt="image description"/></Link>
<Link href='https://www.facebook.com/ExerSolution/'><Image width={500} height={300} className="h-auto w-10 rounded-lg" src="/icons/sociallinks/facebook.png" alt="image description"/></Link>
<Link href='https://www.instagram.com/exerssolution/'><Image width={500} height={300} className="h-auto w-10 rounded-lg" src="/icons/sociallinks/instagram.png" alt="image description"/></Link>
<Link href='https://twitter.com/Yaseru211'><Image width={500} height={300} className="h-auto w-10 rounded-lg" src="/icons/sociallinks/twitter.png" alt="image description"/></Link>

</div> 
  </div>
</div>

</div>
    </main>
  )
}


