export function Rating() {
  return (
    <div className="mt-8 sm:mt-12">
      <p className="text-lg font-normal text-white">
        Mais de 3000 trabalhos entregues
      </p>

      <div className="flex items-center mt-3">
        <div className="flex">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
              fill="url(#b)"
            />
            <defs>
              <linearGradient
                id="b"
                x1="3.07813"
                y1="3.8833"
                x2="23.0483"
                y2="6.90161"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="ml-2 text-base font-normal text-white"> 4.1/5 </span>
        <span className="ml-1 text-base font-normal text-gray-500">
          {' '}
          (14k Reviews){' '}
        </span>
      </div>
    </div>
  )
}
