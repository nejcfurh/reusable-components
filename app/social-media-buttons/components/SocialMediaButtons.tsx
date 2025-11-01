import Link from 'next/link';

const SocialMediaButtons = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-6 my-auto scale-200">
      {/* INSTAGRAM */}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        href="https://www.instagram.com/nejcfurh/"
        className="w-12 h-12 border-none bg-transparent rounded-full outline-2 outline-white cursor-pointer transition-all grid place-items-center hover:outline-offset-3 hover:transition-all duration-300 first:hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-instagram"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </Link>
      {/* X/TWITTER */}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X/Twitter"
        href="https://twitter.com/nejcfurh"
        className="w-12 h-12 border-none bg-transparent rounded-full outline-2 outline-white cursor-pointer transition-all grid place-items-center hover:outline-offset-3 hover:transition-all duration-300 nth-2:hover:bg-white nth-2:hover:[&_svg]:stroke-(--x)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      </Link>
      {/* EMAIL */}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        href="mailto:nejc.furh7@gmail.com"
        className="w-12 h-12 border-none bg-transparent rounded-full outline-2 outline-white cursor-pointer transition-all grid place-items-center hover:outline-offset-3 hover:transition-all duration-300 nth-3:hover:bg-(--email)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-mail"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </Link>
      {/* LINKEDIN */}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        href="https://si.linkedin.com/in/nejcfurh"
        className="w-12 h-12 border-none bg-transparent rounded-full outline-2 outline-white cursor-pointer transition-all grid place-items-center hover:outline-offset-3 hover:transition-all duration-300 nth-4:hover:bg-(--linkedin)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </Link>
      {/* FACEBOOK */}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        href="https://www.facebook.com/nejcfurh"
        className="w-12 h-12 border-none bg-transparent rounded-full outline-2 outline-white cursor-pointer transition-all grid place-items-center hover:outline-offset-3 hover:transition-all duration-300 nth-5:hover:bg-(--facebook)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="none"
          stroke="white"
          strokeWidth="1.2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H8.015V12h2.423V9.607c0-2.412 1.437-3.737 3.638-3.737 1.056 0 2.165.195 2.165.195v2.385h-1.219c-1.204 0-1.596.746-1.596 1.512V12h2.713l-.434 2.89h-2.28v6.988C18.343 21.128 22 16.991 22 12 22 6.477 17.523 2 12 2z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default SocialMediaButtons;
