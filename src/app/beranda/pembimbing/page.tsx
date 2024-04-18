import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIPTATIF - Daftar Pembimbing TA",
};

export default function Pembimbing() {
  return (
<div className="w-full px-4 pt-10 sm:px-6 md:px-8 lg:ps-72">
      {/* Table Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-6 mx-auto">
        {/*  Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
                {/*  Header */}
                <div className="grid gap-3 px-6 py-4 border-b border-gray-200 md:flex md:justify-between md:items-center">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Daftar Pembimbing TA</h2>
                    <p className="text-sm text-gray-600">Dosen yang tersedia sebagai pembimbing dan kuota mahasiswa.</p>
                  </div>

                  {/*  Search */}
                  <div className="sm:col-span-1">
                    <label htmlFor="hs-as-table-product-review-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-as-table-product-review-search"
                        name="hs-as-table-product-review-search"
                        className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg ps-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Search"
                      />
                      <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-4">
                        <svg
                          className="flex-shrink-0 text-gray-400 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  Table */}
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">NIDN</span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">Nama Dosen</span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">Keahlian</span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">Kuota</span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">19624123123</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-semibold text-gray-800">Dr. Fulan, M. Kom.</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-semibold text-gray-800">- Data Science</span>
                          <span className="block text-sm text-gray-500">- Machine Learning</span>
                          <span className="block text-sm text-gray-500">- Natural Language Processing</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">2/5</span>
                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="flex flex-col justify-center overflow-hidden bg-gray-800" aria-label="progress bar" style={{ width: "40%" }}></div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            Tersedia
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">19624231231</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-semibold text-gray-800">Dr. Fulanah, M. Kom.</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-semibold text-gray-800">- Artificial Intelligence</span>
                          <span className="block text-sm text-gray-500">- Computer Vision</span>
                          <span className="block text-sm text-gray-500">- Cloud Computing</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">5/5</span>
                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="flex flex-col justify-center overflow-hidden bg-gray-800" aria-label="progress bar" style={{ width: "100%" }}></div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>{" "}
                            </svg>
                            Penuh
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">19624321321</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-semibold text-gray-800">Dr. Fulan Fergi, M. Kom.</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-semibold text-gray-800">- DevOps</span>
                          <span className="block text-sm text-gray-500">- Web Development</span>
                          <span className="block text-sm text-gray-500">- Mobile Development</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">3/5</span>
                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="flex flex-col justify-center overflow-hidden bg-gray-800" aria-label="progress bar" style={{ width: "60%" }}></div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            Tersedia
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">19624213213</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-semibold text-gray-800">Dr. Fergi Fulan, M. Kom.</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-semibold text-gray-800">- Cyber Security</span>
                          <span className="block text-sm text-gray-500">- Cryptography</span>
                          <span className="block text-sm text-gray-500">- Penetration Test</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">1/5</span>
                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="flex flex-col justify-center overflow-hidden bg-gray-800" aria-label="progress bar" style={{ width: "20%" }}></div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            Tersedia
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/*  Footer */}
                <div className="grid gap-3 px-6 py-4 border-t border-gray-200md:flex md:justify-between md:items-center">
                  <div>
                    <p className="text-xs font-semibold text-indigo-600 decoration-2 hover:underline">4 results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
