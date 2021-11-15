import type { NextPage } from "next";
import { useState } from "react";
import { Entry, filterEntry } from "../lib";

interface EntryProps {
  name: string;
  description: string;
}

const Entry = ({ name, description }: EntryProps): JSX.Element => {
  return (
    <>
      <dt className="text-lg leading-6 font-medium text-gray-900">{name}</dt>
      <dd className="mt-2 text-base text-gray-500">{description}</dd>
    </>
  );
};

const Results = ({ entries }: { entries: Entry[] | undefined }) => {
  if (entries === undefined) <p>What</p>;

  return (
    <div className="min-w-xl max-w-xl mx-auto lg:py-16 px-4">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-12">
            {entries &&
              entries.map((entry) => (
                <div key={entry.name}>
                  <Entry {...entry} />
                </div>
              ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [search, setSearch] = useState(filterEntry(""));
  console.log(search);

  return (
    <div className="bg-white max-h-screen min-h-full px-4 py-4 md:grid md:place-items-center">
      <div className="w-full">
        <div className="max-w-xl mx-auto">
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
              <div className="flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"></div>
            </div>
          </main>
          <div className="mt-4 relative flex items-center">
            <input
              type="text"
              name="search"
              id="search"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => setSearch(filterEntry(e.target.value))}
            />
          </div>
          <Results entries={search} />
        </div>
      </div>
    </div>
  );
};

export default Home;
