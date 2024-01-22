import React from 'react';

const ContactForm = () => {
  return (
    <div className="relative flex  flex-col items-top justify-center rounded-md bg-[#14131a]sm:items-center sm:pt-0" style = {{height: '375px'}}>
      <div className="max-w-12xl  contactform">
        <div className="mt-8 overflow-hidden">
          <div className="grid" >
            <div className="p-6  mr-2 rounded-md  sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-8b8a91">
                Get in touch
              </h1>

              <div className="flex items-center mt-8  dark:text-8b8a91">
                {/* Address */}
                <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M12 2C7.029 2 3 6.029 3 11c0 5.25 9 13 9 13s9-7.75 9-13c0-4.971-4.029-9-9-9zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
    </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  IIT Dhanbad, Jharkhand, India
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                {/* Phone */}
                <svg class="h-5 w-5 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"/>
</svg>

                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +91 7597815122
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                {/* Email */}
                <svg class="h-5 w-5 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
</svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  <a href="mailto:raghvanpareek@gmail.com">
                    raghvanpareek@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
