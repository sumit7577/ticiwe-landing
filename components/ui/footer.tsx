import { HeroIcon } from './hero-icon'
import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto px-4 sm:px-6  bg-gray-400">
        <div className='flex items-center justify-center py-10'>
          <h1 className='font-sans font-normal text-4xl text-white'>Start exploring with <span className='font-bold'>Ticiwe</span></h1>
        </div>

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 justify-items-center">


          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-white font-bold mb-2 font-sans">Find Us</h6>
            <ul className="flex mb-4 md:mb-0">
              <li>
                <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </a>
              </li>

              <li className='ml-2'>
                <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-white font-bold mb-2 font-sans">Authors</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-white font-light text-sm hover:text-gray-900 transition duration-150 ease-in-out font-sans">Mykhailova H.</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-white font-light text-sm hover:text-gray-900 transition duration-150 ease-in-out font-sans">Gubacheck K.</a>
              </li>

            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-white font-bold mb-2 font-sans">Sitemap</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-white font-light text-sm hover:text-gray-900 transition duration-150 ease-in-out font-sans">Main menu</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-white font-light text-sm hover:text-gray-900 transition duration-150 ease-in-out font-sans">Depository</a>
              </li>

            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-white font-bold mb-2 font-sans">About Us</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-white font-light text-sm hover:text-gray-900 transition duration-150 ease-in-out font-sans">Terms of Use</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-white font-light text-sm hover:text-gray-900 transition duration-150 ease-in-out font-sans">Cookies</a>
              </li>

            </ul>
          </div>

        </div>

        <div className='flex flex-col items-center justify-center py-8'>
          <p className='font-bold font-sans text-white'>English (United States)</p>
        </div>

      </div>
    </footer>
  )
}
