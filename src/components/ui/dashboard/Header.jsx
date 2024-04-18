import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b border-gray-300 text-sm py-2.5 sm:py-4 lg:ps-64">
        <nav className="flex w-full px-4 mx-auto basis-full sm:px-6 md:px-8" aria-label="Global">
          <div className="me-5 lg:me-0 lg:hidden">
            <div className="flex-none text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600" aria-label="Brand">
              SIPTATIF
            </div>
          </div>
          <div className="flex items-center justify-end w-full sm:w-auto ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="flex flex-row items-end justify-end gap-2">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-offcanvas="#hs-offcanvas-right"
              >
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </button>

              <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <Image className="inline-block size-[38px] rounded-full ring-2 ring-white" src="/profile.png" width={250} height={250} alt="Image's Profile" />
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2" aria-labelledby="hs-dropdown-with-header">
                  <div className="px-5 py-3 -m-2 bg-gray-200 rounded-t-lg">
                    <p className="text-sm text-gray-500">Signed in as</p>
                    <p className="text-sm font-medium text-gray-800">muhzakierbaisyas@gmail.com</p>
                  </div>
                  <div className="py-2 mt-2 first:pt-0 last:pb-0">
                    <button type="button" className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" data-hs-overlay="#hs-sign-out-alert">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="15" r="3" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                        <path d="m21.7 16.4-.9-.3" />
                        <path d="m15.2 13.9-.9-.3" />
                        <path d="m16.6 18.7.3-.9" />
                        <path d="m19.1 12.2.3-.9" />
                        <path d="m19.6 18.7-.4-1" />
                        <path d="m16.8 12.3-.4-1" />
                        <path d="m14.3 16.6 1-.4" />
                        <path d="m20.7 13.8 1-.4" />
                      </svg>
                      Log out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Modal */}
      <div id="hs-sign-out-alert" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div className="m-3 mt-0 transition-all ease-out opacity-0 hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:max-w-lg sm:w-full sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg pointer-events-auto rounded-xl">
            <div className="absolute top-2 end-2">
              <button
                type="button"
                className="flex items-center justify-center text-sm font-semibold text-gray-800 border border-transparent rounded-lg size-7 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-sign-out-alert"
              >
                <span className="sr-only">Close</span>
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 overflow-y-auto text-center sm:p-10">
              {/* Icon */}
              <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500">
                <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </span>
              {/* End Icon */}

              <h3 className="mb-2 text-2xl font-bold text-gray-800">Sign out</h3>
              <p className="text-gray-500">Are you sure you would like to sign out of your SIPTATIF account?</p>

              <div className="flex justify-center mt-6 gap-x-4">
                <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Sign out
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white border border-gray-200 rounded-lg gap-x-2 bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tr disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-overlay="#hs-sign-out-alert"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
