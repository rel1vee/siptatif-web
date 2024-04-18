export default function Loading() {
  return (
    <main className="flex w-full px-4 pt-10 animate-pulse sm:px-6 md:px-8 lg:ps-72">
      <div className="flex-shrink-0">
        <span className="block bg-indigo-200 rounded-full size-12"></span>
      </div>

      <div className="w-full mt-2 ms-4">
        <p className="h-4 bg-indigo-100 rounded-full" style={{ width: "40%" }}></p>

        <ul className="mt-5 space-y-3">
          <li className="h-4 bg-indigo-200 rounded-full w-"></li>
          <li className="h-4 bg-indigo-100 rounded-full"></li>
          <li className="h-4 bg-indigo-200 rounded-full"></li>
          <li className="h-4 bg-indigo-100 rounded-full"></li>
          <li className="h-4 bg-indigo-200 rounded-full"></li>
          <li className="h-4 bg-indigo-100 rounded-full"></li>
          <li className="h-4 bg-indigo-200 rounded-full"></li>
          <li className="h-4 bg-indigo-100 rounded-full"></li>
          <li className="h-4 bg-indigo-200 rounded-full"></li>
        </ul>
      </div>
    </main>
  );
}
