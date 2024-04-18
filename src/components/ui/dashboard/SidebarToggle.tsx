export default function SidebarToggle() {
  return (
    <div className="sticky inset-x-0 top-0 z-20 px-4 bg-white border-y sm:px-6 md:px-8 lg:hidden">
      <div className="flex items-center py-4">
        {/* Navigation Toggle */}
        <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
          <span className="sr-only">Toggle Navigation</span>
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </button>

        {/* Breadcrumb */}
        <ol className="flex items-center ms-3 whitespace-nowrap">
          <li className="flex items-center text-sm text-gray-800">Sistem Informasi Pendaftaran TA Teknik Informatika</li>
        </ol>
      </div>
    </div>
  );
}
