import React, { useState } from 'react';
import './Navbar.css';  // Import your CSS file

const Navbar = () => {
  const [sideBar, setSideBar] = useState(true);

  const handleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div>
      <header class="header">
        <div class="navContainer flex p-5">
            <div class="flex space-x-2 justify-start">        
                <div class="bg-btnHighlight rounded-full"></div>
                <div class="bg-btnHighlight rounded-full"></div>
            </div>

        <button class="navButton w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 inline-flex items-center">
  <span>Contact Me</span>
  <svg class="h-6 w-6 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ verticalAlign: 'middle' }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
  </svg>
</button>

        
          <nav>
            
          <ul class={`mainNav flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5 ${sideBar ? 'open' : ''}` } id="style-2">
  <li>
    <a class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-lg gap-4 p-4" href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-home">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg> Home
    </a>
  </li>
  <div class="mt-5 text-lg mb-3">Socials</div>
  <li>
    <a target="_blank" class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-lg gap-4 p-4" href="https://www.instagram.com/raghvanpareek/">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5179e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-instagram">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg> Instagram
    </a>
  </li>
  <li>
    <a target="_blank" class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-lg gap-4 p-4" href="https://twitter.com/i_karmayogi">
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
        <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
      </svg>
      Twitter
    </a>
  </li>
  <li>
    <a target="_blank" class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-lg gap-4 p-4" href="https://www.youtube.com/channel/UCk92K-CJ7nEsVq5jW6pTc0w">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-youtube">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
        <path d="m10 15 5-3-5-3z"></path>
      </svg> Youtube
    </a>
  </li>
  <li>
    <a target="_blank" class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-lg gap-4 p-4" href="https://www.linkedin.com/in/raghvanpareek/">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0277b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg> Linkedin
    </a>
  </li>
  <li>
  <a
  target="_blank"
  class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-lg gap-4 p-4"
  href="https://github.com/I-karmayogi"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2a9d8f"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
  Github
</a>
  </li>
</ul>

          </nav>
          <button onClick={handleSidebar} class={`navToggle ${sideBar ? 'open' : ''}`}>
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>
    </div>
  );
};

export default Navbar;