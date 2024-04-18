import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SIPTATIF - Status Pendaftaran TA",
};

export default function Status() {
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
                    <h2 className="text-xl font-bold text-gray-900">Status Pendaftaran TA</h2>
                    <p className="text-sm text-gray-600">Catatan setiap status pendaftaran yang diajukan.</p>
                  </div>
                </div>

                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
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

                      <th scope="col" className="px-6 py-3 text-end">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">Detail</span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-ditolak-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">11 April 2024</span>
                          </span>
                        </button>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-ditolak-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">Analisis dan Implementasi Rancangan Siptatif</span>
                          </span>
                        </button>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-ditolak-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">Laporan</span>
                          </span>
                        </button>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-ditolak-modal">
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>{" "}
                              </svg>
                              Ditolak
                            </span>
                          </span>
                        </button>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-ditolak-modal">
                          <span className="px-6 py-1.5">
                            <span className="inline-flex items-center justify-center gap-2 px-2 py-1 text-sm font-medium text-white align-middle transition-all border border-transparent rounded-full bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tr disabled:opacity-50 disabled:pointer-events-none">
                              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-diterima-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">12 April 2024</span>
                          </span>
                        </button>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-diterima-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">Analisis dan Implementasi Rancangan Siptatif</span>
                          </span>
                        </button>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-diterima-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">Laporan</span>
                          </span>
                        </button>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-diterima-modal">
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Diterima
                            </span>
                          </span>
                        </button>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-diterima-modal">
                          <span className="px-6 py-1.5">
                            <span className="inline-flex items-center justify-center gap-2 px-2 py-1 text-sm font-medium text-white align-middle transition-all border border-transparent rounded-full bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tr disabled:opacity-50 disabled:pointer-events-none">
                              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-ditolak-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">16 April 2024</span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-ditolak-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">Pengembangan Aplikasi Manajemen Proyek Metode Agile</span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-ditolak-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">Laporan</span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-ditolak-modal">
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>{" "}
                              </svg>
                              Ditolak
                            </span>
                          </span>
                        </button>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-ditolak-modal">
                          <span className="px-6 py-1.5">
                            <span className="inline-flex items-center justify-center gap-2 px-2 py-1 text-sm font-medium text-white align-middle transition-all border border-transparent rounded-full bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tr disabled:opacity-50 disabled:pointer-events-none">
                              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-diterima-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">20 April 2024</span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-diterima-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">Pengembangan Aplikasi Manajemen Proyek Metode Agile</span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-diterima-modal">
                          <span className="block px-6 py-2">
                            <span className="text-sm text-gray-600">Laporan</span>
                          </span>
                        </button>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-diterima-modal">
                          <span className="block px-6 py-2">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Diterima
                            </span>
                          </span>
                        </button>
                      </td>

                      <td className="size-px whitespace-nowrap">
                        <button type="button" className="block" data-hs-overlay="#hs-ai-diterima-modal">
                          <span className="px-6 py-1.5">
                            <span className="inline-flex items-center justify-center gap-2 px-2 py-1 text-sm font-medium text-white align-middle transition-all border border-transparent rounded-full bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tr disabled:opacity-50 disabled:pointer-events-none">
                              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              View
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Footer */}
                <div className="grid gap-3 px-6 py-4 border-t border-gray-200 md:flex md:justify-between md:items-center">
                  <div>
                    <p className="text-xs font-semibold text-indigo-600 decoration-2 hover:underline">4 results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 1*/}
      <div id="hs-ai-diterima-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div className="m-3 mt-0 transition-all ease-out opacity-0 hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:max-w-lg sm:w-full sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg pointer-events-auto rounded-xl">
            <div className="relative overflow-hidden text-center bg-green-600 min-h-32 rounded-t-xl">
              {/* Close Button */}
              <div className="absolute top-2 end-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center flex-shrink-0 text-sm text-white transition-all rounded-lg size-8 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  data-hs-overlay="#hs-ai-diterima-modal"
                >
                  <span className="sr-only">Close</span>
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              {/* SVG Background Element */}
              <figure className="absolute inset-x-0 bottom-0">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                  <path fill="currentColor" className="fill-white" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                </svg>
              </figure>
            </div>

            <div className="relative z-10 -mt-12">
              {/* Icon */}
              <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm">
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                </svg>
              </span>
            </div>

            {/* Body */}
            <div className="p-4 overflow-y-auto sm:p-7">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800">Pendaftaran TA Diterima</h3>
                <p className="text-sm text-gray-500">#002</p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-5 mt-5 sm:mt-10 sm:grid-cols-3">
                <div>
                  <span className="block text-xs text-gray-500 uppercase">Dibuat:</span>
                  <span className="block text-sm font-medium text-gray-800">12 April 2024</span>
                </div>

                <div>
                  <span className="block text-xs text-gray-500 uppercase">Disetujui:</span>
                  <span className="block text-sm font-medium text-gray-800">16 April 2024</span>
                </div>

                <div>
                  <span className="block text-xs text-gray-500 uppercase">Koordinator TA:</span>
                  <div className="flex items-center gap-x-2">
                    <span className="block text-sm font-medium text-gray-800">Prof. Dr. Fulan, M.T.</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-10">
                <h4 className="text-xs font-semibold text-gray-800 uppercase">Summary</h4>

                <ul className="flex flex-col mt-3">
                  <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Judul</span>
                      <span>Analisis dan Implementasi Rancangan SIPTATIF</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Kategori</span>
                      <span>Laporan</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Pembimbing 1</span>
                      <span>Dr. Fulan, M. Kom</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Pembimbing 2</span>
                      <span>Dr. Fulanah, M. Kom</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 bg-green-100 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Berkas</span>
                      <span>Lengkap</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Button */}
              <div className="flex justify-end mt-5 gap-x-2">
                
              <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-lg gap-x-2 bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tr disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-overlay="#hs-ai-diterima-modal"
                >
                  Close
                </button>
              </div>

              <div className="mt-5 sm:mt-10">
                <p className="text-sm text-gray-500">
                  If you have any questions, please contact coordinator{" "}
                  <Link className="inline-flex items-center gap-x-1.5 text-indigo-600 decoration-2 hover:underline font-medium" href="#">
                    fulan@uin-suska.ac.id
                  </Link>{" "}
                  or call at{" "}
                  <Link className="inline-flex items-center gap-x-1.5 text-indigo-600 decoration-2 hover:underline font-medium" href="#">
                    +62878 6868 5950
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal 2*/}
      <div id="hs-ai-ditolak-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div className="m-3 mt-0 transition-all ease-out opacity-0 hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:max-w-lg sm:w-full sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg pointer-events-auto rounded-xl">
            <div className="relative overflow-hidden text-center bg-red-600 min-h-32 rounded-t-xl">
              {/* Close Button */}
              <div className="absolute top-2 end-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center flex-shrink-0 text-sm text-white transition-all rounded-lg size-8 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  data-hs-overlay="#hs-ai-ditolak-modal"
                >
                  <span className="sr-only">Close</span>
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              {/* SVG Background Element */}
              <figure className="absolute inset-x-0 bottom-0">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                  <path fill="currentColor" className="fill-white" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                </svg>
              </figure>
            </div>

            <div className="relative z-10 -mt-12">
              {/* Icon */}
              <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm">
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                </svg>
              </span>
            </div>

            {/* Body */}
            <div className="p-4 overflow-y-auto sm:p-7">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800">Pendaftaran TA Ditolak</h3>
                <p className="text-sm text-gray-500">#001</p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-5 mt-5 sm:mt-10 sm:grid-cols-3">
                <div>
                  <span className="block text-xs text-gray-500 uppercase">Dibuat:</span>
                  <span className="block text-sm font-medium text-gray-800">11 April 2024</span>
                </div>

                <div>
                  <span className="block text-xs text-gray-500 uppercase">Disetujui:</span>
                  <span className="block text-sm font-medium text-gray-800">12 April 2024</span>
                </div>

                <div>
                  <span className="block text-xs text-gray-500 uppercase">Koordinator TA:</span>
                  <div className="flex items-center gap-x-2">
                    <span className="block text-sm font-medium text-gray-800">Prof. Dr. Fulan, M.T.</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-10">
                <h4 className="text-xs font-semibold text-gray-800 uppercase">Summary</h4>

                <ul className="flex flex-col mt-3">
                  <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Judul</span>
                      <span>Analisis dan Implementasi Rancangan SIPTATIF</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Kategori</span>
                      <span>Laporan</span>
                    </div>
                  </li>
                  
                  <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Berkas</span>
                      <span>Tidak Lengkap</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 bg-red-100 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Catatan</span>
                      <span>Setoran hafalan tidak memenuhi!</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Button */}
              <div className="flex justify-end mt-5 gap-x-2">
                
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-lg gap-x-2 bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tr disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-overlay="#hs-ai-ditolak-modal"
                >
                  Close
                </button>
              </div>

              <div className="mt-5 sm:mt-10">
                <p className="text-sm text-gray-500">
                  If you have any questions, please contact coordinator{" "}
                  <Link className="inline-flex items-center gap-x-1.5 text-indigo-600 decoration-2 hover:underline font-medium" href="#">
                    fulan@uin-suska.ac.id
                  </Link>{" "}
                  or call at{" "}
                  <Link className="inline-flex items-center gap-x-1.5 text-indigo-600 decoration-2 hover:underline font-medium" href="#">
                    +62878 6868 5950
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
