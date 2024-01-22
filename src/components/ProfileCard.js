import React from 'react';
import profile from '../images/profile.jpeg';
import './ProfileCard.css';

const ProfileCard = () => {


  return (
    <div class="relative flex rounded-lg w-full md:w-auto mt-5 md:ml-5 bg-[url('./images/cover.jpeg')] bg-no-repeat bg-cover">
    <div class="absolute inset-0 w-full h-full bg-transparent pointer-events-none"></div>
    <div class="flex justify-center md:rounded-md overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10">
      <div>
        <img
          alt="Raghvan Pareek"
          loading="lazy"
          width="150"
          height="150"
          decoding="async"
          data-nimg="1"
          className="object-cover border-4 border-white rounded-full shadow-md"
          style={{ color: 'transparent' }}
          // srcSet="./images/cover.jpeg, ./images/cover.jpeg"
          src={profile}
          onError={(e) => {
            console.error("Image failed to load:", e);
          }}
        />
      </div>
      <div class="flex md:flex-1 flex-col justify-center gap-4">
        <div class="flex justify-between items-center gap-5">
          <div class="text-3xl flex flex-col font-bold text-white">
            Raghvan Pareek
            <div class="text-sm font-thin flex justify-between text-white items-center">
              @i_karmayogi
              <a className="block md:hidden cover-image" target="blank" href="https://instagram.com/raghvanpareek">
                <button class="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <a class="hidden md:block ml-300" target="_blank" href="https://instagram.com/raghvanpareek">
            <button 
              class="h-max w-max  flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-zinc-800 text-white font-semibold text-xs py-2 px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span class="hidden md:block">Follow me on Instagram</span>
            </button> 
          </a>
        </div>
      </div>
    </div>
  </div>  
  );
};

export default ProfileCard;
