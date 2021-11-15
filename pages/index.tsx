import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="max-w-max mx-auto">
      <main className="sm:flex">
        <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
          ordbok
        </p>
        <div className="sm:ml-6">
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Need a word?
            </h1>
            <p className="mt-1 text-base text-gray-500">
              Informatics is confusing, use this
            </p>
          </div>
          <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700"
              >
                Quick search
              </label>
              <div className="mt-1 relative flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
