import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIPTATIF - Beranda",
};

export default function Beranda() {
  return (
    <div className="w-full px-4 pt-10 sm:px-6 md:px-8 lg:ps-72">
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-2 mx-auto">
        <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Selamat Pagi,<span className="text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600"> Zaki</span>
          </h2>
          <p className="mt-1 text-gray-600">Yuk, berkenalan dengan fitur-fitur yang tersedia di SIPTATIF !</p>
        </div>
        <div className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Link className="flex p-5 transition-all border border-gray-200 rounded-lg group gap-y-6 size-full hover:bg-gray-100" href="/beranda/pendaftaran">
            <svg
              className="flex-shrink-0 size-8 text-gray-800 mt-0.5 me-6"
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
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>

            <div>
              <div>
                <h3 className="block font-bold text-gray-800">Ajukan Pendaftaran TA</h3>
                <p className="mt-3 text-gray-600">Anda dapat mengajukan pendaftaran baru dan melihat riwayat pendaftaran sebelumnya.</p>
              </div>

              <p className="inline-flex items-center mt-3 text-sm font-semibold text-gray-800 gap-x-1">
                Detail
                <svg
                  className="flex-shrink-0 transition ease-in-out size-4 group-hover:translate-x-1"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link className="flex p-5 transition-all border border-gray-200 rounded-lg group gap-y-6 size-full hover:bg-gray-100" href="/beranda/pembimbing">
            <svg
              className="flex-shrink-0 size-8 text-gray-800 mt-0.5 me-6"
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

            <div>
              <div>
                <h3 className="block font-bold text-gray-800">Kuota Pembimbing TA</h3>
                <p className="mt-3 text-gray-600">Anda dapat melihat daftar dosen yang tersedia sebagai pembimbing tugas akhir mahasiswa.</p>
              </div>

              <p className="inline-flex items-center mt-3 text-sm font-semibold text-gray-800 gap-x-1">
                Detail
                <svg
                  className="flex-shrink-0 transition ease-in-out size-4 group-hover:translate-x-1"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link className="flex p-5 transition-all border border-gray-200 rounded-lg group gap-y-6 size-full hover:bg-gray-100" href="/beranda/status">
            <svg
              className="flex-shrink-0 size-8 text-gray-800 mt-0.5 me-6"
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
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>

            <div>
              <div>
                <h3 className="block font-bold text-gray-800">Status Pendaftaran TA</h3>
                <p className="mt-3 text-gray-600">Anda dapat melihat status pendaftaran tugas akhir yang telah diajukan sebelumnya.</p>
              </div>

              <p className="inline-flex items-center mt-3 text-sm font-semibold text-gray-800 gap-x-1">
                Detail
                <svg
                  className="flex-shrink-0 transition ease-in-out size-4 group-hover:translate-x-1"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
