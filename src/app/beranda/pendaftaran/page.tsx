import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIPTATIF - Pendaftaran TA Mahasiswa",
};

export default function Pendaftaran() {
  return (
    <div className="w-full px-4 pt-10 sm:px-6 md:px-8 lg:ps-72">
      {/* Table Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-6 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
                {/* Header */}
                <div className="grid gap-3 px-6 py-4 border-b border-gray-200 md:flex md:justify-between md:items-center">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Riwayat Pendaftaran TA</h2>
                    <p className="text-sm text-gray-600">
                      Buat pendaftaran baru dengan mengklik tombol <span className="inline-flex items-center gap-x-1.5 text-indigo-600 decoration-2 hover:underline font-medium">Create.</span>
                    </p>
                  </div>

                  {/* Create Button */}
                  <div>
                    <div className="inline-flex gap-x-2">
                      <Link
                        className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-lg gap-x-2 bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tr disabled:opacity-50 disabled:pointer-events-none"
                        href="/beranda/pendaftaran/form"
                      >
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        Create
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">Tanggal</span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">Judul Tugas Akhir</span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">Kategori</span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">Status</span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-end"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">11 April 2024</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">Analisis dan Implementasi Rancangan Siptatif</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">Laporan</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>{" "}
                            </svg>
                            Ditolak
                          </span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-1.5">
                          <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                            <button
                              id="hs-table-dropdown-1"
                              type="button"
                              className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                            >
                              <svg
                                className="flex-shrink-0 size-4"
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
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="19" cy="12" r="1" />
                                <circle cx="5" cy="12" r="1" />
                              </svg>
                            </button>
                            <div
                              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-10 bg-white shadow-2xl rounded-lg p-2 mt-2"
                              aria-labelledby="hs-table-dropdown-1"
                            >
                              <div className="py-2 first:pt-0 last:pb-0">
                                <Link className="flex items-center px-3 py-2 text-sm text-red-600 rounded-lg gap-x-3 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-600" href="#">
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">12 April 2024</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">Analisis dan Implementasi Rancangan Siptatif</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">Laporan</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            Diterima
                          </span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-1.5">
                          <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                            <button
                              id="hs-table-dropdown-1"
                              type="button"
                              className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                            >
                              <svg
                                className="flex-shrink-0 size-4"
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
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="19" cy="12" r="1" />
                                <circle cx="5" cy="12" r="1" />
                              </svg>
                            </button>
                            <div
                              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-10 bg-white shadow-2xl rounded-lg p-2 mt-2"
                              aria-labelledby="hs-table-dropdown-1"
                            >
                              <div className="py-2 first:pt-0 last:pb-0">
                                <Link className="flex items-center px-3 py-2 text-sm text-red-600 rounded-lg gap-x-3 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-600" href="#">
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">16 April 2024</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">Pengembangan Aplikasi Manajemen Proyek Metode Agile</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">Laporan</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>{" "}
                            </svg>
                            Menunggu
                          </span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-1.5">
                          <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                            <button
                              id="hs-table-dropdown-1"
                              type="button"
                              className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                            >
                              <svg
                                className="flex-shrink-0 size-4"
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
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="19" cy="12" r="1" />
                                <circle cx="5" cy="12" r="1" />
                              </svg>
                            </button>
                            <div
                              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-10 bg-white shadow-2xl rounded-lg p-2 mt-2"
                              aria-labelledby="hs-table-dropdown-1"
                            >
                              <div className="py-2 first:pt-0 last:pb-0">
                                <Link className="flex items-center px-3 py-2 text-sm text-red-600 rounded-lg gap-x-3 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-600" href="#">
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">20 April 2024</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">Pengembangan Aplikasi Manajemen Proyek Metode Agile</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-600">Laporan</span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            Diterima
                          </span>
                        </div>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-1.5">
                          <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                            <button
                              id="hs-table-dropdown-1"
                              type="button"
                              className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                            >
                              <svg
                                className="flex-shrink-0 size-4"
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
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="19" cy="12" r="1" />
                                <circle cx="5" cy="12" r="1" />
                              </svg>
                            </button>
                            <div
                              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-10 bg-white shadow-2xl rounded-lg p-2 mt-2"
                              aria-labelledby="hs-table-dropdown-1"
                            >
                              <div className="py-2 first:pt-0 last:pb-0">
                                <Link className="flex items-center px-3 py-2 text-sm text-red-600 rounded-lg gap-x-3 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-600" href="#">
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Footer */}
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
