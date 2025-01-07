import React from "react";

const SocialButtons = () => {
  return (
    <div className="flex gap-x-2 justify-center items-center text-3xl">
      {/* Github */}
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        style={{ backgroundColor: "#333" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.806 5.624-5.476 5.922.43.371.824 1.103.824 2.222v3.293c0 .319.192.694.799.576 4.764-1.587 8.198-6.084 8.198-11.383 0-6.627-5.373-12-12-12z" />
        </svg>
      </button>
      {/* Facebook */}
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        style={{ backgroundColor: "#3b5998" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.617-5.373-11.99-12-11.99-6.627 0-12 5.373-12 12 0 5.991 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.468h3.047v-2.644c0-3.019 1.792-4.688 4.533-4.688 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.953.93-1.953 1.879v2.265h3.328l-.532 3.468h-2.796v8.385c5.737-.9 10.125-5.863 10.125-11.854z" />
        </svg>
      </button>
      {/* Google */}
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        style={{ backgroundColor: "#ea4335" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21.805 10.023h-9.771v3.951h5.676c-.429 2.257-2.381 3.903-4.674 3.903-2.665 0-4.836-2.186-4.836-4.885s2.171-4.884 4.836-4.884c1.127 0 2.167.378 2.999 1.096l3.022-2.991c-1.646-1.54-3.774-2.418-6.021-2.418-5.522 0-10 4.486-10 10.002s4.478 10.001 10 10.001c5.322 0 9.85-4.265 9.85-10.002 0-.667-.071-1.329-.195-1.97z" />
        </svg>
      </button>
    </div>
  );
};

export default SocialButtons;
