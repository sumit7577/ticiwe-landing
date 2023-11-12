import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-5xl font-black leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Unlock The Power Of Maps</h1>
            <div className="mx-auto">
              <p className="text-5xl md:text-5xl font-extralight text-black-800 mb-8 light" data-aos="zoom-y-out" data-aos-delay="150">Discover, Explore, and Create on <span className='font-black text-5xl md:text-5xl bg-clip-text text-transparent bg-black'>Ticiwe</span></p>
              <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <a className="btn text-white bg-main-100 hover:bg-violet-900 w-full mb-4 sm:w-auto sm:mb-0 rounded-full" href="#0">Get Started</a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail" />

        </div>

      </div>
    </section>
  )
}