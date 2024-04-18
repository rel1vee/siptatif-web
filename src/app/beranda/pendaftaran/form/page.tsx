import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIPTATIF - Formulir Pendaftaran TA Mahasiswa",
};

export default function FormPendaftaran() {
  return (
    <div className="w-full px-4 pt-10 sm:px-6 md:px-8 lg:ps-72">
      {/* Card Section */}
      <div className="max-w-4xl px-4 py-10 mx-auto sm:px-6 lg:px-10 lg:py-6">
        <form>
          {/* Card */}
          <div className="p-4 bg-white border shadow rounded-xl sm:p-7">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900">Form Pendaftaran TA</h2>
              <p className="text-sm text-gray-600">Isi data formulir berikut dengan benar!</p>
            </div>

            {/* Grid */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label htmlFor="af-submit-app-category" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                  Jenis Pendaftaran
                </label>

                <select id="af-submit-app-category" className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg shadow-sm pe-9 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <option selected>Pilih jenis pendaftaran</option>
                  <option>Individu</option>
                  <option>Kelompok</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="af-submit-app-project-name" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                  Nama Mahasiswa
                </label>

                <input
                  id="af-submit-app-project-name"
                  type="text"
                  className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg shadow-sm pe-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="af-submit-project-url" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                  E-mail Mahasiswa
                </label>

                <input
                  id="af-submit-project-url"
                  type="text"
                  className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg shadow-sm pe-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="e.g. muhzakierbaisyas@gmail.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="af-submit-project-url" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                  NIM
                </label>

                <input
                  id="af-submit-project-url"
                  type="text"
                  className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg shadow-sm pe-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="e.g. 12250111134"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="af-submit-project-url" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                  Judul Tugas Akhir
                </label>

                <input
                  id="af-submit-project-url"
                  type="text"
                  className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg shadow-sm pe-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter your title"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="af-submit-app-category" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                  Kategori Tugas Akhir
                </label>

                <select id="af-submit-app-category" className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg shadow-sm pe-9 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <option selected>Pilih kategori</option>
                  <option>Laporan</option>
                  <option>Paper Based</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="af-submit-app-category" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                  Calon Pembimbing 1
                </label>

                <select id="af-submit-app-category" className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg shadow-sm pe-9 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <option selected>Pilih calon pembimbing 2</option>
                  <option>Dr. Fulan, M. Kom.</option>
                  <option>Dr. Fulanah, M. Kom.</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="af-submit-app-category" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                  Calon Pembimbing 2
                </label>

                <select id="af-submit-app-category" className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg shadow-sm pe-9 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <option selected>Pilih calon pembimbing 2</option>
                  <option>Dr. Fulan, M. Kom.</option>
                  <option>Dr. Fulanah, M. Kom.</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="af-submit-app-upload-images" className="inline-block text-sm font-medium text-gray-800 mt-2.5">
                  Berkas
                </label>

                <label
                  htmlFor="af-submit-app-upload-images"
                  className="block p-4 text-center border-2 border-gray-200 border-dashed rounded-lg cursor-pointer group sm:p-7 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                >
                  <input id="af-submit-app-upload-images" name="af-submit-app-upload-images" type="file" className="sr-only" />
                  <svg className="mx-auto text-gray-400 size-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                  </svg>
                  <span className="block mt-2 text-sm text-gray-800">
                    Browse your device or <span className="text-indigo-600 group-hover:text-indigo-700">drag &apos;n drop&apos;</span>
                  </span>
                  <span className="block mt-1 text-xs text-gray-500">Maximum file size is 2 MB</span>
                </label>
              </div>
            </div>

            {/* Send & Cancel Button */}
            <div className="flex justify-center mt-5 gap-x-2">
              <Link href="/beranda/pendaftaran">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-3 text-sm font-semibold text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Batal
                </button>
              </Link>
              <button
                type="button"
                className="inline-flex items-center px-4 py-3 text-sm font-semibold text-white border border-gray-200 rounded-lg gap-x-2 bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tr disabled:opacity-50 disabled:pointer-events-none"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
