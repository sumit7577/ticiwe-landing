export const metadata = {
  title: 'Sign Up - Simple',
  description: 'Page description',
}

import Link from 'next/link'

export default function SignUp() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Form */}
          <div className="max-w-lg mx-auto border-2 border-gray-400 rounded-lg p-16">
            <div className='flex flex-col gap-2 justify-items-center items-center mb-4'>
              <h1 className='font-black text-main-100 text-xl'>Create an account</h1>
              <h2 className='font-normal text-gray-900 text-xs'>Please enter general information about yourself</h2>
            </div>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4 items-center">
                <div className="w-full px-3">
                  <label className="block text-gray-600 text-xs font-normal mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input w-full border-0 border-b-2 text-gray-800 font-normal text-xs" placeholder="Enter your email here" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-600 text-xs font-normal mb-1" htmlFor="password">Password</label>
                    <div className='flex items-center gap-0'>
                      <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"></svg>
                      <h2 className='text-xs text-gray-600'>Hide</h2>
                    </div>

                  </div>
                  <input id="password" type="password" className="form-input w-full border-0 border-b-2 text-gray-800 font-normal text-xs" placeholder="Enter your password here" required />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-600 text-xs font-normal mb-1" htmlFor="Repeatpassword">Repeat Password</label>
                    <div className='flex items-center gap-0'>
                      <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"></svg>
                      <h2 className='text-xs text-gray-600'>Hide</h2>
                    </div>

                  </div>
                  <input id="Repeatpassword" type="password" className="form-input w-full border-0 border-b-2 text-gray-800 font-normal text-xs" placeholder="Enter your password here" required />
                </div>
              </div>

              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full px-3 flex gap-2'>
                  <div className="flex justify-between flex-col basis-1/3">
                    <label className="block text-gray-600 text-xs font-normal mb-1" htmlFor="code">Phone number</label>
                    <input id="code" type='number' className="form-input w-full border-0 border-b-2 text-gray-800 font-normal text-xs" placeholder="Code" required />
                  </div>

                  <div className='flex justify-between flex-col basis-1/1'>
                    <div />
                    <input id="phone" type="text" className="form-input w-full border-0 border-b-2 text-gray-800 font-normal text-xs" placeholder="Number" required />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2 text-xs font-normal text-black">By creating an account,I agree to our <a href='/terms' className='text-main-100 underline text-xs'>Terms of Use</a> and
                        <a href='/policy' className='text-main-100 underline text-xs'> Privacy Policy</a></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mt-4 px-10">
                <div className="w-full px-3">
                  <button className="btn text-white bg-main-100 rounded-full hover:bg-blue-700 w-full md:text-md sm:text-md">Sign up</button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-2 px-10">
              <div className="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-600 italic text-xs">Or</div>
              <div className="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
            </div>
            <form>
              <div className="flex flex-wrap -mx-3 mb-3 px-10">
                <div className="w-full px-3">
                  <button className="btn px-0 text-main-100 font-bold bg-white hover:bg-gray-200 border-4 border-main-100 rounded-full w-full relative flex items-center">
                    <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"></svg>
                    <span className="flex-auto pl-16 pr-8 -ml-16 ">Continue with Google</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 px-10">
                <div className="w-full px-3">
                  <button className="btn px-0 text-main-100 font-bold bg-white hover:bg-gray-200 border-4 border-main-100 rounded-full w-full relative flex items-center">
                    <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"></svg>
                    <span className="flex-auto pl-16 pr-8 -ml-16">Continue with Apple</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div >
      </div >
    </section >
  )
}
